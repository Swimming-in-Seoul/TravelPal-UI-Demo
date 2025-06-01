import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, AlertTriangle, Star } from "lucide-react"

export default function GuideInfoUI() {
  return (
    <div className="container mx-auto p-4">
      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/placeholder.svg?height=64&width=64" alt="가이드 프로필" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>장동민 가이드</CardTitle>
            <CardDescription>파리 전문 가이드 | 경력 5년</CardDescription>
            <div className="flex items-center mt-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-2 text-sm text-gray-600">5.0 (32 리뷰)</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">소개</h3>
              <p className="text-gray-600">
                안녕하세요! 파리에서 5년 동안 현지 가이드로 활동하고 있는 장동민입니다. 파리의 역사, 문화, 예술에 대한
                깊은 지식을 바탕으로 여러분의 파리 여행을 특별하게 만들어 드리겠습니다. 한국어, 영어, 프랑스어로 안내가
                가능합니다.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">전문 분야</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">미술관 투어</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">역사 탐방</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">맛집 투어</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">쇼핑 가이드</span>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">연락처</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-gray-500" />
                  <span>+33 123 456 789</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-gray-500" />
                  <span>guide.paris@travelpal.com</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button className="w-full bg-blue-500 hover:bg-blue-600">채팅으로 연락하기</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
            응급 상황 연락처
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <h3 className="text-sm font-medium">현지 경찰</h3>
              <p className="text-gray-600">112 또는 +33 1 4007 1234</p>
            </div>
            <div>
              <h3 className="text-sm font-medium">응급 의료</h3>
              <p className="text-gray-600">119 또는 +33 1 5366 5678</p>
            </div>
            <div>
              <h3 className="text-sm font-medium">한국 대사관</h3>
              <p className="text-gray-600">+33 1 4753 0101</p>
            </div>
            <div>
              <h3 className="text-sm font-medium">TravelPal 24시간 긴급지원</h3>
              <p className="text-gray-600">+82 2 1234 5678</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
