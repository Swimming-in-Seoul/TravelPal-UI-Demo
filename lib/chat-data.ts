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
    name: "소피(김소희)",
  },
  chatHistory: [
    {
      date: "2025-06-12",
      displayDate: "2025년 6월 12일",
      messages: [
        {
          id: 1,
          time: "14:30",
          sender: "guide",
          text: "안녕하세요 지민님! 파리 가이드 소피입니다. 계약이 완료되어 연락드려요. 내일부터 3일간 함께할 예정이니 설레네요! 😊",
        },
        {
          id: 2,
          time: "14:32",
          sender: "traveler",
          text: "안녕하세요! 드디어 파리 여행이네요. 정말 기대돼요!",
        },
        {
          id: 3,
          time: "14:33",
          sender: "guide",
          text: "파리에서 특별히 가보고 싶은 곳이 있으신가요? 루브르, 에펠탑 외에도 숨은 명소들을 추천해드릴 수 있어요!",
        },
        {
          id: 4,
          time: "14:35",
          sender: "traveler",
          text: "루브르 박물관은 꼭 가보고 싶어요! 그리고 현지인들이 가는 예쁜 카페나 맛집도 경험해보고 싶습니다.",
        },
        {
          id: 5,
          time: "14:36",
          sender: "guide",
          text: "완벽한 선택이에요! 루브르 박물관 사전 예약을 도와드릴게요. 혹시 선호하는 시간대가 있으신가요?",
        },
        {
          id: 6,
          time: "14:37",
          sender: "traveler",
          text: "오전에 가면 좋을 것 같아요. 사람이 적을 때요.",
        },
        {
          id: 7,
          time: "14:38",
          sender: "guide",
          text: "좋은 생각이에요! 내일 오전 9시 30분 루브르 예약을 진행하겠습니다. 점심은 근처 비스트로 'Le Procope'를 예약해드릴까요? 파리 최초의 카페로 유명해요.",
        },
        {
          id: 8,
          time: "14:40",
          sender: "traveler",
          text: "와 정말 좋네요! 그런데 혹시 해산물 알레르기가 있어서 메뉴 확인 부탁드려요.",
        },
        {
          id: 9,
          time: "14:41",
          sender: "guide",
          text: "알겠습니다! 해산물 없는 메뉴로 미리 확인하고 예약하겠습니다. 교통은 메트로 1일권을 준비해드릴게요.",
        },
        {
          id: 10,
          time: "14:43",
          sender: "guide",
          text: "✅ 루브르 박물관 예약 완료 (내일 9:30)\n✅ Le Procope 점심 예약 완료 (13:00)\n✅ 메트로 1일권 준비\n\n모든 예약이 완료되었습니다!",
        },
      ],
    },
    {
      date: "2025-06-13",
      displayDate: "2025년 6월 13일",
      messages: [
        {
          id: 11,
          time: "08:30",
          sender: "guide",
          text: "좋은 아침이에요! 오늘 루브르 일정 준비되셨나요? 호텔에서 9시에 만나기로 했죠!",
        },
        {
          id: 12,
          time: "08:32",
          sender: "traveler",
          text: "네! 준비 완료했어요. 9시에 로비에서 뵐게요!",
        },
        {
          id: 13,
          time: "11:45",
          sender: "traveler",
          text: "루브르 정말 대박이에요! 모나리자 실물로 보니까 감동이네요 ㅠㅠ",
        },
        {
          id: 14,
          time: "11:46",
          sender: "guide",
          text: "지민님이 좋아하시니 저도 기뻐요! 점심 시간 전에 근처 마카롱 맛집 'Ladurée'에 잠깐 들러볼까요?",
        },
        {
          id: 15,
          time: "11:47",
          sender: "traveler",
          text: "오 좋아요! 마카롱 진짜 좋아해요!",
        },
      ],
    },
  ],
}

// 가이드 인터페이스에서 자동으로 추천하는 메시지
export const aiRecommendation =
  "루브르 박물관 내에는 'Cafe Marly'가 있어요. 튈르리 정원이 보이는 테라스가 있어 전망이 좋습니다. 박물관 밖으로는 5분 거리에 'Bistrot Victoires'라는 현지인들이 좋아하는 비스트로가 있어요. 합리적인 가격에 정통 프랑스 요리를 맛볼 수 있습니다."
