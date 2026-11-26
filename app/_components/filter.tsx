"use client"

import { useState } from "react";
import FilterMenu from "./filterMenu";
import { usePathname, useSearchParams, useRouter } from "next/navigation";


interface FilterSelectType {
  selectedRegion: string 
  setSelectedRegion: (x: string) => void 
  selectedProductType: string 
  setSelectedProductType: (x: string) => void}

export default function Filter() {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  

  const [selectedRegion, setSelectedRegion] = useState<string>(searchParams.get('region') || "all")
  const [selectedProductType, setSelectedProductType] = useState<string>(searchParams.get('type') || "all")



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

  const closeFilterMenu = () => setFilterState(prev => Object.fromEntries(Object.keys(prev).map((key) => [key, false])) as typeof prev)


  const regions = ["Amerika", "Oseania", "Eropa", "Afrika", "Asia"]

  const showPickedRegion = (type: string) => setSelectedRegion(type)
  
  const pickedProductType = (type: string) => setSelectedProductType(type)

  const updateFilterProductType = () => {
    // selectedProductType
    const params = new URLSearchParams(searchParams.toString());
    params.set('type', selectedProductType);

    router.replace(`${pathname}?${params.toString()}`);
  }
  
  const updateFilterRegion = () => {
    // selectedRegion
    const params = new URLSearchParams(searchParams.toString());
    params.set('region', selectedRegion);

    router.replace(`${pathname}?${params.toString()}`);
  }

  const resetRegion = () => {
    setSelectedRegion("all")
    router.replace(pathname)
  }

  const resetProductType = () => {
    setSelectedProductType("all")
    router.replace(pathname)
  }

  return (
    <>
      <FilterMenu toggleFilter={toggleFilter} />
      <div className="space-y-3">
        <div className={`transition-all duration-100 h-full fixed top-0 left-0 right-0 bottom-0 bg-main-dark/30 z-10 ${isStateTrue ? "block" : "hidden"}`} onClick={closeFilterMenu}>
        </div>
        <div className={`transition-all duration-200 w-full bg-white fixed z-11 left-0 right-0 bottom-0 rounded-t-4xl py-6 px-5 ${filterState["region"] ? "top-2/5" : "top-[61%]"} text-black space-y-8 ${isStateTrue ? "translate-y-0" : "translate-y-full"}`}>
          {filterState["region"] && 
            <>
              <div className="mt-3 flex items-center justify-between">
                <h3 className="font-bold text-2xl">Pilih Region</h3>          
                <button className="text-main text-md font-medium cursor-pointer" onClick={() => resetRegion()}>Reset</button>
              </div>
              
              <ul className="flex flex-col space-y-10 font-medium text-lg">
                <li className="radio-list-style">Semua Region <input type="radio" value="all" onChange={e => showPickedRegion(e.target.value)} checked={selectedRegion == "all"} name="region" className="w-6 h-6 accent-main" /> </li>
                {regions.map(region => {
                  return (
                    <li key={region} className="radio-list-style">{region} <input type="radio" value={region} onChange={e => showPickedRegion(e.target.value)} checked={selectedRegion == region} name="region" className="w-6 h-6 accent-main" /></li>
                  )
                })}
              </ul>
              <button className="py-3 w-full button-style" onClick={updateFilterRegion}>Terapkan</button>
            </>
          }
          {filterState["product-type"] && 
            <>
              <div className="mt-3 flex items-center justify-between">
                <h3 className="font-bold text-2xl">Pilih Jenis Produk</h3>
                <button className="text-main text-md font-medium cursor-pointer" onClick={() => resetProductType()}>Reset</button>
              </div>
              
              <ul className="flex flex-col space-y-10 font-medium text-lg">
                <li className="radio-list-style">Semua Region <input type="radio" value="all" name="product-type" onChange={e => pickedProductType(e.target.value)} checked={selectedProductType == "all"} className="w-6 h-6 accent-main" /> </li>
                <li className="radio-list-style">Instant <input type="radio" value="instant" name="product-type" onChange={e => pickedProductType(e.target.value)} checked={selectedProductType == "instant"} className="w-6 h-6 accent-main" /></li>
                <li className="radio-list-style">Topupable <input type="radio" value="topupable" name="product-type" onChange={e => pickedProductType(e.target.value)} checked={selectedProductType == "topupable"} className="w-6 h-6 accent-main" /></li>
              </ul>
              <button className="py-3 w-full button-style" onClick={updateFilterProductType}>Terapkan</button>
            </>
          }
        </div>
      </div>
    </>
  )
}
