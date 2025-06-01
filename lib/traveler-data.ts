export type TravelerProfile = {
  id: number
  userId: string
  name: string
  age: number
  country: string
  languages: string[]
  travelDates: string
  accommodation: string
  emergencyContact: string
  status: "upcoming" | "ongoing"
}

export type TravelerPreferences = {
  likes: {
    food: string[]
    activities: string[]
    shopping: string[]
  }
  dislikes: {
    food: string[]
    activities: string[]
  }
  specialNotes: string[]
  allergies: string[]
}

export type TravelerData = {
  profile: TravelerProfile
  preferences: TravelerPreferences
}

// 김지민님 데이터
export const travelerData: TravelerData = {
  profile: {
    id: 1,
    userId: "jimin0321",
    name: "김지민",
    age: 24,
    country: "대한민국",
    languages: ["한국어", "영어 (중급)"],
    travelDates: "2025.06.13 - 2025.06.15",
    accommodation: "호텔 스플렌디드, 샹젤리제",
    emergencyContact: "+82-10-1234-5678",
    status: "ongoing",
  },
  preferences: {
    likes: {
      food: ["프랑스 정통 요리", "디저트", "와인", "치즈", "마카롱", "크루아상"],
      activities: ["미술관", "와인 시음", "패션", "현지 문화 체험", "카페 투어"],
      shopping: ["현지 수공예품", "패션 액세서리", "프랑스 화장품", "와인 & 치즈"],
    },
    dislikes: {
      food: ["해산물 (알레르기)", "매운 음식", "생선"],
      activities: ["과도한 걷기", "혼잡한 관광지", "익스트림 스포츠"],
    },
    specialNotes: [
      "해산물 알레르기 있음 (특히 조개류)",
      "사진 촬영에 관심이 많음",
      "와인 시음에 관심 표현",
      "현지 카페에서 여유로운 시간 선호",
      "미술, 특히 인상파 작품에 관심이 많음",
      "아침에 커피를 꼭 마셔야 함",
      "걷는 것보다 대중교통 선호",
    ],
    allergies: ["해산물", "조개류"],
  },
}

// 여행객 데이터 조회 함수
export function getTravelerData(travelerId: number): TravelerData | null {
  if (travelerId === 1) {
    return travelerData
  }
  return null
}

// 간결화된 취향 데이터 조회 함수 - 더 많은 선호 항목 표시
export function getTravelerPreferencesSummary(travelerId: number) {
  const data = getTravelerData(travelerId)
  if (!data) return null

  return {
    likes: [...data.preferences.likes.food.slice(0, 4), ...data.preferences.likes.activities.slice(0, 4)],
    dislikes: [...data.preferences.dislikes.food, ...data.preferences.dislikes.activities.slice(0, 2)],
  }
}
