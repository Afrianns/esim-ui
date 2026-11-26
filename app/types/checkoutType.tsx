export type paymentMethodType = "Saldo" | "VA BCA" | "VA Mandiri" | "VA BRI"

export interface CheckoutContextType {
  quota: number
  setQuota: (x: number) => void
  duration: number
  setDuration: (x: number) => void

  addDurationPrice: number
  setAddDurationPrice: (x: number) => void

  datetime: Date | null
  setDatetime: (x: Date) => void
  price: number
  setPrice: (x: number) => void
  userName: string
  setUserName: (x: string) => void
  userEmail: string
  setUserEmail: (x: string) => void
  userPhoneNumber: string
  setUserPhoneNumber: (x: string) => void
  paymentMethod: paymentMethodType
  setPaymentMethod: (x: paymentMethodType) => void
}