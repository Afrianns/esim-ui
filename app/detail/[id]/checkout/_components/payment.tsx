"use client"

import Link from "next/link";
import PackageInfo from "../components/packageInfo";
import { usePathname } from "next/navigation";
import useCheckoutContext from "@/app/hooks/useCheckoutContext";
import { paymentMethodType } from "@/app/types/checkoutType";
import { useState } from "react";
import { formatMoney } from "@/app/lib/formatMoney";

export default function Payment() {

  const paymentMethods = ["Saldo", "VA BCA", "VA Mandiri", "VA BRI"]

  const { price, duration, paymentMethod, addDurationPrice, setPaymentMethod } = useCheckoutContext()

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<paymentMethodType>(paymentMethod || "Saldo")

  const pathname = usePathname();

  const pickedPaymentMethod = (paymentMethod: paymentMethodType) => {
    setPaymentMethod(paymentMethod)
    setSelectedPaymentMethod(paymentMethod)
  }
  return (
    <>
      <PackageInfo />
      <div className="space-y-5">
        <h3 className="text-xl font-bold">Pilih Metode Pembayaran</h3>
        <ul className="flex flex-col space-y-5 font-medium text-lg">
          {paymentMethods.map((paymentMethod, idx) => 
            <li key={idx}>
              <label className={`radio-list-style payment-method-card-style ${selectedPaymentMethod == paymentMethod && "bg-main-light/20"}`} htmlFor={`radio-${idx}`}>
                {paymentMethod}
                <input type="radio" value={paymentMethod} id={`radio-${idx}`} name="payment-method" className="w-6 h-6 accent-main" onChange={e => pickedPaymentMethod(e.target.value as paymentMethodType)} checked={selectedPaymentMethod == paymentMethod} />
              </label>
            </li>
          )}
        </ul>
        <hr className="line-dashed-style" />
      </div>

      <div>
        <ul className="flex flex-col gap-y-3 mb-5 text-black">
          <li className="flex items-center justify-between"><p className="text-black/60">Paket Terpilih</p> <p className="font-bold text-lg">{formatMoney(price+addDurationPrice)}</p> </li>
          <li className="flex items-center justify-between"><p className="text-black/60">Durasi Paket</p> <p className="font-bold text-lg">{duration} hari</p></li>
        </ul>

        <hr className="line-dashed-style" />
        
        <div className="flex items-center justify-between">
          <p className="font-semibold text-xl">Total</p>
          <h3 className="font-bold text-main text-2xl">{formatMoney(price+addDurationPrice)}</h3>
        </div>
      </div>

      <Link href={`${pathname}?tab=completed`} className="mt-10 block text-center button-style py-3 w-full">Lanjutkan</Link>
    </>
  )
}