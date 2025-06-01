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
      date: "2025-06-21",
      displayDate: "2025년 6월 21일",
      messages: [
        {
          id: 1,
          time: "11:25",
          sender: "guide",
          text: "몽마르뜨 언덕에 거의 도착하셨네요! 이 지역은 아름다운 경관으로 유명하지만, 관광객이 많아 소매치기가 자주 발생하는 곳이기도 합니다. 주의하세요.",
        },
        {
          id: 2,
          time: "11:26",
          sender: "guide",
          text: "특히 사크레쾨르 대성당 앞 계단과 테르트르 광장에서는 '팔찌 트릭'을 조심하세요. 누군가 다가와 손목에 실 팔찌를 묶어주려 하면 단호히 거절하세요. 이것은 돈을 요구하는 사기 수법입니다.",
        },
        {
          id: 3,
          time: "11:27",
          sender: "guide",
          text: "또한 '서명 요청' 사기도 흔합니다. 청각장애인이나 자선단체를 사칭하며 서명을 요청한 후 기부금을 요구합니다. 이런 경우 정중하게 \"Non, merci(노, 메르씨)\"라고 말하고 지나가세요.",
        },
        {
          id: 4,
          time: "11:28",
          sender: "traveler",
          text: "알려줘서 고마워! 가방은 어떻게 들고 다니는 게 좋을까?",
        },
        {
          id: 5,
          time: "11:29",
          sender: "guide",
          text: "가방은 항상 몸 앞쪽에 두고, 지퍼를 닫아 두세요. 크로스백이 가장 안전합니다. 중요한 소지품(여권, 현금)은 옷 안쪽 주머니나 허리에 착용하는 안전 파우치에 보관하는 것이 좋습니다.",
        },
        {
          id: 6,
          time: "11:30",
          sender: "guide",
          text: "지금 계신 위치에서 사크레쾨르 대성당까지는 오른쪽 좁은 골목길로 5분 정도 걸립니다. 이 골목길은 관광객이 적어 비교적 안전하고, 현지 예술가들의 작업실도 볼 수 있어요.",
        },
      ],
    },
  ],
}

// 가이드 인터페이스에서 자동으로 추천하는 메시지
export const aiRecommendation =
  "사크레쾨르 대성당 내부는 무료 입장이지만, 돔 전망대는 유료입니다. 파리 전경을 보시려면 돔 입장권(8유로)을 추천드려요!"
