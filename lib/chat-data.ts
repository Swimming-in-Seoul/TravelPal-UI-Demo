export type ChatMessage = {
  id: number
  time: string
  sender: "guide" | "traveler"
  text: string
}

export type ChatDay = {
  date: string
  displayDate: string
  messages: ChatMessage[]
}

export type ChatData = {
  traveler: {
    id: number
    name: string
  }
  guide: {
    name: string
  }
  chatHistory: ChatDay[]
}

export const chatData: ChatData = {
  traveler: {
    id: 1,
    name: "김지민",
  },
  guide: {
    name: "김민수",
  },
  chatHistory: [
    {
      date: "2025-06-15",
      displayDate: "2025년 6월 15일",
      messages: [
        {
          id: 1,
          time: "10:00",
          sender: "guide",
          text: "안녕하세요! 로마 여행이 5일 앞으로 다가왔네요. 이탈리아 여행 필수 준비물과 주의사항을 안내해드릴게요!",
        },
        {
          id: 2,
          time: "10:01",
          sender: "guide",
          text: "【필수 서류】\n✓ 여권 (유효기간 6개월 이상)\n✓ 여행자보험 증서\n✓ 항공권 출력본\n✓ 숙소 예약 확인서\n✓ 유로 현금 (소액권 위주로 준비)",
        },
        {
          id: 3,
          time: "10:02",
          sender: "guide",
          text: "【전자기기】\n✓ 유럽용 멀티 어댑터 (C타입)\n✓ 보조배터리\n✓ 휴대폰 국제로밍 또는 유심카드\n✓ 카메라 (로마는 정말 포토존이 많아요!)",
        },
        {
          id: 4,
          time: "10:03",
          sender: "traveler",
          text: "어댑터는 어떤 걸 사야 하나요?",
        },
        {
          id: 5,
          time: "10:04",
          sender: "guide",
          text: "이탈리아는 C타입(둥근 2구)을 사용해요. 멀티 어댑터 하나면 충분합니다!",
        },
        {
          id: 6,
          time: "10:05",
          sender: "guide",
          text: "【의류 및 신발】\n✓ 편한 운동화 (로마는 돌길이 많아요)\n✓ 가벼운 가디건 (성당 입장 시 필수)\n✓ 모자와 선글라스\n✓ 바티칸 방문용 정장 (무릎 덮는 바지/치마)",
        },
        {
          id: 7,
          time: "10:06",
          sender: "guide",
          text: "【안전 및 건강】\n✓ 상비약 (소화제, 두통약)\n✓ 선크림 (SPF50+ 추천)\n✓ 소매치기 방지용 크로스백\n✓ 복사한 여권 사본 (분실 대비)",
        },
        {
          id: 8,
          time: "10:07",
          sender: "traveler",
          text: "소매치기가 많나요? 조심해야 할 게 있을까요?",
        },
        {
          id: 9,
          time: "10:08",
          sender: "guide",
          text: "관광지 주변에서 주의하세요! 특히 콜로세움, 트레비분수 근처요. 가방은 앞으로 메고, 지갑은 앞주머니에 넣으세요. 제가 함께 있을 때는 안전하니 걱정 마세요!",
        },
        {
          id: 10,
          time: "10:09",
          sender: "guide",
          text: "【문화 에티켓】\n✓ 성당에서는 모자 벗기, 조용히 하기\n✓ 레스토랑 팁은 5-10% 정도\n✓ 시에스타 시간(14:00-16:00) 상점 휴무\n✓ 인사는 '부온조르노'(좋은 아침), '그라치에'(감사)",
        },
        {
          id: 11,
          time: "10:11",
          sender: "traveler",
          text: "이탈리아어 몇 마디 더 알려주세요!",
        },
        {
          id: 12,
          time: "10:12",
          sender: "guide",
          text: "✓ 스쿠지(실례합니다)\n✓ 페르 파보레(부탁합니다)\n✓ 도베(어디에)\n✓ 콴토 코스타(얼마예요)\n✓ 일 콘토(계산서)\n\n현지인들이 정말 좋아해요!",
        },
        {
          id: 13,
          time: "10:13",
          sender: "traveler",
          text: "완벽해요! 이렇게 자세히 알려주셔서 감사합니다. 준비 완료!",
        },
      ],
    },
  ],
}

// 가이드 인터페이스에서 자동으로 추천하는 메시지
export const aiRecommendation =
  "혹시 약 복용 중인 게 있으시면 영문 처방전도 준비해주세요. 그리고 로마 날씨가 변덕스러우니 우산도 챙기시면 좋을 것 같아요!"
