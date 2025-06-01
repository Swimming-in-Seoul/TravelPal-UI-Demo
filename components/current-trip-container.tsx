"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Map, MessageSquare, User } from "lucide-react"
import TripMapScheduleTab from "./trip-map-schedule-tab"
import TripChatTab from "./trip-chat-tab"
import TripGuideInfoTab from "./trip-guide-info-tab"

export default function CurrentTripContainer() {
  const [activeTab, setActiveTab] = useState("map")

  return (
    <div className="flex-1 flex flex-col min-h-0">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col min-h-0">
        <div className="border-b bg-white flex-shrink-0">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-lg font-bold">현재 여행 - 파리</h2>
            <span className="text-sm text-gray-500">2025.06.13 - 2025.06.15</span>
          </div>
          <TabsList className="w-full justify-start p-0 h-auto bg-transparent">
            <TabsTrigger
              value="map"
              className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 rounded-none"
            >
              <div className="flex items-center">
                <Map className="h-4 w-4 mr-2" />
                지도 및 일정
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="chat"
              className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 rounded-none"
            >
              <div className="flex items-center">
                <MessageSquare className="h-4 w-4 mr-2" />
                채팅
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="guide"
              className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 rounded-none"
            >
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                가이드 정보
              </div>
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="map" className="flex-1 p-0 m-0 overflow-hidden data-[state=active]:flex flex-col">
          <TripMapScheduleTab />
        </TabsContent>
        <TabsContent value="chat" className="flex-1 p-0 m-0 overflow-hidden data-[state=active]:flex flex-col">
          <TripChatTab />
        </TabsContent>
        <TabsContent value="guide" className="flex-1 p-0 m-0 overflow-hidden data-[state=active]:flex flex-col">
          <TripGuideInfoTab />
        </TabsContent>
      </Tabs>
    </div>
  )
}
