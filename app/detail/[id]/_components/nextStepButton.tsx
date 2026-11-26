"use client"

import useCheckoutContext from "@/app/hooks/useCheckoutContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NextStepButton() {

  const pathname = usePathname();

  const { setDatetime } = useCheckoutContext()

  return <Link href={`${pathname}/checkout?tab=identity`} onClick={() => setDatetime(new Date())} className="button-style inline-block text-center py-3 my-5 w-full">Beli Sekarang</Link>
}