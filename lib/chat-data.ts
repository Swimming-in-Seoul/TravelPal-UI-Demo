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
          time: "14:15",
          sender: "guide",
          text: "생샤펠 주변에 거의 도착하셨네요! 생샤펠은 '성스러운 예배당'이라는 뜻으로, 루이 9세(성 루이)가 1248년에 완성한 고딕 양식의 걸작입니다.",
        },
        {
          id: 2,
          time: "14:16",
          sender: "guide",
          text: "이곳의 하이라이트는 바로 15개의 거대한 스테인드글라스 창문이에요! 높이가 15미터에 달하며, 구약성서부터 그리스도의 수난까지 1,113개의 장면이 담겨 있습니다. 마치 중세의 만화책 같아요!",
        },
        {
          id: 3,
          time: "14:17",
          sender: "guide",
          text: "재미있는 사실: 루이 9세는 이 예배당을 짓기 위해 당시 프랑스 국가 예산의 3분의 1을 썼어요! 예수의 가시관을 보관하기 위해서였는데, 가시관 구입비가 예배당 건축비보다 더 비쌌다고 해요 😅",
        },
        {
          id: 4,
          time: "14:18",
          sender: "traveler",
          text: "와! 정말 비쌌네요. 그 가시관은 지금도 있나요?",
        },
        {
          id: 5,
          time: "14:19",
          sender: "guide",
          text: "아쉽게도 프랑스 혁명 때 대부분 사라졌어요. 지금은 노트르담 대성당에 일부가 보관되어 있습니다. 하지만 생샤펠의 진짜 보물은 바로 그 스테인드글라스예요!",
        },
        {
          id: 6,
          time: "14:20",
          sender: "guide",
          text: "꿀팁: 오후 2-4시 사이에 방문하시면 햇빛이 스테인드글라스를 통과하면서 예배당 내부가 무지개빛으로 물들어요. 마치 보석상자 안에 들어온 기분이 들 거예요!",
        },
        {
          id: 7,
          time: "14:21",
          sender: "guide",
          text: "생샤펠은 2층 구조로 되어 있어요. 1층은 하인들을 위한 '하부 예배당', 2층은 왕족을 위한 '상부 예배당'입니다. 진짜 볼거리는 2층이에요! 계단을 올라가시면 숨이 멎을 정도로 아름다운 광경이 펼쳐집니다.",
        },
        {
          id: 8,
          time: "14:22",
          sender: "traveler",
          text: "사진 촬영은 가능한가요?",
        },
        {
          id: 9,
          time: "14:23",
          sender: "guide",
          text: "네, 플래시만 사용하지 않으면 자유롭게 촬영 가능해요! 인스타그램 명소로도 유명하죠. 특히 스테인드글라스를 배경으로 한 실루엣 사진이 인기예요.",
        },
        {
          id: 10,
          time: "14:24",
          sender: "guide",
          text: "재미있는 일화 하나 더: 나폴레옹이 이곳을 창고로 사용했던 적이 있어요! 😱 다행히 19세기에 대대적인 복원 작업을 거쳐 지금의 모습을 되찾았습니다. 복원에만 25년이 걸렸다고 해요.",
        },
        {
          id: 11,
          time: "14:25",
          sender: "guide",
          text: "입장료는 11.5유로이고, 콩시에르주리와 공동 티켓(18.5유로)도 있어요. 대기 시간을 줄이려면 온라인 예약을 추천드려요. 보통 30분 정도면 충분히 관람할 수 있습니다.",
        },
        {
          id: 12,
          time: "14:26",
          sender: "traveler",
          text: "콩시에르주리는 뭔가요?",
        },
        {
          id: 13,
          time: "14:27",
          sender: "guide",
          text: "콩시에르주리는 바로 옆 건물로, 프랑스 혁명 때 마리 앙투아네트가 처형 전까지 갇혀 있던 감옥이에요! 중세 왕궁의 일부였다가 감옥으로 사용됐죠. 역사 좋아하시면 함께 보시는 걸 추천해요.",
        },
        {
          id: 14,
          time: "14:28",
          sender: "guide",
          text: "마지막 팁: 생샤펠 관람 후에는 바로 근처 시테 섬의 꽃시장(마르셰 오 플뢰르)도 들러보세요! 일요일에는 새 시장으로 바뀌어서 더욱 흥미로워요. 파리지앵들의 일상을 엿볼 수 있는 숨은 명소랍니다! 🌸",
        },
      ],
    },
  ],
}

// 가이드 인터페이스에서 자동으로 추천하는 메시지
export const aiRecommendation =
  "생샤펠 관람 후 시간이 되시면 근처 브르타뉴 아이스크림 가게 '베르티용'도 추천드려요! 파리 최고의 아이스크림으로 유명해서 현지인들도 줄 서서 먹는 곳이에요."
