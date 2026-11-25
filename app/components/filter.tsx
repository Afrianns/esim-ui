"use client"

import { useState } from "react"

export default function Filter() {

  const [filterState, setFilterState] = useState<Record<string, boolean>>({
      "region": false,
      "product-type": false
  });

  const toggleFilter = (id: string) => {
    setFilterState(prev  => ({
      ...prev,
      [id]: !prev[id]
    }))
  } 


  const isStateTrue = Object.values(filterState).some(Boolean);

  const closeFilterMenu = () => {
    setFilterState(prev => Object.fromEntries(Object.keys(prev).map((key) => [key, false])) as typeof prev)
  }

  return (
      <div className="m-5 space-y-5 transition-all duration-700">
        <section className="flex items-center gap-x-3">
            <button className="menu-style-button" onClick={() => toggleFilter("region")}>
                <p>Semua Region</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 4l8 8l-8 8" />
                </svg>
            </button>
            <button className="menu-style-button" onClick={() => toggleFilter("product-type")}>
                <p>Semua Jenis</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 4l8 8l-8 8" />
                </svg>
            </button>
        </section>

        <div className={`transition-all duration-100 h-full fixed top-0 left-0 right-0 bottom-0 bg-main-dark/30 z-10 ${isStateTrue ? "block" : "hidden"}`} onClick={closeFilterMenu}>
        </div>
        <div className={`transition-all duration-200 w-full bg-white fixed z-11 left-0 right-0 bottom-0 rounded-t-4xl py-6 px-5 ${filterState["region"] ? "top-2/5" : "top-[61%]"} text-black space-y-8 ${isStateTrue ? "translate-y-0" : "translate-y-full"}`}>
          {filterState["region"] && <Region />}
          {filterState["product-type"] && <ProductType />}
          <button className="py-3 w-full button-style">Terapkan</button>
        </div>
      </div>
  )
}



const Region = () => {
  return (
    <>
      <div className="mt-3 flex items-center justify-between">
        <h3 className="font-bold text-2xl">Pilih Region.</h3>
        <p className="text-main text-md font-medium">Reset</p>
      </div>
      
      <ul className="flex flex-col space-y-10 font-medium text-lg">
        <li className="radio-list-style">Semua Region <input type="radio" name="all" id="region" defaultChecked className="w-6 h-6 accent-main" /> </li>
        <li className="radio-list-style">Amerika <input type="radio" name="amerika" id="region" className="w-6 h-6 accent-main" /></li>
        <li className="radio-list-style">Oseania <input type="radio" name="oseania" id="region" className="w-6 h-6 accent-main" /></li>
        <li className="radio-list-style">Eropa <input type="radio" name="eropa" id="region" className="w-6 h-6 accent-main" /></li>
        <li className="radio-list-style">Afrika <input type="radio" name="afrika" id="region" className="w-6 h-6 accent-main" /></li>
        <li className="radio-list-style">Asia <input type="radio" name="asia" id="region" className="w-6 h-6 accent-main" /></li>
      </ul>
    </>
  )
}


const ProductType = () => {
  return (
      <>
        <div className="mt-3 flex items-center justify-between">
          <h3 className="font-bold text-2xl">Pilih Jenis Produk.</h3>
          <p className="text-main text-md font-medium">Reset</p>
        </div>
        
        <ul className="flex flex-col space-y-10 font-medium text-lg">
          <li className="radio-list-style">Semua Region <input type="radio" name="all" defaultChecked id="product-type" className="w-6 h-6 accent-main" /> </li>
          <li className="radio-list-style">Instant <input type="radio" name="instant" id="product-type" className="w-6 h-6 accent-main" /></li>
          <li className="radio-list-style">Topupable <input type="radio" name="topupable" id="product-type" className="w-6 h-6 accent-main" /></li>
        </ul>
      </>
    )
}