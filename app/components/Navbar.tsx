

export default function Navbar() {
    
    return (
        <div className="font-serif w-full bg-yellow-900 text-orange-50 px-8 py-4 xl:px-12 text-center sm:flex sm:justify-between sm:items-center rounded-xl">
            <h1 className="font-semibold text-4xl mb-3 sm:mb-1">ZenQuotes</h1>
            <nav>
                <ol className="text-lg xl:text-xl flex justify-center gap-12 xl:gap-24">
                    <li>Home</li>
                    <li>Quotes</li>
                </ol>
            </nav>
        </div>
    )
}