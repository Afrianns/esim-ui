"use client"

import useCheckoutContext from "@/app/hooks/useCheckoutContext"
import { VariantType } from "@/app/types/productType"
import { useEffect, useState } from "react"

export default function QuotaList({ quotas }: { quotas: VariantType[] }) {

  const { setQuota, setPrice } = useCheckoutContext()

  const [selectedQuota, setSelectedQuota] = useState<number>(0)

  useEffect(() => {
    setSelectedQuota(quotas[0].quota)
    setQuota(quotas[0].quota)
    setPrice(quotas[0].price)
  }, [])

  const selectQuota = (selectedVariant: VariantType) => {
    setSelectedQuota(selectedVariant.quota);
    setQuota(selectedVariant.quota);
    setPrice(selectedVariant.price);
  }

  return (
    <ul className="flex gap-x-2">
      {quotas.map((quota, idx) => 
        <li key={idx}><button className={`badge-style ${selectedQuota == quota.quota ? "bg-main text-white" : "bg-main-light/20 text-main"}`} onClick={() => selectQuota(quota)}>{quota.quota}GB</button></li>
      )}
    </ul>
  )
}