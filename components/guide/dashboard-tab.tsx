"use client"

import { Badge } from "@/components/ui/badge"
import { User, Calendar, Heart, MessageSquare, Send, Phone, CheckCircle, Play, Utensils, Landmark } from "lucide-react"
import { chatData } from "@/lib/chat-data"
import { scheduleData, getActivityIcon, type IconType } from "@/lib/schedule-data"
import { getTravelerData, getTravelerPreferencesSummary } from "@/lib/traveler-data"

type Traveler = {
  id: number
  name: string
  photo: string
  country: string
  age: number
  languages: string[]
  travelDates: string
  status: "upcoming" | "ongoing"
  hasNewMessage: boolean
  messageCount: number
  currentLocation: string
  nextSchedule: string
  accommodation: string
  emergencyContact: string
}

interface DashboardTabProps {
  traveler: Traveler
}

// 아이콘 타입에 따른 실제 아이콘 컴포넌트 반환
const getIconComponent = (iconType: IconType, className = "h-4 w-4") => {
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

export default function DashboardTab({ traveler }: DashboardTabProps) {
  // lib에서 여행객 데이터 가져오기
  const travelerData = getTravelerData(traveler.id)
  const preferencesSummary = getTravelerPreferencesSummary(traveler.id)

  // lib에서 오늘의 일정 가져오기
  const getTodaySchedule = () => {
    const todayScheduleData = scheduleData.schedule.find((day) => day.isToday)
    if (!todayScheduleData) return []

    // 주요 활동만 필터링하여 간결화
    return todayScheduleData.items
      .filter((item) => item.type === "attraction" || item.type === "food" || item.type === "activity")
      .map((item) => ({
        time: item.time,
        activity: item.activity,
        status: item.status,
        notes: item.notes || "",
        iconType: getActivityIcon(item), // lib 함수 사용
      }))
  }

  const todaySchedule = getTodaySchedule()

  // 채팅 데이터에서 최신 10개 메시지 가져오기
  const getRecentMessages = () => {
    const allMessages = chatData.chatHistory.flatMap((day) =>
      day.messages.map((message) => ({
        ...message,
        date: day.date,
      })),
    )

    // 최신 10개 메시지만 반환
    return allMessages.slice(-10)
  }

  const recentMessages = getRecentMessages()

  if (!travelerData || !preferencesSummary) {
    return <div className="p-4">여행객 데이터를 찾을 수 없습니다.</div>
  }

  return (
    <div className="p-4 overflow-auto h-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full grid-rows-2">
        {/* 기본 정보 */}
        <div className="bg-white rounded-lg shadow-sm p-4 border h-full flex flex-col">
          <h3 className="font-bold text-gray-800 mb-3 flex items-center">
            <User className="h-4 w-4 mr-2" />
            기본 정보
          </h3>
          <div className="space-y-2 text-sm flex-1">
            <div className="flex justify-between">
              <span className="text-gray-500">이름:</span>
              <span className="font-medium">{travelerData.profile.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">아이디:</span>
              <span className="font-medium">{travelerData.profile.userId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">나이:</span>
              <span className="font-medium">{travelerData.profile.age}세</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">언어:</span>
              <span className="font-medium">{travelerData.profile.languages.join(", ")}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">숙소:</span>
              <span className="font-medium">{travelerData.profile.accommodation}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">비상 연락처:</span>
              <span className="font-medium">{travelerData.profile.emergencyContact}</span>
            </div>
          </div>
        </div>

        {/* 오늘의 일정 */}
        <div className="bg-white rounded-lg shadow-sm p-4 border h-full flex flex-col">
          <h3 className="font-bold text-gray-800 mb-3 flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            오늘의 일정
          </h3>
          <div className="space-y-3 flex-1 overflow-auto">
            {todaySchedule.map((item, index) => (
              <div key={index} className="flex items-start">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0 ${
                    item.status === "completed"
                      ? "bg-blue-100 text-blue-600"
                      : item.status === "ongoing"
                        ? "bg-orange-100 text-orange-600"
                        : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {getIconComponent(item.iconType, "h-4 w-4")}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="font-medium">{item.activity}</span>
                    <span className="text-sm text-gray-500">{item.time}</span>
                  </div>
                  {item.notes && <p className="text-xs text-gray-500 mt-1">{item.notes}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 취향 요약 */}
        <div className="bg-white rounded-lg shadow-sm p-4 border h-full flex flex-col">
          <h3 className="font-bold text-gray-800 mb-3 flex items-center">
            <Heart className="h-4 w-4 mr-2" />
            취향 요약
          </h3>
          <div className="space-y-3 flex-1 overflow-auto">
            <div>
              <h4 className="text-sm font-medium mb-2">선호하는 것</h4>
              <div className="flex flex-wrap gap-1">
                {preferencesSummary.likes.map((item, i) => (
                  <Badge key={i} variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">주의사항</h4>
              <div className="flex flex-wrap gap-1">
                {preferencesSummary.dislikes.map((item, i) => (
                  <Badge key={i} variant="outline" className="bg-red-50 text-red-700 border-red-200 text-xs">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 빠른 채팅 */}
        <div className="bg-white rounded-lg shadow-sm p-4 border h-full flex flex-col">
          <div className="mb-3">
            <h3 className="font-bold text-gray-800 flex items-center">
              <MessageSquare className="h-4 w-4 mr-2" />
              빠른 채팅
            </h3>
          </div>
          <div className="space-y-3 flex-1 overflow-y-auto">
            {recentMessages.map((message, index) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "traveler" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-2 text-sm ${
                    message.sender === "traveler" ? "bg-gray-100 text-gray-800" : "bg-green-100 text-green-800"
                  }`}
                >
                  <p>{message.text}</p>
                  <p className="text-xs text-gray-500 mt-1 text-right">{message.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex">
            <input
              type="text"
              placeholder="메시지 입력..."
              className="flex-1 text-sm rounded-l-md border border-gray-300 p-2"
            />
            <button className="bg-green-500 text-white px-3 flex items-center justify-center">
              <Send className="h-4 w-4" />
            </button>
            <button className="bg-blue-500 text-white rounded-r-md px-3 flex items-center justify-center">
              <Phone className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
