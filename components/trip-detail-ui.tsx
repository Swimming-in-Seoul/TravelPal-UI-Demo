"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"
import TripPlanTab from "./trip-plan-tab"
import TripGuideTab from "./trip-guide-tab"
import TripBookingTab from "./trip-booking-tab"

const trips = [
  {
    id: 1,
    title: "프랑스 니스 투어",
    destination: "니스, 프랑스",
    dates: "2025.06.16 - 2025.06.18",
    budget: "₩800,000",
    status: "가이드 선택 완료",
    statusColor: "green",
  },
  {
    id: 2,
    title: "이탈리아 로마 투어",
    destination: "로마, 이탈리아",
    dates: "2025.06.20 - 2025.06.23",
    budget: "₩1,200,000",
    status: "가이드 선택 중",
    statusColor: "yellow",
  },
]

interface TripDetailUIProps {
  tripId: number
  onBack: () => void
}

export default function TripDetailUI({ tripId, onBack }: TripDetailUIProps) {
  const [activeTab, setActiveTab] = useState("plan")
  const trip = trips.find((t) => t.id === tripId)

  if (!trip) return null

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="p-4 border-b bg-white">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" onClick={onBack} className="mr-2">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-xl font-bold">{trip.title}</h1>
          <Badge
            className={`ml-2 ${
              trip.statusColor === "green"
                ? "bg-green-100 text-green-800 hover:bg-green-100"
                : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
            }`}
          >
            {trip.status}
          </Badge>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col min-h-0">
        <div className="border-b bg-white">
          <TabsList className="w-full justify-start p-0 h-auto bg-transparent">
            <TabsTrigger
              value="plan"
              className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 rounded-none"
            >
              여행 계획
            </TabsTrigger>
            <TabsTrigger
              value="guide"
              className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 rounded-none"
              disabled={trip.status === "가이드 선택 완료"}
            >
              가이드 선택
            </TabsTrigger>
            <TabsTrigger
              value="booking"
              className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 rounded-none"
              disabled={trip.status !== "가이드 선택 완료"}
            >
              예약 확인
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="plan" className="flex-1 p-0 overflow-auto">
          <TripPlanTab trip={trip} />
        </TabsContent>

        <TabsContent value="guide" className="flex-1 p-0 overflow-auto">
          <TripGuideTab trip={trip} />
        </TabsContent>

        <TabsContent value="booking" className="flex-1 p-0 overflow-auto">
          <TripBookingTab />
        </TabsContent>
      </Tabs>
    </div>
  )
}
