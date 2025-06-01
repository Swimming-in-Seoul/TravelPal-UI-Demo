"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, MapPin, Calendar, User, ArrowLeft } from "lucide-react"

type PreviousTraveler = {
  id: number
  name: string
  photo: string
  destination: string
  travelDates: string
  rating: number
  memo: string
  totalDays: number
}

export default function PreviousTravelersUI() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTraveler, setSelectedTraveler] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("info")

  const previousTravelers: PreviousTraveler[] = [
    {
      id: 1,
      name: "김민*",
      photo: "/placeholder.svg?height=60&width=60",
      destination: "파리",
      travelDates: "2025.05.15 - 2025.05.20",
      rating: 4.8,
      memo: "미술관 투어에 매우 만족해하셨음. 와인 시음 경험도 좋아하심.",
      totalDays: 6,
    },
    {
      id: 2,
      name: "이서*",
      photo: "/placeholder.svg?height=60&width=60",
      destination: "파리",
      travelDates: "2025.04.10 - 2025.04.15",
      rating: 4.9,
      memo: "쇼핑과 카페 투어 중심. 현지 맛집 추천에 매우 만족.",
      totalDays: 6,
    },
    {
      id: 3,
      name: "박준*",
      photo: "/placeholder.svg?height=60&width=60",
      destination: "파리",
      travelDates: "2025.03.20 - 2025.03.25",
      rating: 4.7,
      memo: "역사적 장소에 관심이 많았음. 사진 촬영 도움 요청 많았음.",
      totalDays: 6,
    },
    {
      id: 4,
      name: "최유*",
      photo: "/placeholder.svg?height=60&width=60",
      destination: "파리",
      travelDates: "2025.02.14 - 2025.02.19",
      rating: 4.6,
      memo: "로맨틱한 장소 위주로 투어. 커플 여행이었음.",
      totalDays: 6,
    },
  ]

  const filteredTravelers = previousTravelers.filter(
    (traveler) =>
      traveler.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      traveler.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      traveler.memo.toLowerCase().includes(searchQuery.toLowerCase()),
  )

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

  const currentTraveler = previousTravelers.find((t) => t.id === selectedTraveler)

  if (selectedTraveler && currentTraveler) {
    return (
      <div className="flex flex-col h-full">
        {/* 헤더 */}
        <div className="p-4 border-b bg-white">
          <div className="flex items-center">
            <Button variant="ghost" size="sm" onClick={() => setSelectedTraveler(null)} className="mr-3">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center">
              <img
                src={currentTraveler.photo || "/placeholder.svg"}
                alt={currentTraveler.name}
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <div>
                <h2 className="text-lg font-bold">{currentTraveler.name}</h2>
                <p className="text-sm text-gray-500">
                  {currentTraveler.destination} · {currentTraveler.travelDates}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 탭 네비게이션 */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
          <div className="border-b bg-white">
            <TabsList className="w-full justify-start p-0 h-auto bg-transparent">
              <TabsTrigger
                value="info"
                className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-green-500 data-[state=active]:text-green-500 rounded-none"
              >
                기본 정보
              </TabsTrigger>
              <TabsTrigger
                value="schedule"
                className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-green-500 data-[state=active]:text-green-500 rounded-none"
              >
                여행 일정
              </TabsTrigger>
              <TabsTrigger
                value="chat"
                className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-green-500 data-[state=active]:text-green-500 rounded-none"
              >
                채팅 기록
              </TabsTrigger>
            </TabsList>
          </div>

          {/* 기본 정보 탭 */}
          <TabsContent value="info" className="flex-1 p-4 m-0 overflow-auto">
            <div className="bg-white rounded-lg shadow-sm p-6 border max-w-md">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                <User className="h-5 w-5 mr-2" />
                기본 정보
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">여행객 ID:</span>
                  <span className="font-medium">{currentTraveler.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">여행 목적지:</span>
                  <span className="font-medium">{currentTraveler.destination}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">여행 기간:</span>
                  <span className="font-medium">{currentTraveler.travelDates}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">총 여행 일수:</span>
                  <span className="font-medium">{currentTraveler.totalDays}일</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">받은 평점:</span>
                  <div className="flex items-center">{renderStars(currentTraveler.rating)}</div>
                </div>
                <div className="pt-2 border-t">
                  <span className="text-gray-500 block mb-2">가이드 메모:</span>
                  <p className="text-gray-800 bg-gray-50 p-3 rounded text-sm">{currentTraveler.memo}</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* 여행 일정 탭 */}
          <TabsContent value="schedule" className="flex-1 p-4 m-0 overflow-auto">
            <div className="bg-white rounded-lg shadow-sm p-4 border">
              <h3 className="font-bold text-gray-800 mb-4">여행 일정 기록</h3>
              <p className="text-gray-500">이전 여행의 일정 기록이 여기에 표시됩니다.</p>
            </div>
          </TabsContent>

          {/* 채팅 기록 탭 */}
          <TabsContent value="chat" className="flex-1 p-4 m-0 overflow-auto">
            <div className="bg-white rounded-lg shadow-sm p-4 border">
              <h3 className="font-bold text-gray-800 mb-4">채팅 기록</h3>
              <p className="text-gray-500">이전 여행의 채팅 기록이 여기에 표시됩니다.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full">
      {/* 헤더 */}
      <div className="p-4 border-b bg-white">
        <h2 className="text-lg font-bold">이전 여행객 리스트</h2>
      </div>

      {/* 여행객 리스트 */}
      <div className="flex-1 overflow-auto">
        {filteredTravelers.map((traveler) => (
          <div
            key={traveler.id}
            className={`p-4 border-b bg-white ${traveler.id === 1 ? "hover:bg-gray-50 cursor-pointer" : ""}`}
            onClick={() => (traveler.id === 1 ? setSelectedTraveler(traveler.id) : undefined)}
          >
            <div className="flex items-start">
              <img
                src={traveler.photo || "/placeholder.svg"}
                alt={traveler.name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />

              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-lg">{traveler.name}</h3>
                  <div className="flex items-center">{renderStars(traveler.rating)}</div>
                </div>

                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="mr-4">{traveler.destination}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{traveler.travelDates}</span>
                </div>

                <p className="text-sm text-gray-600 line-clamp-2">{traveler.memo}</p>

                <div className="mt-3">
                  <span className="text-sm text-gray-500">
                    {traveler.travelDates}, 총 {traveler.totalDays}일
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredTravelers.length === 0 && (
          <div className="flex flex-col items-center justify-center h-64 text-gray-500">
            <User className="h-12 w-12 mb-4" />
            <p>검색 결과가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  )
}
