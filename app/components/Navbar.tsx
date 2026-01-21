import Link from "next/link"

export default function Navbar() {
    
    return (
        <div className="font-serif w-full bg-yellow-900 text-orange-50 px-8 py-4 xl:py-6 xl:px-12 text-center sm:flex sm:justify-between sm:items-center rounded-xl shadow">
            <h1 className="font-semibold text-4xl mb-3 sm:mb-1">ZenQuotes</h1>
            <nav className="text-lg xl:text-xl flex justify-center gap-12 xl:gap-24">
                <Link href="/home">Home</Link>
                <Link href="/quotes">Quotes</Link>
            </nav>
        </div>
    )
}