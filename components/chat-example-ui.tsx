"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Mic,
  Send,
  AlertCircle,
  MapPin,
  FileCheck,
  Umbrella,
  CreditCard,
  Plug,
  Camera,
  Coffee,
  Calendar,
  CheckSquare,
} from "lucide-react"

type Message = {
  id: number
  sender: "user" | "guide" | "system"
  text: string
  time: string
  icon?:
    | "location"
    | "documents"
    | "weather"
    | "payment"
    | "tips"
    | "photo"
    | "food"
    | "checklist"
    | "itinerary"
    | "none"
}

export default function ChatExampleUI() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "guide",
      text: "안녕하세요! 6월 13일부터 18일까지 파리에서 고객님을 가이드해드릴 소피입니다! 어떤 여행지를 가보고 싶으신가요?",
      time: "09:30",
      icon: "none",
    },
    {
      id: 2,
      sender: "user",
      text: "안녕하세요 소피님! 루브르 박물관과 에펠탑은 꼭 가보고 싶어요. 그리고 현지인들이 자주 가는 숨겨진 카페나 레스토랑도 경험해보고 싶습니다.",
      time: "09:32",
      icon: "none",
    },
    {
      id: 3,
      sender: "guide",
      text: "그렇군요, 일단 프랑스에 오시려면 이런 짐을 꼭 싸셔야 합니다. 확인해주세요!",
      time: "09:33",
      icon: "checklist",
    },
    {
      id: 4,
      sender: "guide",
      text: "【필수 서류】\n✓ 여권 (유효기간 6개월 이상 확인)\n✓ 여행자 보험 증서 (의료비·분실 보장 포함)\n✓ 유로 현금 (신용카드 결제 불가 장소 대비)\n✓ 해외 결제 가능 신용카드 (VISA/MASTER 2종 이상)",
      time: "09:34",
      icon: "documents",
    },
    {
      id: 5,
      sender: "guide",
      text: "【전자기기 및 통신】\n✓ 유럽용 전원 어댑터 (C/E 타입, 220V)\n✓ 보조 배터리 (10,000mAh 이하 기내 반입)\n✓ 현지 유심카드 (오렌지 통신사 추천)\n✓ 휴대폰 목걸이형 케이스 (소매치기 방지)",
      time: "09:35",
      icon: "tips",
    },
    {
      id: 6,
      sender: "guide",
      text: "【의류 및 액세서리】\n✓ 접이식 우산 (돌발 비 대비)\n✓ 선글라스 & 고강도 선크림 (SPF50+)\n✓ 두툼한 가디건 (일교차 10℃ 이상 시)\n✓ 안전 힙색 (소지품 보관용)",
      time: "09:36",
      icon: "weather",
    },
    {
      id: 7,
      sender: "guide",
      text: "【건강 & 위생 용품】\n✓ 상비약 세트 (소화제·진통제·상처연고)\n✓ 여행용 샤워 필터 (석회수 대비)\n✓ 손소독제 & 마스크 (공공장소 이용 시)",
      time: "09:37",
      icon: "tips",
    },
    {
      id: 8,
      sender: "guide",
      text: "【이동 편의 용품】\n✓ TSA 인증 캐리어 자물쇠 (분실 방지)\n✓ 휴대폰 차량 거치대 (렌트카 이용 시 필수)\n✓ 접이식 돗자리 (피크닉·야외 활동용)",
      time: "09:38",
      icon: "tips",
    },
    {
      id: 9,
      sender: "guide",
      text: "【기타 실용템】\n✓ 한국식 컵라면 (장기 여행 시 1일 1개)\n✓ 다용도 스프링 고리 (물병·가방 고정)\n✓ 여권 사본 (분실 대비 스마트폰 저장)",
      time: "09:39",
      icon: "tips",
    },
    {
      id: 10,
      sender: "user",
      text: "와, 정말 상세하게 알려주셔서 감사합니다! 루브르 박물관과 에펠탑은 어떻게 방문하면 좋을까요?",
      time: "09:40",
      icon: "none",
    },
    {
      id: 11,
      sender: "guide",
      text: "루브르 박물관과 에펠탑을 포함한 파리 일정을 다음과 같이 추천해 드립니다!",
      time: "09:41",
      icon: "itinerary",
    },
    {
      id: 12,
      sender: "guide",
      text: "【1일차: 에펠탑 & 센 강 유람】\n\n▪️ 오전 9:00 - 에펠탑 방문 (1층 계단, 2-3층 엘리베이터 추천)\n▪️ 오전 11:30 - 샹 드 마르스 공원에서 피크닉 (현지 샌드위치 추천)\n▪️ 오후 2:00 - 트로카데로 광장에서 에펠탑 전망 감상 및 사진 촬영\n▪️ 오후 4:00 - 센 강 유람선 탑승 (1시간 코스, 바토무슈 추천)\n▪️ 저녁 7:00 - 에펠탑 근처 'Café Constant'에서 정통 프랑스 요리\n▪️ 밤 9:00 - 에펠탑 야경 감상 (매시 정각 5분간 반짝이는 조명쇼)",
      time: "09:42",
      icon: "itinerary",
    },
    {
      id: 13,
      sender: "guide",
      text: "【2일차: 루브르 박물관 & 튈르리 정원】\n\n▪️ 오전 9:00 - 루브르 박물관 입장 (피라미드 지하 입구, 사전 예약 필수)\n▪️ 오전 9:30 - 3대 명작 먼저 관람 (모나리자, 밀로의 비너스, 사모트라케의 니케)\n▪️ 오후 12:30 - 박물관 내 'Café Richelieu'에서 점심\n▪️ 오후 2:00 - 이집트관 및 나폴레옹 아파트먼트 관람\n▪️ 오후 4:00 - 튈르리 정원 산책\n▪️ 오후 5:30 - 오랑주리 미술관 방문 (모네 작품 감상)\n▪️ 저녁 7:30 - 팔레 로얄 정원 주변 'Le Grand Véfour' 또는 'Verjus' 레스토랑",
      time: "09:43",
      icon: "itinerary",
    },
    {
      id: 14,
      sender: "guide",
      text: "【3일차: 몽마르트 & 현지 카페 체험】\n\n▪️ 오전 10:00 - 몽마르트 언덕 방문 (케이블카 또는 계단)\n▪️ 오전 10:30 - 사크레쾨르 성당 관람\n▪️ 오전 11:30 - 테르트르 광장에서 현지 화가들 작품 구경\n▪️ 오후 1:00 - 영화 '아멜리에' 촬영지 '카페 데 두 물랭' 방문\n▪️ 오후 3:00 - 몽마르트 포도원 및 달리 미술관 방문\n▪️ 오후 5:00 - 피갈 지구 산책\n▪️ 저녁 7:00 - 현지인 맛집 'La Maison Rose'에서 저녁\n▪️ 밤 9:00 - 몽마르트에서 파리 야경 감상",
      time: "09:44",
      icon: "itinerary",
    },
    {
      id: 15,
      sender: "guide",
      text: "【루브르 박물관 방문 꿀팁】\n\n• 수요일과 금요일은 밤 9시 45분까지 연장 운영 (혼잡도 낮음)\n• 모나리자는 항상 사람이 많으니 개장 직후 또는 폐장 1시간 전 방문 추천\n• 공식 앱 'Louvre Museum' 다운로드하면 오디오 가이드 및 지도 이용 가능\n• 박물관 내 와이파이 무료 제공\n• 18세 미만 무료 입장 (신분증 지참 필수)\n• 대형 가방은 입장 불가, 물병은 반드시 밀폐형으로 준비",
      time: "09:45",
      icon: "tips",
    },
    {
      id: 16,
      sender: "guide",
      text: "【에펠탑 방문 꿀팁】\n\n• 사전 예약 시 날짜와 시간대 선택 가능 (공식 사이트: www.toureiffel.paris)\n• 2층까지만 방문하는 티켓이 대기 시간 짧고 경제적\n• 1층에서 2층까지는 계단 이용 가능 (저렴한 티켓 옵션)\n• 정상까지는 반드시 엘리베이터 이용 (계단 이용 불가)\n• 7번 버스 이용 시 에펠탑 전망 감상 가능 (저렴한 시내 투어)\n• 마르스 광장 쪽보다 트로카데로 광장에서 보는 전망이 더 아름다움",
      time: "09:46",
      icon: "tips",
    },
    {
      id: 17,
      sender: "user",
      text: "정말 완벽한 정보네요! 이렇게 상세한 일정과 팁까지 알려주셔서 감사합니다. 특히 루브르 박물관 관람 순서가 정말 도움이 될 것 같아요.",
      time: "09:47",
      icon: "none",
    },
  ])

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (input.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        sender: "user",
        text: input,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        icon: "none",
      }
      setMessages([...messages, newMessage])
      setInput("")

      // 가이드 응답 시뮬레이션
      setTimeout(() => {
        const guideResponse: Message = {
          id: messages.length + 2,
          sender: "guide",
          text: "네, 기쁘게 생각합니다! 루브르 박물관은 정말 방대해서 관람 순서가 중요해요. 제가 추천해 드린 3대 명작부터 보시면 주요 작품을 놓치지 않을 수 있습니다. 또한 박물관 내에 카페와 레스토랑이 있어 편하게 쉬어가실 수 있어요. 혹시 특별히 관심 있는 미술 장르나 시대가 있으시면 알려주세요. 맞춤형 관람 코스를 더 자세히 안내해 드릴 수 있습니다!",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          icon: "tips",
        }
        setMessages((prev) => [...prev, guideResponse])
      }, 1000)
    }
  }

  const getIconComponent = (iconType: string) => {
    switch (iconType) {
      case "location":
        return <MapPin className="h-4 w-4 mr-1" />
      case "documents":
        return <FileCheck className="h-4 w-4 mr-1" />
      case "weather":
        return <Umbrella className="h-4 w-4 mr-1" />
      case "payment":
        return <CreditCard className="h-4 w-4 mr-1" />
      case "tips":
        return <Plug className="h-4 w-4 mr-1" />
      case "photo":
        return <Camera className="h-4 w-4 mr-1" />
      case "food":
        return <Coffee className="h-4 w-4 mr-1" />
      case "checklist":
        return <CheckSquare className="h-4 w-4 mr-1" />
      case "itinerary":
        return <Calendar className="h-4 w-4 mr-1" />
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* 채팅 헤더 */}
      <div className="p-4 border-b flex items-center justify-between bg-white">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div>
            <div className="font-medium">TravelPal 가이드 - 소피</div>
            <div className="flex items-center text-xs">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span>
              <span className="text-green-500">연결됨</span>
            </div>
          </div>
        </div>
        <Button variant="outline" size="icon" className="rounded-full h-9 w-9 text-blue-500">
          <AlertCircle className="h-5 w-5" />
        </Button>
      </div>

      {/* 채팅 메시지 영역 - 스크롤 가능하도록 설정 */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user"
                  ? "justify-end"
                  : message.sender === "system"
                    ? "justify-center"
                    : "justify-start"
              }`}
            >
              {message.sender === "system" ? (
                <div className="bg-blue-50 border border-blue-200 text-blue-800 text-xs px-3 py-2 rounded-lg max-w-[90%]">
                  <div className="flex items-center">
                    {getIconComponent(message.icon || "none")}
                    <span>{message.text}</span>
                  </div>
                </div>
              ) : (
                <div
                  className={`max-w-[80%] rounded-2xl p-3 ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white rounded-tr-none"
                      : "bg-white text-gray-800 rounded-tl-none shadow-sm"
                  }`}
                >
                  {message.icon !== "none" && (
                    <div className="flex items-center text-xs mb-1">
                      {getIconComponent(message.icon)}
                      <span>
                        {message.icon === "location"
                          ? "위치 정보"
                          : message.icon === "documents"
                            ? "필수 서류"
                            : message.icon === "weather"
                              ? "날씨 정보"
                              : message.icon === "payment"
                                ? "결제 정보"
                                : message.icon === "tips"
                                  ? "여행 팁"
                                  : message.icon === "photo"
                                    ? "사진 팁"
                                    : message.icon === "food"
                                      ? "맛집 정보"
                                      : message.icon === "checklist"
                                        ? "준비물 체크리스트"
                                        : message.icon === "itinerary"
                                          ? "일정 안내"
                                          : ""}
                      </span>
                    </div>
                  )}
                  <p className="whitespace-pre-line">{message.text}</p>
                  <div
                    className={`text-xs mt-1 text-right ${
                      message.sender === "user" ? "text-blue-100" : "text-gray-400"
                    }`}
                  >
                    {message.time}
                  </div>
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* 입력 영역 */}
      <div className="p-4 bg-white border-t flex items-center gap-2">
        <Button variant="outline" size="icon" className="rounded-full h-10 w-10 flex-shrink-0">
          <Mic className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full h-10 w-10 flex-shrink-0 text-blue-500 border-blue-200"
        >
          <AlertCircle className="h-5 w-5" />
        </Button>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="메시지를 입력하세요..."
          className="rounded-full"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <Button
          onClick={handleSend}
          size="icon"
          className="rounded-full h-10 w-10 flex-shrink-0 bg-blue-500 hover:bg-blue-600"
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
