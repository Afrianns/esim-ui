"use client"

import Header from "./_components/header";

export default function CheckoutLayout({children}: {children: React.ReactNode}) {

  return (
    <main className="flex flex-col min-h-dvh">
      <Header />
      <div className="wrapper-card-style flex flex-col">
        <section className="horizontal-filled-layout-style container-style w-full py-5 flex-1">
          {children}
        </section>
      </div>
    </main>
  )
}