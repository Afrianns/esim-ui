"use client"

import useCheckoutContext from "@/app/hooks/useCheckoutContext"
import { formatMoney } from "@/app/lib/formatMoney"
import { formatDateToLocaleDate, formatDateToTime } from "@/app/lib/fromatDate"
import { maskData } from "@/app/lib/maskData"
import Link from "next/link"

export default function CompletedPayment() {

  const { price, addDurationPrice, duration, datetime, quota, paymentMethod, userEmail, userName, userPhoneNumber } = useCheckoutContext()

  return (
    <>
      <div className="relative bg-main-light/5 px-2 border-y border-dashed border-black/30 mt-18">
        <div>
          <div className="text-center flex justify-center absolute -top-16 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="8em" height="8em" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="currentColor" className="fill-green-500" d="M20.217 8.53c2.376 1.655 2.376 5.285 0 6.94c.617 2.786-1.961 5.364-4.747 4.747c-1.655 2.376-5.285 2.376-6.94 0c-2.786.617-5.364-1.961-4.747-4.747c-2.376-1.655-2.376-5.285 0-6.94c-.617-2.786 1.961-5.364 4.747-4.747c1.655-2.376 5.285-2.376 6.94 0c2.786-.617 5.364 1.961 4.747 4.747M11 12.586l-1.293-1.293a.999.999 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a.999.999 0 1 0-1.414-1.414Z" />
            </svg>
          </div>
          <div className="text-center space-y-3 pt-20">
            <h1 className="text-4xl font-bold text-main">{formatMoney(price+addDurationPrice+2500)}</h1>
            <span>No. INV-0593430005</span>
          </div>
          <ul className="flex flex-col gap-y-3 mb-5 w-full my-5">
            <li className="flex items-center justify-between"><p className="text-black/60">Status</p> <p className="text-lg font-bold text-green-500 bg-green-100 py-1 px-3 rounded-md">Berhasil</p> </li>
            <li className="flex items-center justify-between"><p className="text-black/60">No. Ref</p> <p className="text-lg font-bold text-black">30430548055</p></li>
            <li className="flex items-center justify-between"><p className="text-black/60">Tgl Transaksi</p> <p className="text-lg font-bold text-black">{datetime && formatDateToLocaleDate(datetime)}</p></li>
            <li className="flex items-center justify-between"><p className="text-black/60">Waktu Transaksi</p> <p className="text-lg font-bold text-black">{datetime && formatDateToTime(datetime)}WIB</p></li>
            <li className="flex items-center justify-between"><p className="text-black/60">Metode Pembayaraan</p> <p className="text-lg font-bold text-black">{paymentMethod}</p></li>
          </ul>
        </div>
        <hr className="my-5 border-t w-full border-dashed border-black/30" />
        <div>
          <h3 className="text-xl font-bold">Data Pelanggan</h3>
          <ul className="flex flex-col gap-y-3 mb-5 w-full my-5">
            <li className="flex items-center justify-between"><p className="text-black/60">Produk</p> <p className="text-lg font-bold text-black">eSIM Singapore</p> </li>
            <li className="flex items-center justify-between"><p className="text-black/60">Data Tersedia</p> <p className="text-lg font-bold text-black">{quota}GB</p></li>
            <li className="flex items-center justify-between"><p className="text-black/60">Masa Berlaku</p> <p className="text-lg font-bold text-black">{duration} hari</p></li>
            <li className="flex items-center justify-between"><p className="text-black/60">Nama Pelanggan</p> <p className="text-lg font-bold text-black">{userName}</p></li>
            <li className="flex items-center justify-between"><p className="text-black/60">No Whatsapp</p> <p className="text-lg font-bold text-black">{maskData(userPhoneNumber, 4)}</p></li>
            <li className="flex items-center justify-between"><p className="text-black/60">Email</p> <p className="text-lg font-bold text-black">{maskData(userEmail, 8)}</p></li>
          </ul>
        </div>
        <hr className="my-5 border-t w-full border-dashed border-black/30" />
        <div className="space-y-5">
          <h3 className="text-xl font-bold">Detail Pembayaraan</h3>
          <ul className="flex flex-col gap-y-3 mb-5 text-black">
            <li className="flex items-center justify-between"><p className="text-black/90">Harga</p> <p className="font-bold text-lg">{formatMoney(price+addDurationPrice)}</p> </li>
            <li className="flex items-center justify-between"><p className="text-black/90">Biaya Transaksi</p> <p className="font-bold text-lg">{formatMoney(2500)}</p></li>
          </ul>
        </div>
      </div>
      <div className="my-5">
        <Link href="/" className="inline-block text-center button-style py-3 w-full">Selesaikan</Link>
      </div>
    </>
  )
}