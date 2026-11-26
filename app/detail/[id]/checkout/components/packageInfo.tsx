import useCheckoutContext from "@/app/hooks/useCheckoutContext"
import { formatDateToLocaleDate } from "@/app/lib/fromatDate"
import { singelProduct } from "@/app/lib/getSingleProduct"
import { redirect, useParams } from "next/navigation"

export default function PackageInfo() {

  const { id } = useParams<{ id: string }>()
  const product = singelProduct(id)

  const { datetime, quota } = useCheckoutContext()

  if(!Boolean(quota && datetime)) return redirect("/")

  return (
    <div className="space-y-5">
      <h3 className="text-xl font-bold">Ringkasan Paket</h3>
      <ul className="flex flex-col gap-y-3 mb-5 text-black/60">
        <li className="flex items-center justify-between"><p>Paket Terpilih</p> <p>{product?.name}</p> </li>
        <li className="flex items-center justify-between"><p>Data Tersedia</p> <p>{quota}GB</p></li>
        <li className="flex items-center justify-between"><p>Tanggal Pesanan</p> <p>{datetime ? formatDateToLocaleDate(datetime) : "Tidak Tersedia"}</p></li>
      </ul>
      <hr className="line-dashed-style" />
    </div>
  )
}