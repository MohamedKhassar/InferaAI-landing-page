import { Menu, X } from "lucide-react"
import Button from "../shared/Button"
import NavItem from "../shared/NavItem"
import logo from "/assets/logo.svg"
import { useEffect, useRef, useState } from "react"

const navLinks = [
    { href: "/#", text: "Home" },
    { href: "/#services", text: "services" },
    { href: "/#about", text: "About" },
    { href: "/#features", text: "Features" },
    { href: "/#pricing", text: "Pricing" },
]
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navRef = useRef<HTMLElement>(null)
    const clickOutSide = (e: MouseEvent) => {
        if (navRef.current && !navRef.current?.contains(e.target as Node)) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", clickOutSide)
        return () => {
            document.removeEventListener("mousedown", clickOutSide)
        }
    })
    return (
        <header className="lg:py-5 lg:px-6 py-3 px-4 bg-black/30 backdrop-blur-md sticky top-4 border-purple-600 border-2 lg:rounded-4xl rounded-2xl mt-4 z-50 flex items-center justify-between mx-5">
            <div>
                <a href="" className="flex items-center gap-3 w-fit">
                    <img src={logo} className="lg:size-12 size-10" alt="" />
                    <h1 className="lg:text-2xl text-lg font-semibold bg-gradient-to-r from-purple-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">InferaAI</h1>
                </a>
            </div>
            <nav ref={navRef} className={`flex lg:flex-row justify-between items-center lg:max-w-3xl lg:w-full w-fit gap-6 lg:static absolute top-20 right-3 lg:border-none border-violet-500 border-2 rounded-3xl lg:p-0 px-4 py-6 ${!isOpen ? "hidden lg:flex" : "flex-col bg-black/30 backdrop-blur-3xl"}`}>
                <ul className="flex flex-col lg:flex-row items-center gap-5">
                    {navLinks.map(({ text, href }, index) => (
                        <NavItem key={index} text={text} href={href} />
                    ))}
                </ul>
                <Button>Get Started</Button>
            </nav>
            <Button onClick={() => setIsOpen(prev => !prev)} className="lg:hidden !py-3 !px-3">
                {
                    isOpen ?
                        <X />
                        :
                        <Menu />
                }
            </Button>
        </header>
    )
}

export default Navbar
