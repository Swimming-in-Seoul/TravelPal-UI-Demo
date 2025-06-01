"use client"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { MapPin, Calendar, DollarSign, Plus } from "lucide-react"

const trips = [
  {
    id: 1,
    title: "프랑스 니스 투어",
    destination: "니스, 프랑스",
    dates: "2025.06.16 - 2025.06.18",
    budget: "₩800,000",
    status: "가이드 선택 완료",
    statusColor: "green",
    image: "/placeholder.svg?height=120&width=200",
  },
  {
    id: 2,
    title: "이탈리아 로마 투어",
    destination: "로마, 이탈리아",
    dates: "2025.06.20 - 2025.06.23",
    budget: "₩1,200,000",
    status: "가이드 선택 중",
    statusColor: "yellow",
    image: "/placeholder.svg?height=120&width=200",
  },
]

interface NewTripUIProps {
  onTripSelect: (tripId: number) => void
}

export default function NewTripUI({ onTripSelect }: NewTripUIProps) {
  return (
    <div className="flex flex-col h-full">
      {/* 헤더 */}
      <div className="p-4 border-b bg-white">
        <h1 className="text-xl font-bold">다음 여행 계획</h1>
        <p className="text-sm text-gray-500">계획 중인 여행들을 확인하고 관리하세요</p>
      </div>

      {/* 스크롤 가능한 컨텐츠 영역 */}
      <div className="flex-1 overflow-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trips.map((trip) => (
            <Card
              key={trip.id}
              className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => onTripSelect(trip.id)}
            >
              <div className="relative">
                <img src={trip.image || "/placeholder.svg"} alt={trip.title} className="w-full h-40 object-cover" />
                <Badge
                  className={`absolute top-2 right-2 ${
                    trip.statusColor === "green"
                      ? "bg-green-100 text-green-800 hover:bg-green-100"
                      : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                  }`}
                >
                  {trip.status}
                </Badge>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold">{trip.title}</h2>
                <div className="mt-2 space-y-1">
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{trip.destination}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{trip.dates}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <DollarSign className="h-4 w-4 mr-1" />
                    <span>{trip.budget}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}

          {/* 새로운 여행 추가 카드 */}
          <Card
            className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow border border-gray-200 bg-transparent"
            onClick={() => onTripSelect(0)}
          >
            <div className="relative">
              <div className="w-full h-40 flex items-center justify-center">
                <Plus className="h-16 w-16 text-gray-300" />
              </div>
            </div>
            <div className="p-4 text-center">
              <span className="text-lg font-medium text-gray-400">새로운 여행 가기</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
