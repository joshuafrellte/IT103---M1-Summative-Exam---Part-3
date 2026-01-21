"use client"

import { useState, useEffect } from "react"
import QuoteCard from "../components/QuoteCard"
import Navbar from "../components/Navbar"
import fetchQuotes from "@/lib/zenquotes"

interface quote {
    q: string
    a: string
}

export default function QuoteBoard() {
    const [quotes, setQuotes] = useState([])
    
    async function fetchData() {
        const data = await fetchQuotes()
        setQuotes(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="bg-orange-50 p-6 md:p-8 lg:px-16 xl:px-16 flex gap-6 md:gap-8 flex-col items-center ">
            <Navbar />
            <ol className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">    
                {quotes.map(quote => (
                    <li key={quote.q} className="list-none">
                        <QuoteCard quote={quote.q} author={quote.a}/>
                    </li>
                ))}
            </ol>
        </div>
    )
}