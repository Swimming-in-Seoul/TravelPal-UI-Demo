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
      date: "2025-06-14",
      displayDate: "2025년 6월 14일",
      messages: [
        {
          id: 1,
          time: "11:20",
          sender: "traveler",
          text: "여기 박물관이 너무 볼게 많아서, 오후에 오페라 예약은 취소해주세요.",
        },
        {
          id: 2,
          time: "11:21",
          sender: "guide",
          text: "알겠습니다! 오늘 오후 1시 오페라 가르니에 예약을 취소해 드릴게요.",
        },
        {
          id: 3,
          time: "11:23",
          sender: "guide",
          text: "오페라 가르니에 측에 취소 요청을 보냈습니다. 취소 확인 메일이 곧 도착할 예정입니다. 취소 수수료는 없으니 걱정하지 않으셔도 됩니다.",
        },
        {
          id: 4,
          time: "11:25",
          sender: "guide",
          text: "오페라 예약이 성공적으로 취소되었습니다!",
        },
        {
          id: 5,
          time: "11:25",
          sender: "guide",
          text: '루브르 박물관이 마음에 드시나 보네요! 패션에 관심있는 지민님을 위해 이번 여름에만 하는 특별 전시 "루브르 꾸뛰르"도 추천드립니다. 샤넬과 디올, 바르사체, 생 로랑, 발렌시아가, 지방시 등 45개 패션 하우스에서 기증한 의상과 액세서리들로 화려하게 만든 전시입니다.',
        },
        {
          id: 6,
          time: "11:25",
          sender: "guide",
          text: "루브르 박물관 관련해서 궁금한게 있다면 언제든 물어보세요!",
        },
        {
          id: 7,
          time: "11:30",
          sender: "traveler",
          text: "고마워요! 박물관 안에서 점심 먹을 만한 데가 있나요?",
        },
      ],
    },
  ],
}

// 가이드 인터페이스에서 자동으로 추천하는 메시지
export const aiRecommendation =
  "루브르 박물관 내에는 'Cafe Marly'가 있어요. 튈르리 정원이 보이는 테라스가 있어 전망이 좋습니다. 박물관 밖으로는 5분 거리에 'Bistrot Victoires'라는 현지인들이 좋아하는 비스트로가 있어요. 합리적인 가격에 정통 프랑스 요리를 맛볼 수 있습니다."
