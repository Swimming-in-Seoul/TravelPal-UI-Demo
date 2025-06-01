"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Send, Phone } from "lucide-react"
import { chatData } from "@/lib/chat-data"

export default function ChatTab() {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // 상태 변수 추가:
  const [inputValue, setInputValue] = useState("")

  // 입력 변경 핸들러 추가:
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  // 컴포넌트가 마운트될 때 최신 메시지로 스크롤
  useEffect(() => {
    scrollToBottom()
  }, [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
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
                    className={`flex ${group.sender === "traveler" ? "justify-end" : "justify-start"}`}
                  >
                    {group.sender === "guide" && (
                      <div className="flex flex-col items-center mr-2">
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

                    <div className="max-w-[70%]">
                      <div className="space-y-1">
                        {group.messages.map((message, msgIndex) => (
                          <div
                            key={message.id}
                            className={`relative px-4 py-2 ${
                              group.sender === "guide"
                                ? "bg-white text-gray-800 rounded-tl-sm rounded-tr-2xl rounded-br-2xl rounded-bl-2xl shadow-sm border border-gray-100"
                                : "bg-blue-500 text-white rounded-tl-2xl rounded-tr-sm rounded-br-2xl rounded-bl-2xl shadow-sm"
                            } ${msgIndex === 0 ? "" : "mt-1"}`}
                          >
                            <p className="text-sm">{message.text}</p>
                          </div>
                        ))}
                      </div>
                      <p
                        className={`text-xs text-gray-500 mt-1 ${group.sender === "guide" ? "text-left" : "text-right"}`}
                      >
                        {group.messages[group.messages.length - 1].time}
                      </p>
                    </div>

                    {group.sender === "traveler" && (
                      <div className="flex flex-col items-center ml-2">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mb-1 overflow-hidden border border-blue-200">
                          <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="여행객"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-xs text-gray-500 font-medium">나</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
          {/* 스크롤 타겟 */}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* 채팅 입력 영역 */}
      <div className="p-3 bg-white border-t flex items-center gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="메시지 입력..."
            value={inputValue}
            onChange={handleInputChange}
            className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
          />
        </div>
        <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition-colors shadow-sm">
          <Send className="h-5 w-5" />
        </button>
        <button className="bg-green-500 text-white rounded-full p-2 hover:bg-green-600 transition-colors shadow-sm">
          <Phone className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
