"use client"

import useCheckoutContext from "@/app/hooks/useCheckoutContext";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function NextStepButton() {

  const pathname = usePathname();

  const { setDatetime } = useCheckoutContext()

  const updateData = () => {
    setDatetime(new Date())
  }
  
  return (
    <Link href={`${pathname}/checkout?tab=identity`} onClick={updateData} className="inline-block text-center button-style py-3 w-full">Beli Sekarang</Link>
  )
}