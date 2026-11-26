"use client"

import useCheckoutContext from "@/app/hooks/useCheckoutContext"
import { formatMoney } from "@/app/lib/formatMoney"

export default function Price() {
  const { price, addDurationPrice } = useCheckoutContext()
  
  return <h3 className="text-lg font-bold text-main">{formatMoney(price+addDurationPrice)}</h3>
}