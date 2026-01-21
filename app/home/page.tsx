'use client'

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useState, useEffect } from "react"
import fetchQuotes from "@/lib/zenquotes"
import Link from "next/link"

interface Quote {
    q: string
    a: string
}

export default function LandingPage() {
    const [ quote, setQuote ] = useState<Quote | null>(null)
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        async function fetchData() { 
            try {
                const data = await fetchQuotes()
                setQuote(data[Math.floor(Math.random() * (data.length - 1))])
                setLoading(false)
            } catch (error) {
                console.error(error)
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    if (loading || !quote) {
        return <div className="bg-orange-50 text-2xl font-serif flex items-center justify-center w-full h-dvh">Loading...</div>
    }

    return (
        <div className="font-serif bg-[rgb(231,186,151)] p-6 md:p-8 lg:px-16 xl:px-16 h-dvh text-center flex flex-col gap-8">
            <Navbar />
            <div className="bg-orange-100 rounded h-96 sm:h-150 p-6 xl:px-32 flex flex-col items-center justify-evenly gap-6 shadow">
                <p className="text-orange-950 text-2xl sm:text-4xl">
                    "{quote.q}"
                </p>
                <p className="text-amber-800 text-xl sm:text-3xl italic uppercase tracking-wider">
                    - {quote.a}
                </p>
            </div>
            <Link href="/quotes">
                <button className="bg-amber-800 text-2xl self-center text-orange-50 px-8 py-4 w-fit rounded shadow cursor-pointer transition-colors duration-100 hover:bg-amber-900">
                    Want More Quotes?
                </button>
            </Link>
            <Footer />
        </div>
    )
}