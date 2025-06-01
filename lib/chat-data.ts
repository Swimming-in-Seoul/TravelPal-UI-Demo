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
      date: "2025-06-08",
      displayDate: "2025년 6월 8일",
      messages: [
        {
          id: 1,
          time: "14:30",
          sender: "guide",
          text: "안녕하세요! 로마 여행 가이드 김민수입니다. 계약 완료되었네요. 6월 20일-23일 로마 여행 정말 기대되시죠?",
        },
        {
          id: 2,
          time: "14:32",
          sender: "traveler",
          text: "네 안녕하세요! 로마 여행 정말 기대돼요.",
        },
        {
          id: 3,
          time: "14:33",
          sender: "guide",
          text: "로마에서 꼭 가보고 싶은 곳이 있으신가요? 콜로세움, 바티칸, 트레비 분수 등 유명한 곳들 말고도 숨은 명소들도 많아요!",
        },
        {
          id: 4,
          time: "14:35",
          sender: "traveler",
          text: "콜로세움과 바티칸은 꼭 가보고 싶어요. 그리고 현지 맛집도 경험해보고 싶습니다!",
        },
        {
          id: 5,
          time: "14:36",
          sender: "guide",
          text: "완벽한 선택이에요! 바티칸 박물관은 사전 예약이 필수라서 제가 미리 예약해드릴게요. 항공편은 언제 도착 예정이신가요?",
        },
        {
          id: 6,
          time: "14:38",
          sender: "traveler",
          text: "6월 20일 오전 10시에 로마 공항 도착 예정이에요.",
        },
        {
          id: 7,
          time: "14:39",
          sender: "guide",
          text: "알겠습니다! 공항에서 시내까지 레오나르도 익스프레스 기차표 예약해드릴게요. 숙소는 어디신가요?",
        },
        {
          id: 8,
          time: "14:41",
          sender: "traveler",
          text: "테르미니역 근처 호텔이에요.",
        },
        {
          id: 9,
          time: "14:42",
          sender: "guide",
          text: "좋은 위치네요! 그럼 일정 제안드릴게요:\n\n1일차: 콜로세움 + 포럼 로마눔 (입장권 예약 완료)\n2일차: 바티칸 박물관 + 성베드로 대성당\n3일차: 트라스테베레 맛집 투어\n\n어떠세요?",
        },
        {
          id: 10,
          time: "14:44",
          sender: "traveler",
          text: "완벽해요! 바티칸 예약도 부탁드려요.",
        },
        {
          id: 11,
          time: "14:45",
          sender: "guide",
          text: "바티칸 박물관 6월 21일 오전 9시 예약 완료했습니다! 트라스테베레 맛집 '다 엔조'도 예약해드릴게요. 모든 예약 확인서는 이메일로 보내드릴게요.",
        },
        {
          id: 12,
          time: "14:47",
          sender: "traveler",
          text: "정말 감사해요! 이렇게 다 준비해주시니 너무 편하네요.",
        },
      ],
    },
  ],
}

// 가이드 인터페이스에서 자동으로 추천하는 메시지
export const aiRecommendation =
  "로마 지하철 3일 패스도 미리 구매해드릴까요? 이동이 훨씬 편하실 거예요. 그리고 젤라또 맛집 '지올리티'도 추천드려요!"
