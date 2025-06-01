"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TravelerSidebar from "./traveler-sidebar"
import TravelerHeader from "./traveler-header"
import DashboardTab from "./current-travlers-dashboard-tab"
import ScheduleTab from "./current-travlers-schedule-tab"
import PreferencesTab from "./current-travlers-preferences-tab"
import ChatTab from "./current-travlers-chat-tab"

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

export default function CurrentTravelersUI() {
  const [selectedTraveler, setSelectedTraveler] = useState<number>(1)
  const [activeTab, setActiveTab] = useState("dashboard")

  // 여행객 정보 수정 - 아이디와 나이 변경
  const travelers: Traveler[] = [
    {
      id: 1,
      name: "김지민",
      photo: "/placeholder.svg?height=60&width=60",
      country: "대한민국",
      age: 24,
      languages: ["한국어", "영어 (중급)"],
      travelDates: "2025.06.13 - 2025.06.15",
      status: "ongoing",
      hasNewMessage: true,
      messageCount: 3,
      currentLocation: "루브르 박물관",
      nextSchedule: "11:30 생 루이 섬으로 이동",
      accommodation: "호텔 스플렌디드, 샹젤리제",
      emergencyContact: "+82-10-1234-5678",
    },
    {
      id: 2,
      name: "박서연",
      photo: "/placeholder.svg?height=60&width=60",
      country: "대한민국",
      age: 28,
      languages: ["한국어", "영어 (고급)", "프랑스어 (초급)"],
      travelDates: "2025.06.13 - 2025.06.16",
      status: "ongoing",
      hasNewMessage: false,
      messageCount: 0,
      currentLocation: "에펠탑",
      nextSchedule: "11:15 트로카데로 광장으로 이동",
      accommodation: "르 마레 호텔",
      emergencyContact: "+82-10-5678-9012",
    },
    {
      id: 3,
      name: "이준호",
      photo: "/placeholder.svg?height=60&width=60",
      country: "대한민국",
      age: 35,
      languages: ["한국어", "영어 (중급)"],
      travelDates: "2025.06.12 - 2025.06.15",
      status: "ongoing",
      hasNewMessage: false,
      messageCount: 0,
      currentLocation: "노트르담 대성당",
      nextSchedule: "11:45 생트 샤펠로 이동",
      accommodation: "노보텔 파리 센터",
      emergencyContact: "+82-10-9876-5432",
    },
    {
      id: 4,
      name: "최유진",
      photo: "/placeholder.svg?height=60&width=60",
      country: "대한민국",
      age: 26,
      languages: ["한국어", "영어 (고급)"],
      travelDates: "2025.06.13 - 2025.06.17",
      status: "ongoing",
      hasNewMessage: true,
      messageCount: 2,
      currentLocation: "몽마르트 언덕",
      nextSchedule: "11:20 사크레쾨르 성당으로 이동",
      accommodation: "호텔 드 루브르",
      emergencyContact: "+82-10-1111-2222",
    },
    {
      id: 5,
      name: "정민수",
      photo: "/placeholder.svg?height=60&width=60",
      country: "대한민국",
      age: 31,
      languages: ["한국어", "영어 (중급)", "일본어 (초급)"],
      travelDates: "2025.06.12 - 2025.06.16",
      status: "ongoing",
      hasNewMessage: false,
      messageCount: 0,
      currentLocation: "오르세 미술관",
      nextSchedule: "11:50 튈르리 정원으로 이동",
      accommodation: "호텔 말레셰르브",
      emergencyContact: "+82-10-3333-4444",
    },
    {
      id: 6,
      name: "김하늘",
      photo: "/placeholder.svg?height=60&width=60",
      country: "대한민국",
      age: 29,
      languages: ["한국어", "영어 (고급)", "프랑스어 (중급)"],
      travelDates: "2025.06.13 - 2025.06.18",
      status: "ongoing",
      hasNewMessage: true,
      messageCount: 1,
      currentLocation: "샹젤리제 거리",
      nextSchedule: "11:10 개선문으로 이동",
      accommodation: "그랜드 호텔 뒤 팔레 로얄",
      emergencyContact: "+82-10-5555-6666",
    },
    {
      id: 7,
      name: "이소영",
      photo: "/placeholder.svg?height=60&width=60",
      country: "대한민국",
      age: 33,
      languages: ["한국어", "영어 (중급)"],
      travelDates: "2025.06.12 - 2025.06.17",
      status: "ongoing",
      hasNewMessage: false,
      messageCount: 0,
      currentLocation: "베르사유 궁전",
      nextSchedule: "11:35 베르사유 정원으로 이동",
      accommodation: "호텔 레지나",
      emergencyContact: "+82-10-7777-8888",
    },
    {
      id: 8,
      name: "박동현",
      photo: "/placeholder.svg?height=60&width=60",
      country: "대한민국",
      age: 27,
      languages: ["한국어", "영어 (고급)", "독일어 (초급)"],
      travelDates: "2025.06.13 - 2025.06.19",
      status: "ongoing",
      hasNewMessage: false,
      messageCount: 0,
      currentLocation: "라탱 지구",
      nextSchedule: "11:25 판테온으로 이동",
      accommodation: "호텔 드 크리용",
      emergencyContact: "+82-10-9999-0000",
    },
    {
      id: 9,
      name: "윤채원",
      photo: "/placeholder.svg?height=60&width=60",
      country: "대한민국",
      age: 25,
      languages: ["한국어", "영어 (중급)", "스페인어 (초급)"],
      travelDates: "2025.06.12 - 2025.06.18",
      status: "ongoing",
      hasNewMessage: true,
      messageCount: 4,
      currentLocation: "마레 지구",
      nextSchedule: "11:40 바스티유 광장으로 이동",
      accommodation: "호텔 루테시아",
      emergencyContact: "+82-10-1234-9876",
    },
    {
      id: 10,
      name: "강민호",
      photo: "/placeholder.svg?height=60&width=60",
      country: "대한민국",
      age: 30,
      languages: ["한국어", "영어 (고급)"],
      travelDates: "2025.06.16 - 2025.06.18",
      status: "upcoming",
      hasNewMessage: false,
      messageCount: 0,
      currentLocation: "",
      nextSchedule: "2일 후 08:00 공항 도착",
      accommodation: "호텔 드 라 트레무아유",
      emergencyContact: "+82-10-5678-1234",
    },
    {
      id: 11,
      name: "송지우",
      photo: "/placeholder.svg?height=60&width=60",
      country: "대한민국",
      age: 32,
      languages: ["한국어", "영어 (중급)"],
      travelDates: "2025.06.16 - 2025.06.20",
      status: "upcoming",
      hasNewMessage: false,
      messageCount: 0,
      currentLocation: "",
      nextSchedule: "2일 후 09:45 공항 도착",
      accommodation: "호텔 몰리에르",
      emergencyContact: "+82-10-2468-1357",
    },
  ]

  const currentTraveler = travelers.find((t) => t.id === selectedTraveler)

  return (
    <div className="flex h-full">
      {/* 좌측 사이드바 */}
      <TravelerSidebar
        travelers={travelers}
        selectedTraveler={selectedTraveler}
        onSelectTraveler={setSelectedTraveler}
      />

      {/* 우측 메인 영역 */}
      <div className="flex-1 flex flex-col min-h-0">
        {currentTraveler && (
          <>
            {/* 여행객 헤더 */}
            <TravelerHeader traveler={currentTraveler} />

            {/* 탭 네비게이션 */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col min-h-0">
              <div className="border-b bg-white">
                <TabsList className="w-full justify-start p-0 h-auto bg-transparent">
                  <TabsTrigger
                    value="dashboard"
                    className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-green-500 data-[state=active]:text-green-500 rounded-none"
                  >
                    대시보드
                  </TabsTrigger>
                  <TabsTrigger
                    value="schedule"
                    className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-green-500 data-[state=active]:text-green-500 rounded-none"
                  >
                    전체 일정
                  </TabsTrigger>
                  <TabsTrigger
                    value="preferences"
                    className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-green-500 data-[state=active]:text-green-500 rounded-none"
                  >
                    취향 분석
                  </TabsTrigger>
                  <TabsTrigger
                    value="chat"
                    className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-green-500 data-[state=active]:text-green-500 rounded-none"
                  >
                    채팅
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* 탭 컨텐츠 */}
              <TabsContent value="dashboard" className="flex-1 m-0 overflow-hidden">
                <DashboardTab traveler={currentTraveler} />
              </TabsContent>

              <TabsContent value="schedule" className="flex-1 overflow-hidden m-0 p-0">
                <ScheduleTab />
              </TabsContent>

              <TabsContent value="preferences" className="flex-1 overflow-hidden m-0 p-0">
                <PreferencesTab />
              </TabsContent>

              <TabsContent value="chat" className="flex-1 overflow-hidden m-0 p-0">
                <ChatTab />
              </TabsContent>
            </Tabs>
          </>
        )}
      </div>
    </div>
  )
}
