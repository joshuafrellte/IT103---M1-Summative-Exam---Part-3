import Link from "next/link"

export default function Navbar() {
    return (
        <div className="font-serif w-full bg-amber-900 text-orange-50 px-8 py-4 xl:py-6 xl:px-16 text-center sm:flex sm:justify-between sm:items-center rounded shadow">
            <h1 className="font-semibold text-4xl mb-3 sm:mb-1">ZenQuotes</h1>
            <nav className="text-lg xl:text-2xl flex justify-center gap-12 xl:gap-18">
                <Link href="/home" className="hover:text-orange-200">Home</Link>
                <Link href="/quotes" className="hover:text-orange-200">Quotes</Link>
            </nav>
        </div>
    )
}