"use client"

import { Coffee, Camera, ShoppingBag, AlertCircle } from "lucide-react"
import { getTravelerData } from "@/lib/traveler-data"

export default function PreferencesTab() {
  // lib에서 여행객 데이터 가져오기
  const travelerData = getTravelerData(1) // 김지민님 데이터

  if (!travelerData) {
    return <div className="p-4">여행객 데이터를 찾을 수 없습니다.</div>
  }

  const { preferences } = travelerData

  return (
    <div className="h-full overflow-auto p-4">
      <div className="space-y-6">
        {/* 음식 취향 */}
        <div className="bg-white rounded-lg shadow-sm p-6 border">
          <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center">
            <Coffee className="h-5 w-5 mr-2 text-amber-600" />
            음식 취향
          </h3>

          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="text-sm font-medium text-green-700 mb-2">선호 음식</h5>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    {preferences.likes.food.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-red-700 mb-2">알레르기 & 비선호</h5>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    {preferences.dislikes.food.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-4 bg-amber-50 rounded-lg">
              <p className="text-amber-700 text-sm">
                해산물이 없는 정통 프랑스 비스트로 요리와 디저트 카페를 중심으로 추천하되, 와인 페어링이 좋은 미슐랭
                레스토랑을 저녁 식사로 예약하는 것이 이상적입니다.
              </p>
            </div>
          </div>
        </div>

        {/* 활동 취향 */}
        <div className="bg-white rounded-lg shadow-sm p-6 border">
          <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center">
            <Camera className="h-5 w-5 mr-2 text-blue-600" />
            활동 취향
          </h3>

          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="text-sm font-medium text-blue-700 mb-2">선호 활동</h5>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    {preferences.likes.activities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-orange-700 mb-2">비선호 활동</h5>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    {preferences.dislikes.activities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-700 text-sm">
                미술관과 역사 유적지를 중심으로 한 여유로운 일정을 구성하되, 이동 거리가 짧고 사진 촬영 명소가 많은
                코스로 구성하며, 중간중간 현지 카페에서 휴식 시간을 충분히 확보해야 합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 쇼핑 취향 */}
        <div className="bg-white rounded-lg shadow-sm p-6 border">
          <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center">
            <ShoppingBag className="h-5 w-5 mr-2 text-purple-600" />
            쇼핑 취향
          </h3>

          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="text-sm font-medium text-purple-700 mb-2">관심 품목</h5>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    {preferences.likes.shopping.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-gray-700 mb-2">예산 & 선호 장소</h5>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>예산: €500 - €800</li>
                    <li>선호 장소: 현지 마켓, 부티크</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="text-purple-700 text-sm">
                마레 지구의 부티크와 생 제르맹 데 프레의 고급 상점, 그리고 현지인들이 찾는 마켓을 중심으로 쇼핑 일정을
                구성하되, 특히 프랑스 화장품과 수공예품 매장을 집중적으로 방문하는 것이 좋습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 특이사항 */}
        <div className="bg-white rounded-lg shadow-sm p-6 border">
          <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center">
            <AlertCircle className="h-5 w-5 mr-2 text-red-600" />
            특이사항 및 주의점
          </h3>

          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <ul className="list-disc pl-5 text-sm space-y-1">
                {preferences.specialNotes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-red-50 rounded-lg">
              <p className="text-red-700 text-sm">
                해산물 알레르기에 주의하면서 미술관과 카페를 중심으로 한 여유로운 일정을 구성하고, 사진 촬영을 도와주며,
                현지 문화와 역사에 대한 풍부한 설명을 제공하는 것이 이 고객에게 가장 적합한 가이드 전략입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
