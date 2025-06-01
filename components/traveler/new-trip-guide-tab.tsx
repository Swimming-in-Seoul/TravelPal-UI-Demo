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

interface TripGuideTabProps {
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

export default function TripGuideTab({ trip }: TripGuideTabProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("추천순")

  const guides: Guide[] = [
    {
      id: 1,
      name: "김민수",
      photo: "/placeholder.svg?height=120&width=120",
      rating: 4.9,
      reviewCount: 142,
      languages: ["한국어", "이탈리아어", "영어"],
      specialties: ["고대 로마 유적", "바티칸", "음식 투어"],
      experience: "7년",
      price: "1일 €140",
      availability: "6월 10일~30일",
      description:
        "로마에서 7년간 현지 가이드로 활동 중인 김민수입니다. 콜로세움, 포럼 로마눔 등 고대 로마 유적 전문가이며, 바티칸 박물관 공인 가이드입니다.",
      verified: true,
    },
    {
      id: 2,
      name: "박지영",
      photo: "/placeholder.svg?height=120&width=120",
      rating: 4.8,
      reviewCount: 98,
      languages: ["한국어", "이탈리아어", "영어"],
      specialties: ["미술관", "르네상스", "쇼핑"],
      experience: "5년",
      price: "1일 €120",
      availability: "6월 15일~7월 15일",
      description:
        "바티칸 박물관과 카피톨리니 박물관 전문 가이드입니다. 르네상스 미술과 로마의 숨은 쇼핑 명소를 안내해 드려요!",
      verified: true,
    },
    {
      id: 3,
      name: "이준호",
      photo: "/placeholder.svg?height=120&width=120",
      rating: 4.7,
      reviewCount: 85,
      languages: ["한국어", "이탈리아어", "영어", "스페인어"],
      specialties: ["음식", "와인", "현지 문화"],
      experience: "6년",
      price: "1일 €130",
      availability: "6월 1일~8월 31일",
      description:
        "로마의 정통 이탈리아 요리와 와인을 소개합니다. 트라스테베레 지역의 현지 맛집과 와이너리 투어를 전문으로 합니다.",
      verified: true,
    },
    {
      id: 4,
      name: "최서연",
      photo: "/placeholder.svg?height=120&width=120",
      rating: 4.9,
      reviewCount: 156,
      languages: ["한국어", "이탈리아어", "영어", "프랑스어"],
      specialties: ["역사", "건축", "사진 명소"],
      experience: "8년",
      price: "1일 €150",
      availability: "6월 5일~7월 20일",
      description:
        "로마의 역사와 건축에 대한 깊은 지식을 가지고 있습니다. 인스타그램 명소와 숨은 포토존을 안내해 드립니다.",
      verified: true,
    },
    {
      id: 5,
      name: "정현우",
      photo: "/placeholder.svg?height=120&width=120",
      rating: 4.6,
      reviewCount: 72,
      languages: ["한국어", "이탈리아어", "영어"],
      specialties: ["젤라또", "카페", "야경 투어"],
      experience: "3년",
      price: "1일 €100",
      availability: "6월 1일~6월 30일",
      description: "로마 최고의 젤라또 가게와 전통 카페를 소개합니다. 로마의 아름다운 야경 명소 투어도 가능합니다.",
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
