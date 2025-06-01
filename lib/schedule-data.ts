export type ScheduleItem = {
  time: string
  activity: string
  type: string
  location?: string
  status: string
  notes?: string
  pin?: number
  color?: string
  badge?: string
  duration?: string
}

export type DaySchedule = {
  day: number
  date: string
  displayDate: string
  isToday?: boolean
  items: ScheduleItem[]
}

export type ScheduleData = {
  traveler: {
    id: number
    name: string
    travelDates: string
  }
  schedule: DaySchedule[]
}

// 아이콘 타입 정의
export type IconType = "utensils" | "landmark" | "calendar" | "checkCircle" | "play"

// 활동 유형과 위치에 따른 아이콘 매핑 함수
export function getActivityIcon(item: ScheduleItem): IconType {
  // 상태에 따른 아이콘 우선 처리
  if (item.status === "completed") return "checkCircle"
  if (item.status === "ongoing") return "play"

  // 활동 유형에 따른 아이콘
  if (item.type === "food") return "utensils"
  if (item.type === "attraction" || item.type === "activity") return "landmark"

  // 위치 정보에 따른 아이콘 (추가적인 매핑)
  if (item.location) {
    if (
      item.location.includes("식사") ||
      item.location.includes("아침") ||
      item.location.includes("점심") ||
      item.location.includes("저녁")
    ) {
      return "utensils"
    }
    if (
      item.location.includes("미술관") ||
      item.location.includes("박물관") ||
      item.location.includes("관광") ||
      item.location.includes("전망") ||
      item.location.includes("산책") ||
      item.location.includes("휴식") ||
      item.location.includes("투어")
    ) {
      return "landmark"
    }
  }

  return "calendar"
}

