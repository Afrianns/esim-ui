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
        <PackageInfo />
        <h3 className="text-xl font-bold">Data Pelanggan</h3>

        <section className="space-y-5">
          <div className="my-5">
            <label htmlFor="name">Nama</label> <br />
            <input type="text" name="name" id="name" placeholder="Masukan Nama" value={userName} onChange={e => setUserName(e.target.value)} className="input-style" required/>
          </div>
          <div className="my-5">
            <label htmlFor="email">Alamat Email</label> <br />
            <input type="email" name="email" id="email" placeholder="Masukan Email" value={userEmail} onChange={e => setUserEmail(e.target.value)} className="input-style" required/>
          </div>
          <div className="my-5">
            <label htmlFor="phone-number">Nomor <em>Whatsapp</em></label> <br />
            <input type="text" name="phone-number" id="phone-number" placeholder="Masukan Nomor Whatsapp" value={userPhoneNumber} onChange={e => setUserPhoneNumber(e.target.value)} className="input-style" required/>
          </div>
        </section>
      </div>
      
      <div className="pt-10">
        
        {(userEmail && userName && userPhoneNumber) ?
          <Link href={`${pathname}?tab=payment`} className="inline-block text-center button-style py-3 w-full">Lanjutkan</Link>
          :
          <button className="inline-block text-center button-style py-3 w-full opacity-55 cursor-not-allowed!">Lanjutkan</button>
        }
      </div>
    </>
  )
}