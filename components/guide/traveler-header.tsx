"use client"

import { MapPin } from "lucide-react"

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

interface TravelerHeaderProps {
  traveler: Traveler
}

export default function TravelerHeader({ traveler }: TravelerHeaderProps) {
  return (
    <div className="p-4 border-b bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={traveler.photo || "/placeholder.svg"}
            alt={traveler.name}
            className="w-12 h-12 rounded-full object-cover mr-3"
          />
          <div>
            <h2 className="text-lg font-bold">{traveler.name}</h2>
            <p className="text-sm text-gray-500">{traveler.travelDates}</p>
          </div>
        </div>

        {/* GPS 위치 정보 - "방문중" 태그 제거 */}
        <div className="text-right">
          <div className="flex items-center justify-end text-sm font-medium text-gray-800 mb-1">
            <MapPin className="h-4 w-4 mr-1 text-blue-500" />
            <span>현재 위치: {traveler.currentLocation}</span>
          </div>
          <div className="text-xs text-blue-600 mb-1">
            <span>좌표: 48.8606° N, 2.3376° E</span>
          </div>
          <div className="text-xs text-gray-500">
            <span>마지막 업데이트: 10분 전</span>
          </div>
        </div>
      </div>
    </div>
  )
}
