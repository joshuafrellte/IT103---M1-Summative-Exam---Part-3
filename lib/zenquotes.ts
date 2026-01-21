
export default async function fetchQuotes()  {
    try {
        const response = await fetch("https://corsproxy.io/?https://zenquotes.io/api/quotes")
        
        if (!response.ok) {
            throw new Error(`Error fetching from URL: ${response.status}`)
        }

        return await response.json()

    } catch (error) {
        console.error(error)
    } 
    }