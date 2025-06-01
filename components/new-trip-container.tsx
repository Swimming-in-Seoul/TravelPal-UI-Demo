"use client"

import { useState } from "react"
import NewTripUI from "./new-trip-ui"
import TripDetailUI from "./trip-detail-ui"
import CreateTripForm from "./create-trip-form"

export default function NewTripContainer() {
  const [selectedTrip, setSelectedTrip] = useState<number | null>(null)

  const handleTripSelect = (tripId: number) => {
    setSelectedTrip(tripId)
  }

  const handleBack = () => {
    setSelectedTrip(null)
  }

  if (selectedTrip === 0) {
    return <CreateTripForm onBack={handleBack} />
  }

  if (selectedTrip !== null) {
    return <TripDetailUI tripId={selectedTrip} onBack={handleBack} />
  }

  return <NewTripUI onTripSelect={handleTripSelect} />
}
