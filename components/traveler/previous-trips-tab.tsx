"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Calendar, ArrowLeft, Camera, MessageSquare } from "lucide-react"

type PreviousTrip = {
  id: number
  destination: string
  startDate: string
  endDate: string
  guideName: string
  guidePhoto: string
  myRating: number
  coverPhoto: string
  totalDays: number
}

export default function PreviousTripsUI() {
  const [selectedTrip, setSelectedTrip] = useState<number | null>(null)

  const previousTrips: PreviousTrip[] = [
    {
      id: 1,
      destination: "파리, 프랑스",
      startDate: "2025.05.15",
      endDate: "2025.05.20",
      guideName: "김소희(소피)",
      guidePhoto: "/placeholder.svg?height=60&width=60",
      myRating: 5,
      coverPhoto: "/placeholder.svg?height=200&width=300",
      totalDays: 6,
    },
    {
      id: 2,
      destination: "로마, 이탈리아",
      startDate: "2025.04.10",
      endDate: "2025.04.15",
      guideName: "박지훈",
      guidePhoto: "/placeholder.svg?height=60&width=60",
      myRating: 4,
      coverPhoto: "/placeholder.svg?height=200&width=300",
      totalDays: 6,
    },
    {
      id: 3,
      destination: "바르셀로나, 스페인",
      startDate: "2025.03.20",
      endDate: "2025.03.25",
      guideName: "이서연",
      guidePhoto: "/placeholder.svg?height=60&width=60",
      myRating: 5,
      coverPhoto: "/placeholder.svg?height=200&width=300",
      totalDays: 6,
    },
  ]

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
        />
      ))
  }

  const currentTrip = previousTrips.find((t) => t.id === selectedTrip)

  if (selectedTrip && currentTrip) {
    return (
      <div className="flex flex-col h-full overflow-hidden">
        {/* 헤더 */}
        <div className="p-4 border-b bg-white">
          <div className="flex items-center">
            <Button variant="ghost" size="sm" onClick={() => setSelectedTrip(null)} className="mr-3">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h2 className="text-lg font-bold">{currentTrip.destination}</h2>
              <p className="text-sm text-gray-500">
                {currentTrip.startDate} - {currentTrip.endDate}
              </p>
            </div>
          </div>
        </div>

        {/* 여행 상세 내용 */}
        <div className="flex-1 overflow-auto p-4">
          <div className="space-y-6">
            {/* 커버 이미지 */}
            <div className="relative">
              <img
                src={currentTrip.coverPhoto || "/placeholder.svg"}
                alt={currentTrip.destination}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                {currentTrip.totalDays}일
              </div>
            </div>

            {/* 여행 요약 */}
            <div className="bg-white rounded-lg shadow-sm p-4 border">
              <h3 className="font-bold text-gray-800 mb-3">여행 요약</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">목적지:</span>
                  <span className="ml-2 font-medium">{currentTrip.destination}</span>
                </div>
                <div>
                  <span className="text-gray-500">기간:</span>
                  <span className="ml-2 font-medium">{currentTrip.totalDays}일</span>
                </div>
                <div>
                  <span className="text-gray-500">가이드:</span>
                  <span className="ml-2 font-medium">{currentTrip.guideName}</span>
                </div>
                <div>
                  <span className="text-gray-500">내 평점:</span>
                  <div className="ml-2 flex items-center">{renderStars(currentTrip.myRating)}</div>
                </div>
              </div>
            </div>

            {/* 빠른 액션 */}
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-16 flex flex-col items-center justify-center">
                <Camera className="h-6 w-6 mb-1" />
                <span className="text-sm">추억 앨범</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col items-center justify-center">
                <MessageSquare className="h-6 w-6 mb-1" />
                <span className="text-sm">채팅 기록</span>
              </Button>
            </div>

            {/* 일정 기록 */}
            <div className="bg-white rounded-lg shadow-sm p-4 border">
              <h3 className="font-bold text-gray-800 mb-3">일정 기록</h3>
              <p className="text-gray-500 text-sm">이 여행의 상세 일정과 사진들이 여기에 표시됩니다.</p>
            </div>

            {/* 가이드 정보 */}
            <div className="bg-white rounded-lg shadow-sm p-4 border">
              <h3 className="font-bold text-gray-800 mb-3">가이드 정보</h3>
              <div className="flex items-center">
                <img
                  src={currentTrip.guidePhoto || "/placeholder.svg"}
                  alt={currentTrip.guideName}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <div className="font-medium">{currentTrip.guideName}</div>
                  <div className="flex items-center text-sm text-gray-500">
                    {renderStars(currentTrip.myRating)}
                    <span className="ml-1">내가 준 평점</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 평가 및 리뷰 */}
            <div className="bg-white rounded-lg shadow-sm p-4 border">
              <h3 className="font-bold text-gray-800 mb-3">내 평가 및 리뷰</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">전체 평점</span>
                  <div className="flex items-center">{renderStars(currentTrip.myRating)}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm text-gray-700">
                    정말 완벽한 파리 여행이었습니다! 소피님이 현지인만 아는 숨은 명소들을 많이 알려주셔서 특별한 경험을
                    할 수 있었어요. 특히 루브르 박물관 가이드가 정말 전문적이었습니다.
                  </p>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  리뷰 수정하기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* 헤더 */}
      <div className="p-4 border-b bg-white">
        <h1 className="text-xl font-bold">이전 여행</h1>
        <p className="text-sm text-gray-500">지난 여행들의 추억을 다시 살펴보세요</p>
      </div>

      {/* 여행 리스트 */}
      <div className="flex-1 overflow-auto">
        {previousTrips.map((trip) => (
          <div
            key={trip.id}
            className="p-4 border-b bg-white hover:bg-gray-50 cursor-pointer"
            onClick={() => setSelectedTrip(trip.id)}
          >
            <div className="flex">
              {/* 여행 사진 */}
              <div className="mr-4">
                <img
                  src={trip.coverPhoto || "/placeholder.svg"}
                  alt={trip.destination}
                  className="w-20 h-20 rounded-lg object-cover"
                />
              </div>

              {/* 여행 정보 */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">{trip.destination}</h3>
                  <div className="flex items-center">{renderStars(trip.myRating)}</div>
                </div>

                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">
                    {trip.startDate} - {trip.endDate}
                  </span>
                  <span>({trip.totalDays}일)</span>
                </div>

                <div className="flex items-center text-sm text-gray-600">
                  <img
                    src={trip.guidePhoto || "/placeholder.svg"}
                    alt={trip.guideName}
                    className="w-6 h-6 rounded-full object-cover mr-2"
                  />
                  <span>가이드: {trip.guideName}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {previousTrips.length === 0 && (
          <div className="flex flex-col items-center justify-center h-64 text-gray-500">
            <MapPin className="h-12 w-12 mb-4" />
            <p className="text-lg font-medium mb-2">아직 완료된 여행이 없습니다</p>
            <p className="text-sm">첫 번째 여행을 완료하면 여기에 추억이 저장됩니다!</p>
          </div>
        )}
      </div>
    </div>
  )
}
