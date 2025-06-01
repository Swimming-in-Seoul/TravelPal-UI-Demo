"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, Calendar, CheckCircle, Play, Utensils, Landmark, Moon, Sunrise } from "lucide-react"
import { scheduleData, getActivityIcon, type IconType } from "@/lib/schedule-data"

// 아이콘 타입에 따른 실제 아이콘 컴포넌트 반환
const getIconComponent = (iconType: IconType, className = "h-3 w-3") => {
  switch (iconType) {
    case "checkCircle":
      return <CheckCircle className={className} />
    case "play":
      return <Play className={className} />
    case "utensils":
      return <Utensils className={className} />
    case "landmark":
      return <Landmark className={className} />
    case "calendar":
    default:
      return <Calendar className={className} />
  }
}

export default function ScheduleTab() {
  const [currentDay, setCurrentDay] = useState(2)
  // 현재 위치도 드래그 가능하도록 상태 추가
  const [currentLocation, setCurrentLocation] = useState({ top: 10, left: 40 })
  const [pins, setPins] = useState([
    { id: 1, top: 35, left: 30 },
    { id: 2, top: 30, left: 45 },
    { id: 3, top: 60, left: 50 },
    { id: 4, top: 45, left: 35 },
    { id: 5, top: 25, left: 55 },
    { id: 6, top: 50, left: 40 },
  ])
  const [draggingPinId, setDraggingPinId] = useState<number | "current" | null>(null)

  const currentSchedule = useMemo(() => {
    return scheduleData.schedule.find((day) => day.day === currentDay)
  }, [currentDay])

  const todaySchedule = useMemo(() => {
    return scheduleData.schedule.find((day) => day.isToday)
  }, [])

  const handleMouseDown = (id: number | "current") => (e: React.MouseEvent) => {
    setDraggingPinId(id)
  }

  const handleMouseUp = () => {
    setDraggingPinId(null)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggingPinId === null) return
    const rect = e.currentTarget.getBoundingClientRect()
    const top = ((e.clientY - rect.top) / rect.height) * 100
    const left = ((e.clientX - rect.left) / rect.width) * 100

    if (draggingPinId === "current") {
      setCurrentLocation({ top, left })
    } else {
      setPins((prev) => prev.map((pin) => (pin.id === draggingPinId ? { ...pin, top, left } : pin)))
    }
  }

  if (!currentSchedule) {
    return <div className="p-4">일정을 찾을 수 없습니다.</div>
  }

  // 핀이 있는 아이템들만 필터링 - 1번 핀을 초록색으로 변경
  const schedulePins = currentSchedule.items
    .filter((item) => item.pin)
    .map((item) => {
      const pinData = pins.find((p) => p.id === item.pin!)
      return {
        id: item.pin!,
        top: pinData?.top || 10 + (item.pin! - 1) * 20,
        left: pinData?.left || 40 + (item.pin! - 1) * 5,
        name: item.activity,
        visited: item.status === "completed",
        color: item.pin === 1 ? "bg-green-500" : item.color, // 1번 핀을 초록색으로 변경
      }
    })

  return (
    <div className="flex flex-col h-full">
      {/* 지도 영역 */}
      <div className="h-[40%] bg-gray-100 relative" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-full h-full relative">
            <img src="/images/paris-map-large.jpeg" alt="파리 지도" className="w-full h-full object-cover" />

            {/* 방문 위치 핀 */}
            {schedulePins.map((pin) => (
              <div
                key={pin.id}
                className="absolute cursor-move"
                style={{ top: `${pin.top}%`, left: `${pin.left}%`, transform: "translate(-50%, -50%)" }}
                onMouseDown={handleMouseDown(pin.id)}
              >
                <div
                  className={`w-6 h-6 rounded-full ${pin.visited ? "bg-green-500" : pin.color || "bg-gray-500"} text-white flex items-center justify-center text-xs font-bold shadow-lg`}
                >
                  {pin.id}
                </div>
              </div>
            ))}

            {/* 현재 위치 표시 - 드래그 가능하고 방향 표시기 제거 */}
            <div
              className="absolute cursor-move"
              style={{
                top: `${currentLocation.top}%`,
                left: `${currentLocation.left}%`,
                transform: "translate(-50%, -50%)",
              }}
              onMouseDown={handleMouseDown("current")}
            >
              <div className="relative">
                {/* 외부 원 */}
                <div className="w-12 h-12 rounded-full bg-blue-500/20 animate-pulse"></div>
                {/* 중간 원 */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-500/40"></div>
                {/* 내부 원 */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-600 border-2 border-white shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 일정 영역 */}
      <div className="flex-1 overflow-auto">
        {/* 일정 탭 디자인 개선 - 화살표와 오늘에 회색 테두리 추가 */}
        <div className="px-4 py-3 border-b flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* 화살표와 오늘 - 회색 테두리 추가 */}
            <div
              className="flex items-center cursor-pointer bg-gray-50 border border-gray-200 rounded-md px-2 py-1 hover:bg-gray-100 transition-colors"
              onClick={() => {
                // 드롭다운 토글 로직
              }}
            >
              <ChevronDown className="h-4 w-4 mr-1 text-gray-500 stroke-[2.5]" />
              {todaySchedule && currentDay === todaySchedule.day && (
                <span className="text-gray-800 text-xs font-medium">오늘</span>
              )}
            </div>

            {/* 날짜 정보는 별도 영역 */}
            <div className="flex items-center">
              <span className="font-medium text-gray-800">Day {currentDay}</span>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-gray-600">{currentSchedule.displayDate}</span>
            </div>
          </div>
        </div>

        {/* 일정 아이템들 - 구분선 강화, 높이 증가, 핀 중앙 정렬 */}
        <div className="divide-y divide-gray-200">
          {currentSchedule.items.map((item, index) => {
            if (item.type === "preparation") {
              const isWakeUp = item.activity.includes("기상")
              const isSleep = item.activity.includes("취침")

              return (
                <div key={index} className="p-4 bg-gray-50 text-sm text-gray-700 flex items-center">
                  {isWakeUp ? (
                    <Sunrise className="h-4 w-4 mr-3 text-amber-500" />
                  ) : isSleep ? (
                    <Moon className="h-4 w-4 mr-3 text-indigo-500" />
                  ) : (
                    <Calendar className="h-4 w-4 mr-3 text-gray-500" />
                  )}
                  <div>
                    <strong>{item.time}</strong> · {item.activity}
                  </div>
                </div>
              )
            }

            if (item.type === "transport") {
              // 이동 수단 정보 추출 및 포맷팅 - 아이콘 제거
              let transportText = ""

              if (item.activity.toLowerCase().includes("메트로") || item.activity.toLowerCase().includes("지하철")) {
                transportText = `지하철 ${item.duration || item.activity}`
              } else if (item.activity.toLowerCase().includes("버스")) {
                transportText = `버스 ${item.duration || item.activity}`
              } else if (item.activity.toLowerCase().includes("도보")) {
                transportText = item.duration
                  ? `걸어서 ${item.duration.split("·")[1]?.trim() || item.duration}`
                  : `걸어서 이동`
              } else {
                transportText = item.duration || `${item.activity}`
              }

              return (
                <div key={index} className="px-4 py-2 text-xs text-gray-600 bg-gray-50">
                  <span>{transportText}</span>
                </div>
              )
            }

            return (
              <div key={index} className={`p-4 ${item.status === "ongoing" ? "bg-orange-50" : ""}`}>
                <div className="flex items-center">
                  {item.pin && (
                    <div
                      className={`w-7 h-7 rounded-full ${item.pin === 1 ? "bg-green-500" : item.color} text-white flex items-center justify-center mr-3 flex-shrink-0`}
                    >
                      {item.pin}
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="font-medium">{item.activity}</div>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      {getIconComponent(getActivityIcon(item), "h-3 w-3 mr-1 text-gray-500")}
                      <span>{item.location}</span>
                      {item.badge && item.status !== "ongoing" && (
                        <Badge
                          variant="outline"
                          className={`ml-2 text-[10px] h-4 ${
                            item.status === "completed"
                              ? "bg-green-50 text-green-500 border-green-200"
                              : item.badge === "무료입장" || item.badge === "예약완료"
                                ? "bg-green-50 text-green-500 border-green-200"
                                : "bg-orange-50 text-orange-500 border-orange-200"
                          }`}
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                    {item.notes && <div className="text-xs text-gray-600 mt-1">{item.notes}</div>}
                  </div>
                  <div className="flex flex-col text-xs text-right text-gray-500">
                    <span>{item.time}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
