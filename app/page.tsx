import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Plane, MapPin, MessageSquare, GraduationCap, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">TravelPal</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
            현지 가이드와 비대면으로 함께하는 특별한 여행 경험
          </p>
          <p className="text-sm text-gray-500">TravelPal의 예시 UI입니다.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 hover:border-blue-500 hover:shadow-lg transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="text-2xl flex items-center">
                <Plane className="mr-2 h-6 w-6 text-blue-500" />
                여행객 인터페이스
              </CardTitle>
              <CardDescription>여행객을 위한 직관적이고 편리한 인터페이스를 체험해보세요</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <Users className="h-5 w-5 mr-2 text-blue-500" />
                <div>
                  <h3 className="font-medium">가이드 정보 확인</h3>
                  <p className="text-sm text-gray-500">현지 가이드의 프로필과 리뷰를 확인할 수 있습니다</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                <div>
                  <h3 className="font-medium">여행 일정 보기</h3>
                  <p className="text-sm text-gray-500">맞춤형 여행 일정과 지도를 한눈에 확인</p>
                </div>
              </div>
              <div className="flex items-start">
                <MessageSquare className="h-5 w-5 mr-2 text-blue-500" />
                <div>
                  <h3 className="font-medium">실시간 채팅</h3>
                  <p className="text-sm text-gray-500">가이드와의 원활한 소통을 위한 채팅 기능</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/traveler" className="w-full">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  여행객 인터페이스 보기
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="border-2 hover:border-green-500 hover:shadow-lg transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="text-2xl flex items-center">
                <GraduationCap className="mr-2 h-6 w-6 text-green-500" />
                가이드 인터페이스
              </CardTitle>
              <CardDescription>가이드를 위한 전문적이고 효율적인 관리 인터페이스를 체험해보세요</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <Users className="h-5 w-5 mr-2 text-green-500" />
                <div>
                  <h3 className="font-medium">여행객 관리 대시보드</h3>
                  <p className="text-sm text-gray-500">여행객 정보와 일정을 체계적으로 관리</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-green-500" />
                <div>
                  <h3 className="font-medium">실시간 위치 모니터링</h3>
                  <p className="text-sm text-gray-500">여행객의 현재 위치를 확인하고 지원 제공</p>
                </div>
              </div>
              <div className="flex items-start">
                <MessageSquare className="h-5 w-5 mr-2 text-green-500" />
                <div>
                  <h3 className="font-medium">통합 커뮤니케이션</h3>
                  <p className="text-sm text-gray-500">효율적인 고객 응대를 위한 채팅 시스템</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/guide" className="w-full">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  가이드 인터페이스 보기
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="text-center mt-12 text-sm text-gray-500">
          <p>© 2025 TravelPal. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
