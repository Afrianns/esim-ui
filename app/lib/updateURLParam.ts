import { usePathname, useRouter, useSearchParams } from "next/navigation"

export const updateURLParam = (key: string, value: string | null) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const params = new URLSearchParams(searchParams.toString())

  if (value) {
    params.set(key, value)
  } else {
    params.delete(key)
  }

  const queryString = params.toString()
  const newUrl = queryString ? `${pathname}?${queryString}` : pathname

  router.replace(newUrl, { scroll: false });
};