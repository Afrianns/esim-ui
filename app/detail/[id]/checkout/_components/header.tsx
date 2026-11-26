import { spawn } from "child_process"
import { useSearchParams } from "next/navigation"

export default function Header() {

  const params = useSearchParams()

  const tab = params.get("tab")  

  return (
    <div className="flex items-center justify-between m-5">
      <div className="flex items-center gap-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path fill="none" stroke="currentColor" className="stroke-white stroke-2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14 6l-6 6l6 6" />
        </svg>
        <h1 className="text-2xl font-bold text-white">Detail Pemesanan</h1>
      </div>
      <div className="relative flex items-center justify-between gap-x-5 text-lg font-bold">
        <span className={`flex items-center justify-center w-8 h-8 text-center rounded-full ${(tab == "identity" || tab == "payment" || tab == "completed") ? "bg-white text-main": "bg-main-light text-white"}`}>
          {tab == "identity" ? <span>1</span> : <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 12l6 6L20 6" />
          </svg>
          }</span>
        <hr className="border-t-3 border-main-light absolute left-0 right-0 -z-5" />
        <span className={`flex items-center justify-center w-8 h-8 text-center rounded-full z-1 ${(tab == "payment" || tab == "completed") ? "bg-white text-main": "bg-main-light text-white "}`}>
          
          {tab != "completed" ? <span>2</span> : <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 12l6 6L20 6" />
          </svg>
          }</span>
      </div>
    </div>
  )
}