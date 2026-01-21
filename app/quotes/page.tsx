"use client"

import { useState, useEffect } from "react"
import QuoteCard from "../components/QuoteCard"
import Navbar from "../components/Navbar"
import fetchQuotes from "@/lib/zenquotes"
import Footer from "../components/Footer"

interface Quote {
    q: string
    a: string
}

export default function QuoteBoard() {
    const [ quotes, setQuotes ] = useState([])
    const [ loading, setLoading ] = useState(true)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchQuotes()
                setQuotes(data)
                setLoading(false)
            } catch (error) {
                console.error(error)
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    if (loading) {
        return <div className="bg-orange-50 text-2xl font-serif flex items-center justify-center w-full h-dvh">Loading...</div>
    }

    return (
        <div className="bg-[rgb(231,186,151)] p-6 md:p-8 lg:px-16 xl:px-16 flex gap-6 md:gap-8 flex-col items-center ">
            <Navbar />
            <ol className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">    
                {quotes.map((quote: Quote) => (
                    <li 
                        key={quote.q} 
                        className="list-none"
                    >
                        <QuoteCard 
                            quote={quote.q} 
                            author={quote.a}
                        />
                    </li>
                ))}
            </ol>
            <Footer />
        </div>
    )
}