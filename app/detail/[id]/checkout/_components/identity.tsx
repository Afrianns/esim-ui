"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import PackageInfo from "../components/packageInfo";
import useCheckoutContext from "@/app/hooks/useCheckoutContext";

export default function Identity() {

  const pathname = usePathname();

  const { userEmail, userName, userPhoneNumber, setUserName, setUserEmail, setUserPhoneNumber } = useCheckoutContext()

  return (
    <>
      <div>
        {userEmail}
        {userPhoneNumber}
        {userName}
        
        <PackageInfo />
        <h3 className="text-xl font-bold">Data Pelanggan</h3>

        <form className="space-y-5">
          <div className="my-5">
            <label htmlFor="name">Nama</label> <br />
            <input type="text" name="name" id="name" placeholder="Masukan Nama Pelanggan" onChange={e => setUserName(e.target.value)} className="input-style" />
          </div>
          <div className="my-5">
            <label htmlFor="email">Alamat Email</label> <br />
            <input type="text" name="email" id="email" placeholder="Masukan Email Pelanggan" onChange={e => setUserEmail(e.target.value)} className="input-style"/>
          </div>
          <div className="my-5">
            <label htmlFor="phone-number">Nomor <em>Whatsapp</em></label> <br />
            <input type="text" name="phone-number" id="phone-number" placeholder="Masukan Nomor Whatsapp Pelanggan" onChange={e => setUserPhoneNumber(e.target.value)} className="input-style"/>
          </div>
        </form>
      </div>
      <Link href={`${pathname}?tab=payment`} className="inline-block text-center button-style py-3 w-full">Lanjutkan</Link>
    </>
  )
}