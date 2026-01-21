'use client'

import Navbar from "../components/Navbar"
import { useState, useEffect } from "react"
import fetchQuotes from "@/lib/zenquotes"

export default function LandingPage() {
    const [ quote, setQuote ] = useState("")

    async function fetchData() {
        const data = await fetchQuotes()
        setQuote(data[Math.floor(Math.random() * (data.length - 1))])
    }
    
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="font-serif bg-orange-50 p-6 md:p-8 lg:px-16 xl:px-16 text-center flex flex-col gap-4">
            <Navbar />
            <div className="bg-orange-200 rounded-lg h-96 p-6 flex flex-col items-center justify-evenly gap-6">
                <p className="text-orange-950 text-2xl sm:text-4xl">{quote.q}</p>
                <p className="text-amber-800 text-2xl italic uppercase tracking-wider">- {quote.a}</p>
            </div>
        </div>
    )
}