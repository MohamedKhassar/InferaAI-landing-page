import { MailOpen } from "lucide-react"
import Button from "../shared/Button"
import AI_banner from "/assets/AI_banner.jpeg"
const Hero = () => {
    return (
        <div className="flex lg:flex-row flex-col justify-between items-center lg:my-16 my-10 lg:mx-5 mx-3 lg:gap-0 gap-18">
            <div className="max-w-[44rem] space-y-7">
                <h1 className="lg:text-6xl md:text-3xl lg:text-start text-center text-xl font-extrabold lg:leading-20">
                    Empower Your Business
                    <span className="bg-gradient-to-r from-blue-600 to-purple-700 text-transparent bg-clip-text"> with AI</span>
                </h1>
                <p className="lg:text-lg md:text-base text-sm text-gray-300 lg:text-start text-center lg:leading-8 leading-7">
                    Our AI SaaS platform seamlessly integrates with your existing workflows to deliver real‑time insights, intelligent automation, and data‑driven decision-making. Experience a future where your business runs smarter, faster, and more efficiently.
                </p>
                <div className="flex items-center border border-slate-700 px-3 rounded-full bg-slate-900 lg:w-4/5 w-full place-self-center lg:place-self-start gap-1">
                    <MailOpen className="md:mx-4 mx-2 md:size-8 text-gray-600" />
                    <input type="email" className="outline-none h-full md:w-full w-4/6 lg:placeholder:text-base placeholder:text-sm" required placeholder="johndoe@gmail.com" />
                    <Button className="rounded-full my-2 md:text-base text-xs !py-3 !px-4">
                        Subscribe
                    </Button>
                </div>
            </div>
            <div className="rounded-4xl relative">
                <div className="absolute -top-10 left-0 -z-10 w-44 h-44 bg-gradient-to-r rotate-45 from-blue-500 via-purple-600 to-transparent blur-2xl rounded-full" />
                <div className="rounded-4xl overflow-hidden">
                    <img loading="lazy" src={AI_banner} alt="AI_banner" className="hover:scale-110 transition-transform" />
                </div>
            </div>
        </div>
    )
}

export default Hero
