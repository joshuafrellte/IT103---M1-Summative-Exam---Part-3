"use client"

import { useState, useEffect } from "react"
import QuoteCard from "./QuoteCard"
import Navbar from "./Navbar"

interface quote {
    q: string
    a: string
}

export default function QuoteBoard() {
    const [quotes, setQuotes] = useState([])

    const fetchQuotes = async () => {
        try {
            
            const response = await fetch("https://corsproxy.io/?https://zenquotes.io/api/quotes")
            
            if (!response.ok) {
                throw new Error(`Error fetching from URL: ${response.status}`)
            }

            const data = await response.json()
            setQuotes(data)
            console.log(data)
        } catch (error) {
            console.error(error)
        } 
    }

    useEffect(() => {
        fetchQuotes()
    }, [])

    return (
        <div className="p-6 md:p-8 lg:px-16 xl:px-16 flex gap-6 md:gap-8 flex-col items-center ">
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