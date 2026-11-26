
export default function FilterMenu({ toggleFilter }: { toggleFilter: (x: string) => void }) {
  return (
    <div className="mx-5">
      <section className="flex items-center gap-x-3">
          <button className="menu-style-button" onClick={() => toggleFilter("region")}>
              <p>Semua Region</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 4l8 8l-8 8" />
              </svg>
          </button>
          <button className="menu-style-button" onClick={() => toggleFilter("product-type")}>
              <p>Semua Jenis</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 4l8 8l-8 8" />
              </svg>
          </button>
      </section>
    </div>
  )
}