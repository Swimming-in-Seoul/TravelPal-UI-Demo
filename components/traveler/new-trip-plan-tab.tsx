import { MapPin, Calendar, DollarSign } from "lucide-react"

interface Trip {
  id: number
  title: string
  destination: string
  dates: string
  budget: string
  status: string
  statusColor: string
}

interface TripPlanTabProps {
  trip: Trip
}

export default function TripPlanTab({ trip }: TripPlanTabProps) {
  return (
    <div className="p-4 space-y-4">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">기본 정보</h2>
        <div className="space-y-3">
          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-gray-500 mr-2" />
            <div>
              <p className="text-sm text-gray-500">목적지</p>
              <p className="font-medium">{trip.destination}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-gray-500 mr-2" />
            <div>
              <p className="text-sm text-gray-500">여행 기간</p>
              <p className="font-medium">{trip.dates}</p>
            </div>
          </div>
          <div className="flex items-center">
            <DollarSign className="h-5 w-5 text-gray-500 mr-2" />
            <div>
              <p className="text-sm text-gray-500">예산</p>
              <p className="font-medium">{trip.budget}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">특별 요청사항</h2>
        <p className="text-gray-600">
          {trip.id === 1
            ? "해변가 근처 숙소를 선호합니다. 현지 해산물 레스토랑 추천 부탁드립니다."
            : "역사적인 장소 위주로 방문하고 싶습니다. 현지 와인 시음 기회가 있으면 좋겠습니다."}
        </p>
      </div>
    </div>
  )
}
