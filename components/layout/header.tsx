import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface HeaderProps {
  title?: string
  mode: "traveler" | "guide"
  showBackButton?: boolean
  showProfile?: boolean
}

export function Header({ title = "TravelPal", mode, showBackButton = true, showProfile = true }: HeaderProps) {
  const modeColor = mode === "traveler" ? "blue" : "green"
  const modeText = mode === "traveler" ? "여행객 모드" : "가이드 모드"

  return (
    <div className="flex items-center justify-between p-4 border-b bg-white">
      <div className="flex items-center">
        {showBackButton && (
          <Link href="/" className="mr-3">
            <ArrowLeft className="h-5 w-5 text-gray-500" />
          </Link>
        )}
        <h1 className="text-xl font-bold">{title}</h1>
        <span className={`ml-2 text-sm text-${modeColor}-500 bg-${modeColor}-50 px-2 py-0.5 rounded-full`}>
          {modeText}
        </span>
      </div>
      {showProfile && <button className={`text-${modeColor}-500 font-medium`}>프로필</button>}
    </div>
  )
}
