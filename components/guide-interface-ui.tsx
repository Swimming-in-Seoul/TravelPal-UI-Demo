"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Calendar,
  MessageSquare,
  Clock,
  User,
  Heart,
  AlertTriangle,
  Coffee,
  Utensils,
  Camera,
  Wine,
  Bookmark,
  CheckCircle,
  X,
  Send,
  AlertCircle,
} from "lucide-react"

export default function GuideInterfaceUI() {
  const [activeTab, setActiveTab] = useState("overview")

  // 여행객 정보
  const traveler = {
    name: "김지민",
    age: 32,
    nationality: "대한민국",
    languages: ["한국어", "영어 (중급)"],
    travelDates: "2025.06.13 - 2025.06.18",
    accommodation: "호텔 스플렌디드, 샹젤리제",
    emergencyContact: "+82-10-1234-5678 (배우자)",
    currentLocation: {
      address: "루브르 박물관 근처",
      coordinates: "48.8606° N, 2.3376° E",
      lastUpdated: "10분 전",
    },
  }

  // 일정 정보
  const itinerary = [
    {
      day: "Day 1 (06/13)",
      date: "2025년 6월 13일 (화)",
      items: [
        {
          time: "09:30",
          activity: "샤를 드골 공항 도착",
          status: "완료",
          notes: "항공편 OZ501, 정시 도착",
        },
        {
          time: "11:00",
          activity: "호텔 체크인",
          status: "완료",
          notes: "얼리 체크인 성공",
        },
        {
          time: "13:00",
          activity: "환영 점심 식사",
          status: "완료",
          notes: "레스토랑 'Le Souffle'에서 식사, 해산물 알레르기 확인됨",
        },
        {
          time: "15:00",
          activity: "몽마르트 언덕 방문",
          status: "완료",
          notes: "사크레쾨르 성당 관람, 현지 화가에게 초상화 그림",
        },
        {
          time: "19:00",
          activity: "저녁 식사",
          status: "완료",
          notes: "현지 비스트로 'Le Petit Canard'에서 오리 요리 만족",
        },
      ],
    },
    {
      day: "Day 2 (06/14)",
      date: "2025년 6월 14일 (수)",
      items: [
        {
          time: "09:00",
          activity: "루브르 박물관",
          status: "진행중",
          notes: "사전 예약 티켓, 오디오 가이드 대여",
        },
        {
          time: "13:00",
          activity: "점심 식사",
          status: "예정",
          notes: "박물관 내 'Café Richelieu' 예약",
        },
        {
          time: "15:00",
          activity: "튈르리 정원 산책",
          status: "예정",
          notes: "",
        },
        {
          time: "17:00",
          activity: "오랑주리 미술관",
          status: "예정",
          notes: "모네 작품 관람 희망",
        },
        {
          time: "19:30",
          activity: "저녁 식사",
          status: "예정",
          notes: "미슐랭 1스타 'Verjus' 예약",
        },
      ],
    },
    {
      day: "Day 3 (06/15)",
      date: "2025년 6월 15일 (목)",
      items: [
        {
          time: "10:00",
          activity: "에펠탑 방문",
          status: "예정",
          notes: "2층까지 티켓 예약 완료",
        },
        {
          time: "12:30",
          activity: "센 강변 피크닉",
          status: "예정",
          notes: "샹 드 마르스 공원, 도시락 준비",
        },
        {
          time: "15:00",
          activity: "센 강 유람선",
          status: "예정",
          notes: "바토무슈 1시간 코스",
        },
        {
          time: "18:00",
          activity: "자유 시간",
          status: "예정",
          notes: "",
        },
        {
          time: "20:00",
          activity: "에펠탑 야경 및 저녁 식사",
          status: "예정",
          notes: "에펠탑 조명쇼 관람 후 근처 레스토랑",
        },
      ],
    },
  ]

  // 채팅 기록
  const chatHistory = [
    {
      date: "2025년 6월 12일",
      messages: [
        {
          time: "14:23",
          sender: "guide",
          text: "안녕하세요! 내일부터 파리에서 고객님을 가이드할 소피입니다. 비행은 편안하게 하시길 바랍니다!",
        },
        {
          time: "14:45",
          sender: "traveler",
          text: "안녕하세요 소피님! 내일 뵙겠습니다. 혹시 파리 날씨는 어떤가요?",
        },
        {
          time: "14:47",
          sender: "guide",
          text: "내일 파리는 맑고 기온은 22°C 정도로 예상됩니다. 가벼운 재킷 정도면 충분할 것 같아요.",
        },
      ],
    },
    {
      date: "2025년 6월 13일",
      messages: [
        {
          time: "08:30",
          sender: "traveler",
          text: "비행기 막 착륙했어요. 입국심사 후 연락드릴게요.",
        },
        {
          time: "09:15",
          sender: "traveler",
          text: "입국심사 완료했습니다. 지금 수하물 찾는 중이에요.",
        },
        {
          time: "09:20",
          sender: "guide",
          text: "네, 저는 도착장 출구에서 'TravelPal' 팻말을 들고 기다리고 있을게요.",
        },
        {
          time: "10:45",
          sender: "guide",
          text: "호텔로 이동 중입니다. 체크인 후 점심 식사 계획대로 진행할까요?",
        },
        {
          time: "10:47",
          sender: "traveler",
          text: "네, 좋아요. 비행기에서 잘 못 자서 조금 피곤하지만 괜찮아요.",
        },
        {
          time: "16:30",
          sender: "traveler",
          text: "몽마르트 정말 좋네요! 특히 사크레쾨르 성당의 전망이 환상적이에요.",
        },
        {
          time: "16:32",
          sender: "guide",
          text: "네, 파리의 전망을 한눈에 볼 수 있는 최고의 장소죠. 현지 화가들의 그림도 마음에 드셨나요?",
        },
        {
          time: "16:35",
          sender: "traveler",
          text: "네, 정말 좋았어요. 한 화가에게 초상화도 그려봤어요. 기념품으로 딱이네요!",
        },
      ],
    },
    {
      date: "2025년 6월 14일",
      messages: [
        {
          time: "08:45",
          sender: "guide",
          text: "좋은 아침이에요! 오늘 루브르 박물관 방문 준비 되셨나요? 9시에 호텔 로비에서 만나요.",
        },
        {
          time: "08:47",
          sender: "traveler",
          text: "네, 준비 중이에요. 혹시 루브르에서 사진 촬영 가능한가요?",
        },
        {
          time: "08:48",
          sender: "guide",
          text: "네, 플래시만 사용하지 않으면 대부분의 작품은 사진 촬영이 가능합니다. 일부 특별 전시는 제한될 수 있어요.",
        },
        {
          time: "09:50",
          sender: "traveler",
          text: "모나리자 정말 인상적이네요! 생각보다 그림이 작아서 놀랐어요.",
        },
      ],
    },
  ]

  // 사용자 취향 및 특이사항
  const preferences = {
    likes: [
      { category: "음식", items: ["프랑스 정통 요리", "디저트", "와인"] },
      { category: "활동", items: ["미술관", "역사 유적지", "현지 문화 체험"] },
      { category: "쇼핑", items: ["현지 수공예품", "패션 아이템"] },
    ],
    dislikes: [
      { category: "음식", items: ["해산물 (알레르기)", "매운 음식"] },
      { category: "활동", items: ["과도한 걷기", "혼잡한 관광지"] },
    ],
    specialNotes: [
      "해산물 알레르기 ���음 (특히 조개류)",
      "사진 촬영에 관심이 많음",
      "와인 시음에 관심 표현",
      "현지 카페에서 여유로운 시간 선호",
      "미술, 특히 인상파 작품에 관심이 많음",
      "아침에 커피를 꼭 마셔야 함",
      "걷는 것보다 대중교통 선호",
    ],
  }

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* 상단 여행객 정보 */}
      <div className="p-4 bg-white border-b">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <User className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <div className="flex items-center">
                <h2 className="text-lg font-bold">{traveler.name}</h2>
                <Badge className="ml-2 bg-green-100 text-green-800 border-0">현재 여행 중</Badge>
              </div>
              <div className="text-sm text-gray-500">{traveler.travelDates} (파리)</div>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button size="sm" variant="outline" className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-1" />
              채팅
            </Button>
            <Button size="sm" className="bg-blue-500 hover:bg-blue-600 flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              통화
            </Button>
          </div>
        </div>

        {/* 현재 위치 정보 */}
        <div className="mt-4 p-3 bg-blue-50 rounded-lg flex items-start">
          <MapPin className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
          <div className="flex-1">
            <div className="font-medium text-blue-800">현재 위치: {traveler.currentLocation.address}</div>
            <div className="text-xs text-blue-600 mt-1">
              좌표: {traveler.currentLocation.coordinates} | 마지막 업데이트: {traveler.currentLocation.lastUpdated}
            </div>
          </div>
        </div>
      </div>

      {/* 탭 네비게이션 */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
        <div className="border-b bg-white">
          <TabsList className="w-full justify-start p-0 h-auto bg-transparent">
            <TabsTrigger
              value="overview"
              className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 rounded-none"
            >
              개요
            </TabsTrigger>
            <TabsTrigger
              value="itinerary"
              className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 rounded-none"
            >
              일정
            </TabsTrigger>
            <TabsTrigger
              value="chat"
              className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 rounded-none"
            >
              채팅 기록
            </TabsTrigger>
            <TabsTrigger
              value="preferences"
              className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 rounded-none"
            >
              취향 및 특이사항
            </TabsTrigger>
          </TabsList>
        </div>

        {/* 개요 탭 */}
        <TabsContent value="overview" className="flex-1 p-0 m-0 overflow-auto">
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 기본 정보 카드 */}
            <div className="bg-white rounded-lg shadow-sm p-4 border">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                <User className="h-4 w-4 mr-2" />
                기본 정보
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">이름:</span>
                  <span className="font-medium">{traveler.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">나이:</span>
                  <span className="font-medium">{traveler.age}세</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">국적:</span>
                  <span className="font-medium">{traveler.nationality}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">언어:</span>
                  <span className="font-medium">{traveler.languages.join(", ")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">숙소:</span>
                  <span className="font-medium">{traveler.accommodation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">비상 연락처:</span>
                  <span className="font-medium">{traveler.emergencyContact}</span>
                </div>
              </div>
            </div>

            {/* 오늘의 일정 카드 */}
            <div className="bg-white rounded-lg shadow-sm p-4 border">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                오늘의 일정
              </h3>
              <div className="space-y-3">
                {itinerary[1].items.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0 ${
                        item.status === "완료"
                          ? "bg-green-100 text-green-600"
                          : item.status === "진행중"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {item.status === "완료" ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : item.status === "진행중" ? (
                        <Clock className="h-4 w-4" />
                      ) : (
                        <Calendar className="h-4 w-4" />
                      )}
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

            {/* 주요 취향 카드 */}
            <div className="bg-white rounded-lg shadow-sm p-4 border">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                <Heart className="h-4 w-4 mr-2" />
                주요 취향
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium flex items-center mb-2">
                    <Coffee className="h-4 w-4 mr-1 text-amber-600" />
                    음식 선호
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {preferences.likes
                      .find((p) => p.category === "음식")
                      ?.items.map((item, i) => (
                        <Badge key={i} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {item}
                        </Badge>
                      ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium flex items-center mb-2">
                    <Camera className="h-4 w-4 mr-1 text-blue-600" />
                    활동 선호
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {preferences.likes
                      .find((p) => p.category === "활동")
                      ?.items.map((item, i) => (
                        <Badge key={i} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          {item}
                        </Badge>
                      ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium flex items-center mb-2">
                    <AlertTriangle className="h-4 w-4 mr-1 text-red-600" />
                    주의사항
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {preferences.dislikes
                      .find((p) => p.category === "음식")
                      ?.items.map((item, i) => (
                        <Badge key={i} variant="outline" className="bg-red-50 text-red-700 border-red-200">
                          {item}
                        </Badge>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 최근 채팅 카드 */}
            <div className="bg-white rounded-lg shadow-sm p-4 border">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                <MessageSquare className="h-4 w-4 mr-2" />
                최근 채팅
              </h3>
              <div className="space-y-3 max-h-[200px] overflow-y-auto">
                {chatHistory[2].messages.map((message, index) => (
                  <div key={index} className={`flex ${message.sender === "guide" ? "justify-start" : "justify-end"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg p-2 text-sm ${
                        message.sender === "guide" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"
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
                <button className="bg-blue-500 text-white rounded-r-md px-3">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* 일정 탭 */}
        <TabsContent value="itinerary" className="flex-1 p-0 m-0 overflow-auto">
          <div className="p-4">
            {itinerary.map((day, dayIndex) => (
              <div key={dayIndex} className="mb-6">
                <div className="flex items-center mb-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                      dayIndex === 0
                        ? "bg-gray-200 text-gray-700"
                        : dayIndex === 1
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {dayIndex + 1}
                  </div>
                  <div>
                    <h3 className="font-bold">{day.day}</h3>
                    <p className="text-sm text-gray-500">{day.date}</p>
                  </div>
                </div>

                <div className="ml-10 border-l-2 border-gray-200 pl-4 space-y-4">
                  {day.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="relative">
                      <div
                        className={`absolute -left-6 top-0 w-4 h-4 rounded-full border-2 border-white ${
                          item.status === "완료"
                            ? "bg-green-500"
                            : item.status === "진행중"
                              ? "bg-blue-500"
                              : "bg-gray-300"
                        }`}
                      ></div>
                      <div className="bg-white rounded-lg shadow-sm p-3 border">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-medium">{item.activity}</div>
                            {item.notes && <p className="text-sm text-gray-500 mt-1">{item.notes}</p>}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-500">{item.time}</span>
                          </div>
                        </div>
                        <div className="mt-2 flex justify-between items-center">
                          <Badge
                            className={`${
                              item.status === "완료"
                                ? "bg-green-100 text-green-800 border-green-200"
                                : item.status === "진행중"
                                  ? "bg-blue-100 text-blue-800 border-blue-200"
                                  : "bg-gray-100 text-gray-800 border-gray-200"
                            }`}
                          >
                            {item.status}
                          </Badge>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" className="h-7 px-2 text-xs">
                              수정
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className={`h-7 px-2 text-xs ${
                                item.status === "완료" ? "text-gray-400" : "text-blue-500 border-blue-200"
                              }`}
                              disabled={item.status === "완료"}
                            >
                              {item.status === "완료" ? "완료됨" : "완료 표시"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* 채팅 기록 탭 */}
        <TabsContent value="chat" className="flex-1 p-0 m-0 overflow-auto">
          <div className="p-4 space-y-6">
            {chatHistory.map((day, dayIndex) => (
              <div key={dayIndex}>
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">{day.date}</div>
                </div>
                <div className="space-y-3">
                  {day.messages.map((message, messageIndex) => (
                    <div
                      key={messageIndex}
                      className={`flex ${message.sender === "guide" ? "justify-start" : "justify-end"}`}
                    >
                      {message.sender === "guide" && (
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                          <User className="h-4 w-4 text-blue-600" />
                        </div>
                      )}
                      <div
                        className={`max-w-[70%] rounded-lg p-3 ${
                          message.sender === "guide"
                            ? "bg-blue-100 text-blue-800 rounded-tl-none"
                            : "bg-gray-100 text-gray-800 rounded-tr-none"
                        }`}
                      >
                        <p>{message.text}</p>
                        <p className="text-xs text-gray-500 mt-1 text-right">{message.time}</p>
                      </div>
                      {message.sender === "traveler" && (
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center ml-2">
                          <User className="h-4 w-4 text-gray-600" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-white border-t flex items-center gap-2 sticky bottom-0">
            <input type="text" placeholder="메시지 입력..." className="flex-1 rounded-md border border-gray-300 p-2" />
            <Button className="bg-blue-500 hover:bg-blue-600">
              <Send className="h-4 w-4 mr-1" />
              보내기
            </Button>
          </div>
        </TabsContent>

        {/* 취향 및 특이사항 탭 */}
        <TabsContent value="preferences" className="flex-1 p-0 m-0 overflow-auto">
          <div className="p-4 space-y-6">
            {/* 선호 항목 */}
            <div className="bg-white rounded-lg shadow-sm p-4 border">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                <Heart className="h-5 w-5 mr-2 text-red-500" />
                선호 항목
              </h3>
              <div className="space-y-4">
                {preferences.likes.map((category, index) => (
                  <div key={index}>
                    <h4 className="text-sm font-medium flex items-center mb-2">
                      {category.category === "음식" ? (
                        <Utensils className="h-4 w-4 mr-1 text-amber-600" />
                      ) : category.category === "활동" ? (
                        <Camera className="h-4 w-4 mr-1 text-blue-600" />
                      ) : (
                        <Bookmark className="h-4 w-4 mr-1 text-purple-600" />
                      )}
                      {category.category}
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {category.items.map((item, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className={`${
                            category.category === "음식"
                              ? "bg-amber-50 text-amber-700 border-amber-200"
                              : category.category === "활동"
                                ? "bg-blue-50 text-blue-700 border-blue-200"
                                : "bg-purple-50 text-purple-700 border-purple-200"
                          }`}
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 비선호 항목 */}
            <div className="bg-white rounded-lg shadow-sm p-4 border">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                <X className="h-5 w-5 mr-2 text-red-500" />
                비선호 항목
              </h3>
              <div className="space-y-4">
                {preferences.dislikes.map((category, index) => (
                  <div key={index}>
                    <h4 className="text-sm font-medium flex items-center mb-2">
                      {category.category === "음식" ? (
                        <Utensils className="h-4 w-4 mr-1 text-red-600" />
                      ) : (
                        <AlertTriangle className="h-4 w-4 mr-1 text-orange-600" />
                      )}
                      {category.category}
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {category.items.map((item, i) => (
                        <Badge key={i} variant="outline" className="bg-red-50 text-red-700 border-red-200">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 특이사항 */}
            <div className="bg-white rounded-lg shadow-sm p-4 border">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                <AlertCircle className="h-5 w-5 mr-2 text-blue-500" />
                특이사항 및 메모
              </h3>
              <div className="space-y-2">
                {preferences.specialNotes.map((note, index) => (
                  <div key={index} className="flex items-start p-2 border-b border-gray-100 last:border-0">
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-sm">{note}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex">
                <input
                  type="text"
                  placeholder="새 메모 추가..."
                  className="flex-1 text-sm rounded-l-md border border-gray-300 p-2"
                />
                <button className="bg-blue-500 text-white rounded-r-md px-3">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* 채팅 기반 분석 */}
            <div className="bg-white rounded-lg shadow-sm p-4 border">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-purple-500" />
                채팅 기반 취향 분석
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Wine className="h-4 w-4 text-purple-500 mr-2" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">와인 선호도</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium ml-2">85%</span>
                </div>
                <div className="flex items-center">
                  <Camera className="h-4 w-4 text-blue-500 mr-2" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">사진 촬영 관심도</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium ml-2">90%</span>
                </div>
                <div className="flex items-center">
                  <Coffee className="h-4 w-4 text-amber-500 mr-2" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">카페 방문 선호도</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-amber-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium ml-2">75%</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function Phone(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function Plus(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}
