interface cardProps{
    quote: string
    author: string
}

export default function QuoteCard({ quote, author }: cardProps) {
    return (
        <div className="font-serif bg-orange-100 h-42 sm:h-52 lg:h-72 xl:h-80 px-6 lg:px-8 py-4 lg:py-8 md:text-lg flex flex-col justify-between items-center shadow rounded-md sm:rounded transition-all duration-100 hover:-translate-y-2 hover:shadow-xl">
            <p className="text-amber-950 xl:text-xl">"{quote}"</p>
            <p className="text-amber-800 text-center uppercase tracking-widest text-md italic">- {author}</p>
        </div>
    )
}