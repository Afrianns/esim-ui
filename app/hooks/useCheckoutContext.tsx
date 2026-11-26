"use client";

import { CheckoutContext } from "@/app/context/checkoutContext";
import { useContext } from "react";

export default function useCheckoutContext() {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("An Error has Occur");
  }
  return context;
}