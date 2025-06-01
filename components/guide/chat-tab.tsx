"use client"

import { useEffect, useRef, useState } from "react"
import { Send, Phone } from "lucide-react"
import { chatData, aiRecommendation as defaultAiRecommendation } from "@/lib/chat-data"

export default function ChatTab() {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [inputValue, setInputValue] = useState("")
  const [showAIRecommendation, setShowAIRecommendation] = useState(true)
  const [aiRecommendation, setAIRecommendation] = useState<string>(defaultAiRecommendation)

  // 컴포넌트가 마운트될 때 최신 메시지로 스크롤
  useEffect(() => {
    scrollToBottom()
  }, [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleAcceptRecommendation = () => {
    setInputValue(aiRecommendation)
    setShowAIRecommendation(false)
  }

  const handleRejectRecommendation = () => {
    setShowAIRecommendation(false)
  }

  // LLM 자동 완성 제안 생성 함수
  const generateAIRecommendation = (input: string) => {
    // 항상 기본 추천 메시지를 사용
    setAIRecommendation(defaultAiRecommendation)
  }

  const handleInputChange = (value: string) => {
    setInputValue(value)
    // 입력값에 상관없이 제안 생성
    generateAIRecommendation(value)
  }

  // 메시지 그룹화 함수 - 같은 발신자의 연속된 메시지를 그룹화
  const groupMessages = (messages) => {
    const grouped = []
    let currentGroup = null

    messages.forEach((message) => {
      // 새 그룹 시작 또는 다른 발신자의 메시지
      if (!currentGroup || currentGroup.sender !== message.sender) {
        if (currentGroup) {
          grouped.push(currentGroup)
        }
        currentGroup = {
          sender: message.sender,
          messages: [message],
          firstTime: message.time,
        }
      } else {
        // 같은 발신자의 연속 메시지
        currentGroup.messages.push(message)
      }
    })

    // 마지막 그룹 추가
    if (currentGroup) {
      grouped.push(currentGroup)
    }

    return grouped
  }

  return (
    <div className="flex flex-col h-full min-h-0">
      <div className="flex-1 overflow-auto p-4 bg-gray-50 min-h-0">
        <div className="space-y-6">
          {chatData.chatHistory.map((day, dayIndex) => (
            <div key={dayIndex}>
              {/* 날짜 구분선 */}
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">{day.displayDate}</div>
              </div>

              {/* 채팅 메시지들 - 그룹화 적용 */}
              <div className="space-y-6">
                {groupMessages(day.messages).map((group, groupIndex) => (
                  <div
                    key={groupIndex}
                    className={`flex ${group.sender === "traveler" ? "justify-start" : "justify-end"}`}
                  >
                    {group.sender === "traveler" && (
                      <div className="flex flex-col items-center mr-2">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mb-1 overflow-hidden border border-gray-300">
                          <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="여행객"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-xs text-gray-500 font-medium">김지민</span>
                      </div>
                    )}

                    <div className="max-w-[70%]">
                      <div className="space-y-1">
                        {group.messages.map((message, msgIndex) => (
                          <div
                            key={message.id}
                            className={`relative px-4 py-2 ${
                              group.sender === "traveler"
                                ? "bg-white text-gray-800 rounded-tl-sm rounded-tr-2xl rounded-br-2xl rounded-bl-2xl shadow-sm border border-gray-100"
                                : "bg-green-500 text-white rounded-tl-2xl rounded-tr-sm rounded-br-2xl rounded-bl-2xl shadow-sm"
                            } ${msgIndex === 0 ? "" : "mt-1"}`}
                          >
                            <p className="text-sm">{message.text}</p>
                          </div>
                        ))}
                      </div>
                      <p
                        className={`text-xs text-gray-500 mt-1 ${group.sender === "traveler" ? "text-left" : "text-right"}`}
                      >
                        {group.messages[group.messages.length - 1].time}
                      </p>
                    </div>

                    {group.sender === "guide" && (
                      <div className="flex flex-col items-center ml-2">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mb-1 overflow-hidden border border-green-200">
                          <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="가이드"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-xs text-gray-500 font-medium">소피</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
          {showAIRecommendation && (
            <div className="flex justify-end mb-6">
              <div className="max-w-[70%]">
                <div className="px-4 py-2 bg-green-500 bg-opacity-50 text-white rounded-tl-2xl rounded-tr-sm rounded-br-2xl rounded-bl-2xl shadow-sm">
                  <p className="text-sm">
                    {aiRecommendation}{" "}
                    <span className="inline-flex items-center ml-2">
                      <button
                        onClick={handleAcceptRecommendation}
                        className="text-white hover:text-green-200 transition-colors mr-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </button>
                      <span className="text-white/30 mx-1">|</span>
                      <button
                        onClick={handleRejectRecommendation}
                        className="text-white hover:text-red-200 transition-colors ml-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center ml-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mb-1 overflow-hidden border border-green-200">
                  <img src="/placeholder.svg?height=40&width=40" alt="가이드" className="w-full h-full object-cover" />
                </div>
                <span className="text-xs text-gray-500 font-medium">소피</span>
              </div>
            </div>
          )}
          {/* 스크롤 타겟 */}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* 채팅 입력 영역 */}
      <div className="bg-white border-t">
        <div className="p-3 flex items-center gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
              className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              placeholder="메시지를 입력하세요..."
            />
          </div>
          <button className="bg-green-500 text-white rounded-full p-2 hover:bg-green-600 transition-colors shadow-sm">
            <Send className="h-5 w-5" />
          </button>
          <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition-colors shadow-sm">
            <Phone className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
