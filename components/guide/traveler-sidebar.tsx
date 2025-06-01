"use client"

import { Badge } from "@/components/ui/badge"
import { MapPin, Clock } from "lucide-react"

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

interface TravelerSidebarProps {
  travelers: Traveler[]
  selectedTraveler: number
  onSelectTraveler: (id: number) => void
}

export default function TravelerSidebar({ travelers, selectedTraveler, onSelectTraveler }: TravelerSidebarProps) {
  // 알림 있는 여행객을 상단으로 정렬
  const sortedTravelers = [...travelers].sort((a, b) => {
    if (a.hasNewMessage && !b.hasNewMessage) return -1
    if (!a.hasNewMessage && b.hasNewMessage) return 1
    if (a.status === "ongoing" && b.status === "upcoming") return -1
    if (a.status === "upcoming" && b.status === "ongoing") return 1
    return 0
  })

  return (
    <div className="w-80 border-r bg-white overflow-y-auto">
      <div className="p-4 border-b">
        <h2 className="font-bold text-lg">현재 여행객들</h2>
        <p className="text-sm text-gray-500">총 {travelers.length}명</p>
      </div>

      <div className="divide-y">
        {sortedTravelers.map((traveler) => {
          // 김지민님(id: 1)만 클릭 가능하도록 설정
          const isClickable = traveler.id === 1

          return (
            <div
              key={traveler.id}
              className={`p-4 cursor-pointer hover:bg-gray-50 ${
                selectedTraveler === traveler.id ? "bg-blue-50 border-r-2 border-blue-500" : ""
              }`}
              onClick={() => isClickable && onSelectTraveler(traveler.id)}
            >
              <div className="flex items-start">
                <div className="relative">
                  <img
                    src={traveler.photo || "/placeholder.svg"}
                    alt={traveler.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {traveler.hasNewMessage && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-xs text-white font-bold">{traveler.messageCount}</span>
                    </div>
                  )}
                </div>

                <div className="ml-3 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{traveler.name}</h3>
                    <Badge
                      className={`text-xs ${
                        traveler.status === "ongoing"
                          ? "bg-green-100 text-green-800 border-green-200"
                          : "bg-blue-100 text-blue-800 border-blue-200"
                      }`}
                    >
                      {traveler.status === "ongoing" ? "진행중" : "예정 D-2"}
                    </Badge>
                  </div>

                  <p className="text-sm text-gray-500 mt-1">{traveler.travelDates}</p>

                  <div className="flex items-center text-xs text-gray-400 mt-2">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span className="truncate">{traveler.currentLocation}</span>
                  </div>

                  <div className="flex items-center text-xs text-gray-400 mt-1">
                    <Clock className="h-3 w-3 mr-1" />
                    <span className="truncate">{traveler.nextSchedule}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
