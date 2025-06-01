import { User, MessageSquare } from "lucide-react"

export default function TripBookingTab() {
  return (
    <div className="p-4">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">예약 정보</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">가이드 정보</h3>
            <div className="flex items-center mt-2">
              <User className="h-5 w-5 text-gray-500 mr-2" />
              <p>김민수 가이드 (현지 전문 가이드)</p>
            </div>
            <div className="flex items-center mt-1">
              <MessageSquare className="h-5 w-5 text-gray-500 mr-2" />
              <p>연락처: +39 123 456 789</p>
            </div>
          </div>

          <div>
            <h3 className="font-medium">결제 정보</h3>
            <p className="mt-1">총 금액: ₩30,000 (3일)</p>
            <p className="text-sm text-gray-500">결제일: 2025.06.01</p>
            <p className="text-sm text-gray-500">결제 방법: 신용카드 (KB국민 ****1234)</p>
          </div>

          <div>
            <h3 className="font-medium">취소 정책</h3>
            <p className="text-sm text-gray-600 mt-1">
              여행 시작 7일 전까지: 전액 환불
              <br />
              여행 시작 3-6일 전: 50% 환불
              <br />
              여행 시작 2일 전 이후: 환불 불가
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
