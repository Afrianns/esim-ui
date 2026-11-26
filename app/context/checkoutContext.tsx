"use client"

import { createContext, useState } from "react";
import { CheckoutContextType, paymentMethodType } from "../types/checkoutType";


const CheckoutContext = createContext<CheckoutContextType | null>(null)

function CheckoutContextProvider({ children }: {children: React.ReactNode}) {

  const [quota, setQuota] = useState<number>(0)
  const [duration, setDuration] = useState<number>(0)
  const [price, setPrice] = useState<number>(0)
  
  const [addDurationPrice, setAddDurationPrice] = useState<number>(0)
  
  const [userName, setUserName] = useState<string>("")
  const [userEmail, setUserEmail] = useState<string>("")
  const [userPhoneNumber, setUserPhoneNumber] = useState<string>("")

  const [datetime, setDatetime] = useState<Date | null>(null)
  
  const [paymentMethod, setPaymentMethod] = useState<paymentMethodType>("Saldo")

  return (
    <CheckoutContext.Provider value={{ quota, setQuota, duration, setDuration, price, setPrice, userName, setUserName, userEmail, setUserEmail, userPhoneNumber, setUserPhoneNumber, datetime, setDatetime, addDurationPrice, setAddDurationPrice, paymentMethod, setPaymentMethod }}>
      {children}
    </CheckoutContext.Provider>
  );
}

export { CheckoutContextProvider, CheckoutContext }