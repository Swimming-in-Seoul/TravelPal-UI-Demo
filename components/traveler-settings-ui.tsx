"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Globe, CreditCard, Shield, Bell, Smartphone, Edit } from "lucide-react"
import { getTravelerData } from "@/lib/traveler-data"

export default function TravelerSettingsUI() {
  const travelerData = getTravelerData(1)
  const profile = travelerData
    ? {
        name: travelerData.profile.name,
        email: "jimin@example.com", // 이메일은 traveler-data에 없으므로 유지
        phone: travelerData.profile.emergencyContact,
        preferredLanguages: travelerData.profile.languages,
        interests: [...travelerData.preferences.likes.activities.slice(0, 4)],
        allergies: travelerData.preferences.allergies,
        emergencyContact: travelerData.profile.emergencyContact,
        age: travelerData.profile.age,
        joinDate: "2024.03.15", // 가입일은 traveler-data에 없으므로 유지
      }
    : {
        name: "김지민",
        email: "jimin@example.com",
        phone: "+82-10-1234-5678",
        preferredLanguages: ["한국어", "영어"],
        interests: ["미술관", "역사", "음식", "사진 촬영"],
        allergies: ["해산물", "조개류"],
        emergencyContact: "+82-10-9876-5432",
        age: 24,
        joinDate: "2024.03.15",
      }

  const [notifications, setNotifications] = useState({
    tripUpdates: true,
    chatMessages: true,
    paymentAlerts: true,
    promotions: false,
  })

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex-1 overflow-auto p-4">
        <div className="space-y-6">
          {/* 내 프로필 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-2" />내 프로필
                </div>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-1" />
                  편집
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start space-x-4">
                <img
                  src="/placeholder.svg?height=80&width=80"
                  alt="프로필 사진"
                  className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
                />

                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-2">{profile.name}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-gray-500">나이:</span>
                      <span className="ml-2 font-medium">{profile.age}세</span>
                    </div>
                    <div>
                      <span className="text-gray-500">가입일:</span>
                      <span className="ml-2 font-medium">{profile.joinDate}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">이메일:</span>
                      <span className="ml-2 font-medium">{profile.email}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">전화번호:</span>
                      <span className="ml-2 font-medium">{profile.phone}</span>
                    </div>
                    <div className="md:col-span-2">
                      <span className="text-gray-500">응급 연락처:</span>
                      <span className="ml-2 font-medium">{profile.emergencyContact}</span>
                    </div>
                  </div>

                  <div className="mt-3">
                    <span className="text-gray-500 text-sm">선호 언어:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {profile.preferredLanguages.map((lang, i) => (
                        <Badge key={i} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-3">
                    <span className="text-gray-500 text-sm">관심사:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {profile.interests.map((interest, i) => (
                        <Badge key={i} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    <span className="text-gray-500 text-sm">알레르기/특이사항:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {profile.allergies.map((allergy, i) => (
                        <Badge key={i} variant="outline" className="bg-red-50 text-red-700 border-red-200">
                          {allergy}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 결제 관리 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                결제 관리
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                결제 수단 관리
              </Button>
              <Button variant="outline" className="w-full justify-start">
                결제 내역
              </Button>
              <Button variant="outline" className="w-full justify-start">
                환불 요청
              </Button>
            </CardContent>
          </Card>

          {/* 개인정보 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                개인정보
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                계정 설정
              </Button>
              <Button variant="outline" className="w-full justify-start">
                개인정보 처리방침
              </Button>
              <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                계정 삭제
              </Button>
            </CardContent>
          </Card>

          {/* 앱 설정 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Smartphone className="h-5 w-5 mr-2" />앱 설정
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* 알림 설정 */}
              <div>
                <h4 className="font-medium mb-3 flex items-center">
                  <Bell className="h-4 w-4 mr-2" />
                  알림 설정
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">여행 업데이트</span>
                    <Switch
                      checked={notifications.tripUpdates}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, tripUpdates: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">채팅 메시지</span>
                    <Switch
                      checked={notifications.chatMessages}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, chatMessages: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">결제 알림</span>
                    <Switch
                      checked={notifications.paymentAlerts}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, paymentAlerts: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">프로모션 알림</span>
                    <Switch
                      checked={notifications.promotions}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, promotions: checked })}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t">
                <Button variant="outline" className="w-full justify-start">
                  <Globe className="h-4 w-4 mr-2" />
                  언어 설정
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  오프라인 모드
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
