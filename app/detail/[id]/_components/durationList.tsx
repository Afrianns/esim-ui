"use client"

import useCheckoutContext from "@/app/hooks/useCheckoutContext"
import { DurationType } from "@/app/types/product"
import { useEffect, useState } from "react"

export default function DurationList({ durations }: { durations: DurationType[] }) {

  const { setAddDurationPrice, setDuration } = useCheckoutContext()

  const [selecteduration, setSelecteduration] = useState<number>(0)

  useEffect(() => {
    setSelecteduration(durations[0].duration)
    setAddDurationPrice(durations[0].price_add)
  }, [])

  const selectDuration = (selectedVariant: DurationType) => {
    setSelecteduration(selectedVariant.duration);
    setDuration(selectedVariant.duration)
    setAddDurationPrice(selectedVariant.price_add)
  }

  return (
    <ul className="flex gap-x-2">
      {durations.map((duration, idx) => 
        <li key={idx}><button className={`badge-style ${selecteduration == duration.duration ? "bg-main text-white" : "bg-main-light/20 text-main"}`} onClick={() => selectDuration(duration)}>{duration.duration}</button></li>
      )}
      
    </ul>
  )
}
