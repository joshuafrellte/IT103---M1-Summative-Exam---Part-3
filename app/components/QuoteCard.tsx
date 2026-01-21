
interface cardProps{
    quote: string
    author: string
}

export default function QuoteCard({ quote, author }: cardProps) {

    return (
        <div className="font-serif bg-orange-200 h-42 lg:h-56 px-6 xl:px-8 py-4 xl:py-8 lg:text-lg flex flex-col justify-between items-center">
            <p className="text-amber-950">"{quote}"</p>
            <p className="text-amber-900 text-center uppercase tracking-widest text-md italic">- {author}</p>
        </div>
    )
}