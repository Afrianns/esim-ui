
export default function ProductType({productType}: {productType: string}) {
  return (
    <div className="flex items-center gap-x-1.5 bg-main-light/20 w-fit px-4 rounded-xl text-main text-sm">
      {productType == "instant" ? 
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 14L14 3v7h6L10 21v-7z" />
          </svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5m-4-1h.01M19 22v-6m3 3l-3-3l-3 3M6 12h.01" />
              <circle cx="12" cy="12" r="2" />
          </g>
          </svg>
      }
      <p>{productType}</p>
  </div>
  )
}