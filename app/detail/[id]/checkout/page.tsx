import CompletedPayment from "./_components/completedPayment";
import Identity from "./_components/identity";
import Payment from "./_components/payment";

export const instant = false

export default async function Checkout({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { tab } = await searchParams
  return (
      <>
        {tab == "completed" ? <CompletedPayment /> : tab == "payment" ? <Payment /> : <Identity/>}
      </>
  )
}