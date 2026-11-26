"use client"

import useCheckoutContext from "@/app/hooks/useCheckoutContext";
import Header from "./_components/header";

export default function CheckoutLayout({children}: {children: React.ReactNode}) {

  return (
    <main className="flex flex-col h-dvh">
      <Header />

      <section className="bg-white rounded-t-2xl w-full p-5 flex flex-col justify-between flex-1">
        {children}
      </section>
    </main>
  )
}