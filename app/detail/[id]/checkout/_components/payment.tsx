"use client"

import Link from "next/link";
import PackageInfo from "../components/packageInfo";
import { usePathname } from "next/navigation";
import useCheckoutContext from "@/app/hooks/useCheckoutContext";
import { paymentMethodType } from "@/app/types/checkoutType";
import { useState } from "react";
import { formatMoney } from "@/app/lib/formatMoney";

export default function Payment() {

  const { price, addDurationPrice, setPaymentMethod } = useCheckoutContext()

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<paymentMethodType>("Saldo")

  const pathname = usePathname();

  const pickedPaymentMethod = (paymentMethod: paymentMethodType) => {
    setPaymentMethod(paymentMethod)
    setSelectedPaymentMethod(paymentMethod)
  }
  return (
    <>
      <PackageInfo />
      <hr className="border-t w-full border-dashed border-black/30" />
      <div>
        <h3 className="text-xl font-bold">Pilih Metode Pembayaran</h3>
        <ul className="flex flex-col space-y-5 font-medium text-lg">
          <li className="radio-list-style border-2 border-black/20 py-5 px-5! font-bold">Saldo <input type="radio" value="Saldo" name="payment-method" className="w-6 h-6 accent-main" onChange={e => pickedPaymentMethod(e.target.value as paymentMethodType)} checked={selectedPaymentMethod == "Saldo"} /> </li>
          <li className="radio-list-style border-2 border-black/20 py-5 px-5! font-bold">VA BCA <input type="radio" value="VABCA" name="payment-method" className="w-6 h-6 accent-main" onChange={e => pickedPaymentMethod(e.target.value as paymentMethodType)} checked={selectedPaymentMethod == "VA BCA"} /></li>
          <li className="radio-list-style border-2 border-black/20 py-5 px-5! font-bold">VA Mandiri <input type="radio" value="VAMandiri" name="payment-method" className="w-6 h-6 accent-main" onChange={e => pickedPaymentMethod(e.target.value as paymentMethodType)} checked={selectedPaymentMethod == "VA Mandiri"} /></li>
          <li className="radio-list-style border-2 border-black/20 py-5 px-5! font-bold">VA BRI <input type="radio" value="VABRI" name="payment-method" className="w-6 h-6 accent-main" onChange={e => pickedPaymentMethod(e.target.value as paymentMethodType)} checked={selectedPaymentMethod == "VA BRI"} /></li>
        </ul>
      </div>

      <div>
        <ul className="flex flex-col gap-y-3 mb-5 text-black">
          <li className="flex items-center justify-between"><p className="text-black/60">Paket Terpilih</p> <p className="font-bold text-lg">{formatMoney(price+addDurationPrice)}</p> </li>
          <li className="flex items-center justify-between"><p className="text-black/60">Biaya Layanan</p> <p className="font-bold text-lg">Rp500</p></li>
        </ul>
        <div className="flex items-center justify-between">
          <p className="font-semibold text-xl">Total</p>
          <h3 className="font-bold text-main text-2xl">{formatMoney(price+addDurationPrice+500)}</h3>
        </div>
      </div>

      <Link href={`${pathname}?tab=completed`} className="inline-block text-center button-style py-3 w-full">Lanjutkan</Link>
    </>
  )
}