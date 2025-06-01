"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { User, Star } from "lucide-react"

export default function TripGuideInfoTab() {
  // 가이드 프로필 정보 수정
  const guideProfile = {
    name: "소피(김소희)",
    photo: "/placeholder.svg?height=120&width=120",
    languages: ["한국어", "영어", "프랑스어"],
    specialties: ["미술관/박물관", "역사", "음식", "와인"],
    experience: "5년",
    location: "파리",
    introduction:
      "파리에서 5년간 현지 가이드로 활동 중인 소피입니다. 한국인으로서 파리에 정착하여 루브르, 오르세 등 미술관 전문 도슨트를 하고 있으며, 현지 맛집을 잘 추천해드릴 자신 있습니다.",
    rating: 4.8,
    totalReviews: 127,
    totalTravelers: 89,
    joinDate: "2019.03.15",
  }

  const recentReviews = [
    {
      id: 1,
      travelerName: "김지*",
      rating: 5,
      date: "2025.06.10",
      comment: "정말 친절하고 전문적이었어요. 파리의 숨은 명소들을 많이 알려주셔서 감사했습니다!",
    },
    {
      id: 2,
      travelerName: "이서*",
      rating: 4,
      date: "2025.05.28",
      comment: "미술관 설명이 정말 좋았어요. 다음에 파리 오면 또 부탁드리고 싶습니다.",
    },
    {
      id: 3,
      travelerName: "박준*",
      rating: 5,
      date: "2025.05.15",
      comment: "현지인만 아는 맛집들을 소개해주셔서 정말 만족스러운 여행이었습니다.",
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

  return (
    <div className="flex flex-col h-full overflow-auto">
      <div className="p-4 space-y-6">
        {/* 내 프로필 */}
        <div className="bg-white rounded-lg shadow-sm p-6 border">
          <div className="mb-4">
            <h3 className="font-bold text-gray-800 text-lg flex items-center">
              <User className="h-5 w-5 mr-2" />내 가이드 프로필
            </h3>
          </div>

          <div className="flex items-start space-x-4">
            <img
              src={guideProfile.photo || "/placeholder.svg"}
              alt={guideProfile.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
            />

            <div className="flex-1">
              <h4 className="text-xl font-bold mb-2">{guideProfile.name}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-gray-500">위치:</span>
                  <span className="ml-2 font-medium">{guideProfile.location}</span>
                </div>
                <div>
                  <span className="text-gray-500">경력:</span>
                  <span className="ml-2 font-medium">{guideProfile.experience}</span>
                </div>
                <div>
                  <span className="text-gray-500">가입일:</span>
                  <span className="ml-2 font-medium">{guideProfile.joinDate}</span>
                </div>
                <div>
                  <span className="text-gray-500">총 가이드 횟수:</span>
                  <span className="ml-2 font-medium">{guideProfile.totalTravelers}회</span>
                </div>
              </div>

              <div className="mt-3">
                <span className="text-gray-500 text-sm">언어:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {guideProfile.languages.map((lang, i) => (
                    <Badge key={i} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-3">
                <span className="text-gray-500 text-sm">전문 분야:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {guideProfile.specialties.map((specialty, i) => (
                    <Badge key={i} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <span className="text-gray-500 text-sm">소개:</span>
            <p className="mt-1 text-gray-800 bg-gray-50 p-3 rounded">{guideProfile.introduction}</p>
          </div>
        </div>

        {/* 평점 및 리뷰 */}
        <div className="bg-white rounded-lg shadow-sm p-6 border">
          <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center">
            <Star className="h-5 w-5 mr-2" />
            평점 및 리뷰
          </h3>

          {/* 평점 통계 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="text-center flex flex-col justify-center">
              <div className="flex items-center justify-center mb-2">{renderStars(guideProfile.rating)}</div>
              <div className="text-2xl font-bold text-gray-800">{guideProfile.rating}</div>
              <div className="text-sm text-gray-500">전체 평점</div>
            </div>
            <div className="text-center flex flex-col justify-center">
              <div className="text-2xl font-bold text-gray-800">{guideProfile.totalReviews}</div>
              <div className="text-sm text-gray-500">총 리뷰 수</div>
            </div>
            <div className="text-center flex flex-col justify-center">
              <div className="text-2xl font-bold text-gray-800">{guideProfile.totalTravelers}</div>
              <div className="text-sm text-gray-500">총 가이드 횟수</div>
            </div>
          </div>

          {/* 최근 리뷰 */}
          <div>
            <h4 className="font-medium mb-3">최근 리뷰</h4>
            <div className="space-y-4">
              {recentReviews.map((review) => (
                <div key={review.id} className="border-l-4 border-green-200 pl-4 py-2">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className="font-medium mr-2">{review.travelerName}</span>
                      <div className="flex items-center">{renderStars(review.rating)}</div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{review.comment}</p>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              모든 리뷰 보기
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
