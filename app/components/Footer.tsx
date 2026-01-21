import { FaGithub } from "react-icons/fa" 
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="sm:text-xl font-sans w-full mt-10 bg-amber-950 text-orange-50 px-8 py-4 xl:py-6 xl:px-16 text-center flex justify-center items-center gap-8 rounded shadow">
            <p>&copy; Joshua Frell Te</p>
            <Link 
                href="https://github.com/joshuafrellte" 
                target="_blank"
            >
                <FaGithub className="sm:text-2xl hover:text-orange-200"/>
            </Link>
        </footer>
    )
}