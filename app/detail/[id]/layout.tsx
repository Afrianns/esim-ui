import { CheckoutContextProvider } from "@/app/context/checkoutContext";

export default function DetailLayout({ children }: {children: React.ReactNode}) {
  return (
    <CheckoutContextProvider>{children}</CheckoutContextProvider>
  )
}