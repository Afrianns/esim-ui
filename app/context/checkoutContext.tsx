"use client"

import { createContext, useState } from "react";

interface CheckoutContextType {
  quota: number
  setQuota: (x: number) => void
  duration: number
  setDuration: (x: number) => void

  addDurationPrice: number
  setAddDurationPrice: (x: number) => void

  datetime: Date
  setDatetime: (x: Date) => void
  price: number
  setPrice: (x: number) => void
  userName: string
  setUserName: (x: string) => void
  userEmail: string
  setUserEmail: (x: string) => void
  userPhoneNumber: string
  setUserPhoneNumber: (x: string) => void
}

const CheckoutContext = createContext<CheckoutContextType | null>(null)

function CheckoutContextProvider({ children }: {children: React.ReactNode}) {

  const [quota, setQuota] = useState<number>(0)
  const [duration, setDuration] = useState<number>(0)
  const [price, setPrice] = useState<number>(0)
  
  const [addDurationPrice, setAddDurationPrice] = useState<number>(0)
  
  const [userName, setUserName] = useState<string>("")
  const [userEmail, setUserEmail] = useState<string>("")
  const [userPhoneNumber, setUserPhoneNumber] = useState<string>("")
  const [datetime, setDatetime] = useState<Date>(new Date())

  return (
    <CheckoutContext.Provider value={{ quota, setQuota, duration, setDuration, price, setPrice, userName, setUserName, userEmail, setUserEmail, userPhoneNumber, setUserPhoneNumber, datetime, setDatetime, addDurationPrice, setAddDurationPrice }}>
      {children}
    </CheckoutContext.Provider>
  );
}

export { CheckoutContextProvider, CheckoutContext }