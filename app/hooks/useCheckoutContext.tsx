"use client";


import { CheckoutContext } from "@/app/context/checkoutContext";
import { useContext } from "react";

export default function useCheckoutContext() {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useStateData must be used within a StateContextProvider");
  }
  return context;
}