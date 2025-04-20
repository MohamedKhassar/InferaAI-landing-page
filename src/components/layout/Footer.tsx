import { HashLink } from "react-router-hash-link"
import { navLinks } from "../../lib/data"
import { Link } from "react-router-dom"
import Button from "../shared/Button"
import logo from "/assets/logo.svg"

const Footer = () => {
    return (
        <footer className="space-y-13">
            <div className="flex flex-wrap lg:justify-between items-start lg:gap-0 gap-x-30 gap-y-10">
                <section className="max-w-xl lg:space-y-5 space-y-3">
                    <h5 className="lg:text-3xl md:text-xl text-start text-lg font-extrabold ">
                        Quick Start you <span className="bg-gradient-to-r from-blue-600 to-purple-700 text-transparent bg-clip-text"> own AI</span> Business
                    </h5>
                    <p className="lg:text-base md:text-sm text-xs text-gray-300 text-start lg:leading-8 leading-7 tracking-tighter">
                        Leverage our AI-powered platform to revolutionize your digital marketing efforts. Get data-driven insights and automation at your fingertips.
                    </p>
                    <Button className="lg:place-self-start place-self-center" >Get In Touch</Button>
                </section>
                <section className="space-y-5 lg:space-y-3">
                    <h5 className="font-bold">Sitemap</h5>
                    <ul className="space-y-2">
                        {navLinks.map((item, index) => (
                            <li key={index} className="text-sm text-slate-400 capitalize hover:text-slate-500 duration-300">
                                <HashLink to={item.href}>{item.text}</HashLink>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="space-y-5 lg:space-y-3 ">
                    <h5 className="font-bold">Socials</h5>
                    <ul className="space-y-2">
                        <li className="text-sm text-slate-400 capitalize hover:text-slate-500 duration-300">
                            <Link to={""}>LinkedIn</Link>
                        </li>
                        <li className="text-sm text-slate-400 capitalize hover:text-slate-500 duration-300">
                            <Link to={""}>Twitter</Link>
                        </li>
                        <li className="text-sm text-slate-400 capitalize hover:text-slate-500 duration-300">
                            <Link to={""}>Instagram</Link>
                        </li>
                        <li className="text-sm text-slate-400 capitalize hover:text-slate-500 duration-300">
                            <Link to={""}>Facebook</Link>
                        </li>
                    </ul>
                </section>
            </div>
            <div className="flex items-center justify-between">
                <HashLink to="/#" className="flex items-center gap-3 w-fit">
                    <img src={logo} className="lg:size-12 size-10" alt="" />
                    <h1 className="lg:text-2xl text-lg font-semibold bg-gradient-to-r from-purple-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">InferaAI</h1>
                </HashLink>
                <p className="text-sm"><span className="text-slate-400">&copy;  {new Date().getFullYear()}</span> InferaAI.</p>
            </div>
        </footer>
    )
}

export default Footer