// 여행 일정 데이터 수정
export const scheduleData: ScheduleData = {
  traveler: {
    id: 1,
    name: "김지민",
    travelDates: "2025.06.13 - 2025.06.15",
  },
  schedule: [
    {
      day: 1,
      date: "2025-06-13",
      displayDate: "6.13/화",
      items: [
        {
          time: "07:00 - 08:00",
          activity: "기상 및 준비",
          type: "preparation",
          status: "completed",
        },
        {
          time: "08:15 - 08:30",
          activity: "메트로 1호선 이용",
          type: "transport",
          duration: "샹젤리제-클레망소역 → 샤틀레역 · 약 12분",
          status: "completed",
        },
        {
          time: "08:30 - 09:15",
          activity: "파리 크레페 카페",
          type: "food",
          location: "아침 식사",
          status: "completed",
          notes: "크루아상과 카페 라떼",
          pin: 1,
          color: "bg-purple-500",
        },
        {
          time: "09:15 - 09:30",
          activity: "도보 이동",
          type: "transport",
          duration: "약 15분",
          status: "completed",
        },
        {
          time: "09:30 - 11:30",
          activity: "루브르 박물관",
          type: "attraction",
          location: "미술관/박물관",
          status: "completed",
          notes: "사전 예약 티켓, 오디오 가이드 대여",
          pin: 2,
          color: "bg-red-500",
          badge: "예약완료",
        },
        {
          time: "11:30 - 11:50",
          activity: "도보 이동",
          type: "transport",
          duration: "약 20분",
          status: "completed",
        },
        {
          time: "11:50 - 12:30",
          activity: "생 루이 섬 산책",
          type: "activity",
          location: "산책/휴식",
          status: "completed",
          pin: 3,
          color: "bg-orange-500",
        },
        {
          time: "12:30 - 12:45",
          activity: "메트로 4호선 이용",
          type: "transport",
          duration: "생미셸역 → 오데옹역 · 약 10분",
          status: "completed",
        },
        {
          time: "12:45 - 14:00",
          activity: "르 ���트와 생 제르맹",
          type: "food",
          location: "점심 식사",
          status: "completed",
          pin: 4,
          color: "bg-teal-500",
        },
        {
          time: "21:30 - 22:30",
          activity: "메트로 1호선 이용",
          type: "transport",
          duration: "샤틀레역 → 샹젤리제-클레망소역 · 약 12분",
          status: "completed",
        },
        {
          time: "23:00",
          activity: "취침 준비 및 취침",
          type: "preparation",
          status: "completed",
        },
      ],
    },
    {
      day: 2,
      date: "2025-06-14",
      displayDate: "6.14/수",
      isToday: true,
      items: [
        {
          time: "07:00 - 08:00",
          activity: "기상 및 준비",
          type: "preparation",
          status: "completed",
        },
        {
          time: "08:15 - 08:30",
          activity: "메트로 1호선 이용",
          type: "transport",
          duration: "샹젤리제-클레망소역 → 샤틀레역 · 약 12분",
          status: "completed",
        },
        {
          time: "08:30 - 09:15",
          activity: "파리 크레페 카페",
          type: "food",
          location: "아침 식사",
          status: "completed",
          pin: 1,
          color: "bg-purple-500",
        },
        {
          time: "09:15 - 09:30",
          activity: "도보 이동",
          type: "transport",
          duration: "약 15분",
          status: "completed",
        },
        {
          time: "09:30 - 11:30",
          activity: "루브르 박물관",
          type: "attraction",
          location: "미술관/박물관",
          status: "ongoing",
          notes: "사전 예약 티켓, 오디오 가이드 대여",
          pin: 2,
          color: "bg-red-500",
          badge: "방문중",
        },
        {
          time: "11:30 - 11:50",
          activity: "도보 이동",
          type: "transport",
          duration: "약 20분",
          status: "pending",
        },
        {
          time: "11:50 - 12:30",
          activity: "생 루이 섬 산책",
          type: "activity",
          location: "산책/휴식",
          status: "pending",
          pin: 3,
          color: "bg-orange-500",
        },
        {
          time: "12:30 - 12:45",
          activity: "메트로 4호선 이용",
          type: "transport",
          duration: "생미셸역 → 오데옹역 · 약 10분",
          status: "pending",
        },
        {
          time: "12:45 - 13:45",
          activity: "르 콩트와 생 제르맹",
          type: "food",
          location: "점심 식사",
          status: "pending",
          pin: 4,
          color: "bg-teal-500",
        },
        {
          time: "13:45 - 14:10",
          activity: "버스 80번 이용",
          type: "transport",
          duration: "오데옹역 → 앙베르역 · 약 25분",
          status: "pending",
        },
        {
          time: "14:10 - 15:30",
          activity: "몽마르뜨 언덕 & 사크레쾨르 대성당",
          type: "attraction",
          location: "관광/전망",
          status: "pending",
          pin: 5,
          color: "bg-pink-500",
          badge: "무료입장",
        },
        {
          time: "15:30 - 16:00",
          activity: "메트로 2호선",
          type: "transport",
          duration: "앙베르역 → 샤를드골 에투알역 · 약 20분",
          status: "pending",
        },
        {
          time: "19:30 - 21:30",
          activity: "세느강 야경 유람선",
          type: "attraction",
          location: "저녁 투어",
          status: "pending",
          pin: 6,
          color: "bg-indigo-500",
          badge: "예약완료",
        },
        {
          time: "21:30 - 22:30",
          activity: "메트로 1호선 이용",
          type: "transport",
          duration: "샤틀레역 → 샹젤리제-클레망소역 · 약 12분",
          status: "pending",
        },
        {
          time: "23:00",
          activity: "취침 준비 및 취침",
          type: "preparation",
          status: "pending",
        },
      ],
    },
    {
      day: 3,
      date: "2025-06-15",
      displayDate: "6.15/목",
      items: [
        {
          time: "10:00 - 12:30",
          activity: "에펠탑 방문",
          type: "attraction",
          location: "관광/전망",
          status: "pending",
          notes: "2층까지 티켓 예약 완료",
        },
        {
          time: "12:30 - 15:00",
          activity: "센 강변 피크닉",
          type: "activity",
          location: "샹 드 마르스 공원",
          status: "pending",
          notes: "도시락 준비",
        },
        {
          time: "15:00 - 16:30",
          activity: "센 강 유람선",
          type: "attraction",
          location: "바토무슈",
          status: "pending",
          notes: "1시간 코스",
        },
        {
          time: "16:30 - 18:00",
          activity: "자유 시간",
          type: "activity",
          status: "pending",
        },
        {
          time: "18:00 - 20:00",
          activity: "공항으로 이동",
          type: "transport",
          status: "pending",
          notes: "샤를 드골 공항 출발",
        },
      ],
    },
  ],
}
