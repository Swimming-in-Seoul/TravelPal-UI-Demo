"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CurrentTripContainer from "@/components/current-trip-container"
import NewTripContainer from "@/components/new-trip-container"
import PreviousTripsUI from "@/components/previous-trips-ui"
import TravelerSettingsUI from "@/components/traveler-settings-ui"
import Link from "next/link"
import { ArrowLeft, Map, Plus, History, Settings } from "lucide-react"

export default function TravelerApp() {
  const [activeTab, setActiveTab] = useState("current")

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="flex items-center justify-between p-4 border-b bg-white">
        <div className="flex items-center">
          <Link href="/" className="mr-3">
            <ArrowLeft className="h-5 w-5 text-gray-500" />
          </Link>
          <h1 className="text-xl font-bold">TravelPal</h1>
          <span className="ml-2 text-sm text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full">여행객 인터페이스</span>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 min-h-0 overflow-hidden">
          <TabsContent
            value="current"
            className="p-0 m-0 h-full overflow-hidden data-[state=active]:flex flex-col min-h-0"
          >
            <CurrentTripContainer />
          </TabsContent>
          <TabsContent value="new" className="p-0 m-0 h-full overflow-hidden data-[state=active]:flex flex-col min-h-0">
            <NewTripContainer />
          </TabsContent>
          <TabsContent
            value="previous"
            className="p-0 m-0 h-full overflow-hidden data-[state=active]:flex flex-col min-h-0"
          >
            <PreviousTripsUI />
          </TabsContent>
          <TabsContent
            value="settings"
            className="p-0 m-0 h-full overflow-hidden data-[state=active]:flex flex-col min-h-0"
          >
            <TravelerSettingsUI />
          </TabsContent>
        </div>

        <TabsList className="grid grid-cols-4 bg-white border-t">
          <TabsTrigger value="current" className="py-3 data-[state=active]:text-blue-500">
            <div className="flex flex-col items-center">
              <Map className="h-5 w-5 mb-1" />
              <span className="text-xs">현재 여행</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="new" className="py-3 data-[state=active]:text-blue-500">
            <div className="flex flex-col items-center">
              <Plus className="h-5 w-5 mb-1" />
              <span className="text-xs">새로운 여행</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="previous" className="py-3 data-[state=active]:text-blue-500">
            <div className="flex flex-col items-center">
              <History className="h-5 w-5 mb-1" />
              <span className="text-xs">이전 여행</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="settings" className="py-3 data-[state=active]:text-blue-500">
            <div className="flex flex-col items-center">
              <Settings className="h-5 w-5 mb-1" />
              <span className="text-xs">설정</span>
            </div>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}
