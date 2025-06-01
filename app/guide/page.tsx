"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CurrentTravelersUI from "@/components/guide/current-travelers-ui"
import PreviousTravelersUI from "@/components/guide/previous-travelers-ui"
import GuideSettingsUI from "@/components/guide/guide-settings-ui"
import Link from "next/link"
import { ArrowLeft, Users, History, Settings } from "lucide-react"

export default function GuideApp() {
  const [activeTab, setActiveTab] = useState("current")

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="flex items-center justify-between p-4 border-b bg-white">
        <div className="flex items-center">
          <Link href="/" className="mr-3">
            <ArrowLeft className="h-5 w-5 text-gray-500" />
          </Link>
          <h1 className="text-xl font-bold">TravelPal</h1>
          <span className="ml-2 text-sm text-green-500 bg-green-50 px-2 py-0.5 rounded-full">가이드 인터페이스</span>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col min-h-0">
        <TabsContent value="current" className="flex-1 m-0 overflow-hidden">
          <CurrentTravelersUI />
        </TabsContent>
        <TabsContent value="previous" className="flex-1 m-0 overflow-hidden">
          <PreviousTravelersUI />
        </TabsContent>
        <TabsContent value="settings" className="flex-1 m-0 overflow-hidden">
          <GuideSettingsUI />
        </TabsContent>

        <TabsList className="grid grid-cols-3 bg-white border-t">
          <TabsTrigger value="current" className="py-3 data-[state=active]:text-green-500">
            <div className="flex flex-col items-center">
              <Users className="h-5 w-5 mb-1" />
              <span className="text-xs">현재 여행객</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="previous" className="py-3 data-[state=active]:text-green-500">
            <div className="flex flex-col items-center">
              <History className="h-5 w-5 mb-1" />
              <span className="text-xs">이전 여행객</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="settings" className="py-3 data-[state=active]:text-green-500">
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
