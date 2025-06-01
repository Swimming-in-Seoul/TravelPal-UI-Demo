"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, MapPin, Calendar, DollarSign, FileText } from "lucide-react"

interface CreateTripFormProps {
  onBack: () => void
}

export default function CreateTripForm({ onBack }: CreateTripFormProps) {
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    budget: "",
    specialRequests: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 제출 버튼을 눌러도 실제로는 아무것도 하지 않음
    console.log("여행 계획 제출:", formData)
  }

  return (
    <div className="flex flex-col h-full">
      {/* 헤더 */}
      <div className="p-4 border-b bg-white">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" onClick={onBack} className="mr-3">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-xl font-bold">새로운 여행 계획</h1>
            <p className="text-sm text-gray-500">여행 정보를 입력해주세요</p>
          </div>
        </div>
      </div>

      {/* 폼 영역 */}
      <div className="flex-1 overflow-auto p-4">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          {/* 기본 정보 카드 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                기본 정보
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* 목적지 */}
              <div>
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                  목적지 *
                </label>
                <Input
                  id="destination"
                  type="text"
                  placeholder="예: 니스, 프랑스"
                  value={formData.destination}
                  onChange={(e) => handleInputChange("destination", e.target.value)}
                  required
                />
              </div>

              {/* 여행 기간 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                    <Calendar className="h-4 w-4 inline mr-1" />
                    출발일 *
                  </label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange("startDate", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                    <Calendar className="h-4 w-4 inline mr-1" />
                    도착일 *
                  </label>
                  <Input
                    id="endDate"
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => handleInputChange("endDate", e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* 예산 */}
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                  <DollarSign className="h-4 w-4 inline mr-1" />
                  예산 *
                </label>
                <Input
                  id="budget"
                  type="text"
                  placeholder="예: ₩800,000"
                  value={formData.budget}
                  onChange={(e) => handleInputChange("budget", e.target.value)}
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* 특별 요청사항 카드 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                특별 요청사항
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
                  요청사항 (선택사항)
                </label>
                <Textarea
                  id="specialRequests"
                  placeholder="예: 해변가 근처 숙소를 선호합니다. 현지 해산물 레스토랑 추천 부탁드립니다."
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                  rows={4}
                  className="resize-none"
                />
              </div>
            </CardContent>
          </Card>

          {/* 제출 버튼 */}
          <div className="flex justify-end space-x-3 pt-4">
            <Button type="button" variant="outline" onClick={onBack}>
              취소
            </Button>
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
              여행 계획 제출
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
