export default function Search({ setSearch }: {setSearch: (x: string) => void}) {
    return (
        <main className="my-5 mt-0 space-y-5 container-style">
            <div className="space-y-4">
                <section className="relative">
                    <input type="text" placeholder="Cari Produk yang Anda Mau" className="bg-main-dark placeholder:text-main-light rounded-lg flex items-center justify-between py-4 px-5 w-full outline-main outline-solid focus:outline-main-light" onChange={(e) => setSearch(e.target.value)} />
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" className="absolute top-4 right-5 bottom-0">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0Z" />
                    </svg>
                </section>
            </div>
        </main>
    )
}