"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Star, MessageSquare, Filter, ChevronDown, CheckCircle, Clock, Languages } from "lucide-react"

type Guide = {
  id: number
  name: string
  photo: string
  rating: number
  reviewCount: number
  languages: string[]
  specialties: string[]
  experience: string
  price: string
  availability: string
  description: string
  verified: boolean
}

interface GuideSelectionUIProps {
  trip?: {
    id: number
    title: string
    destination: string
    dates: string
    budget: string
    status: string
    statusColor: string
  }
}

export default function GuideSelectionUI({ trip }: GuideSelectionUIProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("추천순")

  const guides: Guide[] = [
    {
      id: 1,
      name: "김민준",
      photo: "/placeholder.svg?height=120&width=120",
      rating: 4.9,
      reviewCount: 127,
      languages: ["한국어", "영어", "프랑스어"],
      specialties: ["미술관/박물관", "역사", "음식"],
      experience: "5년",
      price: "1일 €120",
      availability: "6월 10일~30일",
      description:
        "5년간 현지 가이드로 활동 중인 김민준입니다. 루브르, 오르세 등 미술관 전문 가이드이며, 현지 맛집 정보에도 능통합니다.",
      verified: true,
    },
    {
      id: 2,
      name: "이서연",
      photo: "/placeholder.svg?height=120&width=120",
      rating: 4.8,
      reviewCount: 93,
      languages: ["한국어", "영어", "스페인어"],
      specialties: ["쇼핑", "현지 축제", "사진 명소"],
      experience: "3년",
      price: "1일 €100",
      availability: "6월 15일~7월 15일",
      description: "숨은 명소와 현지인만 아는 쇼핑 장소를 안내해 드립니다. 여행 사진 촬영도 도와드려요!",
      verified: true,
    },
    {
      id: 3,
      name: "박지훈",
      photo: "/placeholder.svg?height=120&width=120",
      rating: 4.7,
      reviewCount: 78,
      languages: ["한국어", "영어", "이탈리아어"],
      specialties: ["역사", "와인 투어", "현지 교통"],
      experience: "4년",
      price: "1일 €110",
      availability: "6월 1일~8월 31일",
      description: "역사적 명소와 현지 와이너리 투어를 전문으로 합니다. 복잡한 교통 시스템도 쉽게 안내해 드립니다.",
      verified: true,
    },
    {
      id: 4,
      name: "최유진",
      photo: "/placeholder.svg?height=120&width=120",
      rating: 4.9,
      reviewCount: 112,
      languages: ["한국어", "영어", "독일어"],
      specialties: ["자연/하이킹", "사진 명소", "현지 문화"],
      experience: "6년",
      price: "1일 €130",
      availability: "6월 5일~7월 20일",
      description: "아름다운 하이킹 코스와 인생샷 명소를 안내해 드립니다. 현지 문화 체험도 가능합니다.",
      verified: true,
    },
    {
      id: 5,
      name: "정현우",
      photo: "/placeholder.svg?height=120&width=120",
      rating: 4.6,
      reviewCount: 64,
      languages: ["한국어", "영어", "일본어"],
      specialties: ["음식", "나이트라이프", "쇼핑"],
      experience: "2년",
      price: "1일 €90",
      availability: "6월 1일~6월 30일",
      description: "현지 맛집과 펍, 클럽 등 나이트라이프를 소개해 드립니다. 빈티지 쇼핑과 현지 마켓 투어도 가능합니다.",
      verified: false,
    },
  ]

  const filteredGuides = guides.filter(
    (guide) =>
      guide.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.specialties.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      guide.languages.some((l) => l.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`h-3 w-3 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
        />
      ))
  }

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* 헤더 */}
      <div className="p-4 border-b bg-white">
        <h1 className="text-xl font-bold mb-2">여행 가이드 선택</h1>
        <p className="text-sm text-gray-500">
          {trip ? `${trip.title} ${trip.dates}` : "유럽 여행 2025.06.10 - 2025.06.20"}
        </p>
      </div>

      {/* 검색 및 필터 */}
      <div className="p-4 bg-white border-b">
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            className="pl-9 bg-gray-50"
            placeholder="가이드 이름, 언어, 전문 분야 검색"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex space-x-2 overflow-x-auto pb-2">
          <Button variant="outline" size="sm" className="flex items-center whitespace-nowrap">
            <Filter className="h-3 w-3 mr-1" />
            {selectedFilter}
            <ChevronDown className="h-3 w-3 ml-1" />
          </Button>
          <Button variant="outline" size="sm" className="whitespace-nowrap">
            언어
          </Button>
          <Button variant="outline" size="sm" className="whitespace-nowrap">
            전문 분야
          </Button>
        </div>
      </div>

      {/* 가이드 목록 */}
      <div className="flex-1 overflow-auto">
        {filteredGuides.map((guide) => (
          <div key={guide.id} className="p-4 border-b bg-white mb-2">
            <div className="flex">
              {/* 프로필 이미지 */}
              <div className="mr-3">
                <div className="relative">
                  <img
                    src={guide.photo || "/placeholder.svg"}
                    alt={guide.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
                  />
                  {guide.verified && (
                    <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
              </div>

              {/* 가이드 정보 */}
              <div className="flex-1">
                <div className="">
                  <div>
                    <h3 className="font-bold">{guide.name}</h3>
                    <div className="flex items-center mt-1">
                      {renderStars(guide.rating)}
                      <span className="text-sm ml-1">{guide.rating}</span>
                      <span className="text-xs text-gray-500 ml-1">({guide.reviewCount})</span>
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex flex-wrap gap-1">
                  <div className="flex items-center text-xs text-gray-500 mr-2">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{guide.experience}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <Languages className="h-3 w-3 mr-1" />
                    <span>{guide.languages.join(", ")}</span>
                  </div>
                </div>

                <div className="mt-2 flex flex-wrap gap-1">
                  {guide.specialties.map((specialty, index) => (
                    <Badge key={index} variant="outline" className="bg-gray-50 text-gray-600 border-gray-200 text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                <p className="text-xs text-gray-600 mt-2 line-clamp-2">{guide.description}</p>

                <div className="mt-3 flex justify-between items-center">
                  <div className="text-xs text-blue-500 flex items-center">
                    <MessageSquare className="h-3 w-3 mr-1" />
                    <span>리뷰 {guide.reviewCount}개 보기</span>
                  </div>
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                    가이드 선택
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
