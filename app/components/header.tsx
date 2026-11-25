
export default function Header() {
    return (
        <main className="m-5 space-y-10 mt-10">
            <section className="flex items-center gap-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14 6l-6 6l6 6" />
                </svg>
                <h3>Travel eSIM</h3>
            </section>
            <div className="space-y-4">
                
                <section className="relative">
                    <input type="text" placeholder="Cari Produk yang Anda Mau" className="bg-main-dark placeholder:text-main-light rounded-lg flex items-center justify-between py-4 px-5 w-full" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" className="absolute top-4 right-5 bottom-0">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0Z" />
                    </svg>
                </section>

                <section className="flex items-center gap-x-3">
                    <div className="menu-style-button">
                        <p>Semua Region</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 4l8 8l-8 8" />
                        </svg>
                    </div>
                    <div className="menu-style-button">
                        <p>Semua Jenis</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 4l8 8l-8 8" />
                        </svg>
                    </div>
                </section>
            </div>
        </main>
    )
}