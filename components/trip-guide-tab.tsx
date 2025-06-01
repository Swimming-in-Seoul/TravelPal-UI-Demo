import GuideSelectionUI from "./guide-selection-ui"

interface TripGuideTabProps {
  trip?: {
    id: number
    title: string
    destination: string
    dates: string
    budget: string
    status: string
    statusColor: string
  }
}

export default function TripGuideTab({ trip }: TripGuideTabProps) {
  return <GuideSelectionUI trip={trip} />
}
