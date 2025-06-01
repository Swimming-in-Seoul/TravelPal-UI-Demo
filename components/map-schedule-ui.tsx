"use client"

import { useState, useMemo } from "react"
import { Badge } from "@/components/ui/badge"
import { MapPin, ChevronDown } from "lucide-react"
import { scheduleData } from "@/lib/schedule-data"

export default function MapScheduleUI() {
  const [currentDay, setCurrentDay] = useState(2)
  // 지도 핀 위치 초기화 및 현재 위치 표시 개선
  const [pins, setPins] = useState([
    { id: 1, top: 25, left: 20 },
    { id: 2, top: 30, left: 40 },
    { id: 3, top: 60, left: 45 },
  ])
  const [draggingPinId, setDraggingPinId] = useState(null)

  const currentSchedule = useMemo(() => {
    return scheduleData.schedule.find((day) => day.day === currentDay)
  }, [currentDay])

  const todaySchedule = useMemo(() => {
    return scheduleData.schedule.find((day) => day.isToday)
  }, [])

  const handleMouseDown = (id) => (e) => {
    setDraggingPinId(id)
  }

  const handleMouseUp = () => {
    setDraggingPinId(null)
  }

  const handleMouseMove = (e) => {
    if (draggingPinId === null) return
    const rect = e.currentTarget.getBoundingClientRect()
    const top = ((e.clientY - rect.top) / rect.height) * 100
    const left = ((e.clientX - rect.left) / rect.width) * 100
    setPins((prev) => prev.map((pin) => (pin.id === draggingPinId ? { ...pin, top, left } : pin)))
  }

  if (!currentSchedule) {
    return <div className="p-4">일정을 찾을 수 없습니다.</div>
  }

  const colors = ["bg-purple-500", "bg-red-500", "bg-orange-500", "bg-teal-500", "bg-pink-500", "bg-indigo-500"]

  return (
    <div className="flex flex-col h-full">
      <div className="relative h-[40%] bg-gray-100" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-full h-full relative">
            <img src="/images/paris-map-large.jpeg" alt="파리 지도" className="w-full h-full object-cover" />
            {pins.map((pin, index) => (
              <div
                key={pin.id}
                className="absolute cursor-move"
                style={{ top: `${pin.top}%`, left: `${pin.left}%`, transform: "translate(-50%, -50%)" }}
                onMouseDown={handleMouseDown(pin.id)}
              >
                <div
                  className={`w-6 h-6 rounded-full ${colors[index % colors.length]} text-white flex items-center justify-center text-xs font-bold shadow-lg`}
                >
                  {pin.id}
                </div>
              </div>
            ))}
            {/* 현재 위치 표시 개선 */}
            <div className="absolute top-[30%] left-[40%] transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 rounded-full bg-blue-500 border-4 border-white shadow-lg flex items-center justify-center animate-pulse">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-blue-600 text-white text-xs px-2 py-0.5 rounded whitespace-nowrap">
                루브르 박물관 방문중
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 일정 영역 */}
      <div className="flex-1 overflow-auto">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center cursor-pointer">
            <ChevronDown className="h-4 w-4 mr-2 text-gray-500" />
            <span className="font-bold">
              {todaySchedule && currentDay === todaySchedule.day ? "오늘" : `Day ${currentDay}`} | Day{currentDay}{" "}
              {currentSchedule.displayDate}
            </span>
          </div>
        </div>

        {/* 일정 아이템들 */}
        <div className="divide-y">
          {currentSchedule.items.map((item, index) => {
            if (item.type === "preparation") {
              return (
                <div key={index} className="p-4 bg-yellow-50 text-sm text-gray-700">
                  <strong>{item.time}</strong> · {item.activity}
                </div>
              )
            }

            if (item.type === "transport") {
              return (
                <div key={index} className="px-4 py-2 text-xs text-gray-600 bg-gray-50">
                  {item.duration || `${item.activity}`}
                </div>
              )
            }

            return (
              <div key={index} className="p-4">
                <div className="flex">
                  {item.pin && (
                    <div
                      className={`w-8 h-8 rounded-full ${item.color} text-white flex items-center justify-center mr-3`}
                    >
                      {item.pin}
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="font-medium">{item.activity}</div>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{item.location}</span>
                      {item.badge && (
                        <Badge
                          variant="outline"
                          className={`ml-2 text-[10px] h-4 ${
                            item.status === "completed"
                              ? "bg-green-50 text-green-500 border-green-200"
                              : item.status === "ongoing"
                                ? "bg-blue-50 text-blue-500 border-blue-200"
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

        <div className="p-4 border-t bg-white">
          <div className="text-xs text-gray-500 text-center">
            "일정을 수정하고 싶어" "루브르에 대해 설명해줘" "근처 맛집 추천해줘" 같은 질문은 채팅에서 할 수 있습니다.
          </div>
        </div>
      </div>
    </div>
  )
}
