import { motion } from "framer-motion"
import { pricingPlans } from "../../lib/data"
import { fadeOut } from "../../lib/animations"
import { ArrowRight } from "lucide-react"
const Pricing = () => {
    return (
        <motion.main
            variants={fadeOut(.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            id="pricing"
            className="lg:space-y-18 space-y-10 lg:mb-30 mb-15">
            <section className="space-y-5">
                <motion.h2
                    variants={fadeOut(.2)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="lg:text-6xl md:text-3xl text-center text-2xl font-extrabold lg:leading-20"
                >Pricing<span className="bg-gradient-to-r from-blue-600 to-purple-700 text-transparent bg-clip-text"> Plans</span></motion.h2>
                <motion.p
                    variants={fadeOut(.3)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="text-center lg:max-w-4xl md:max-w-2xl max-w-sm place-self-center text-slate-300 lg:text-lg md:text-base text-sm">Choose the plan that's right for your business.</motion.p>
            </section>
            <section className="flex flex-wrap justify-center items-center xl:gap-0 gap-10">
                {pricingPlans.map(({ Icon, ...plan }, index) => (
                    <div className={`w-100 shadow-2xl border-2 ${plan.isPopular ? "border-violet-500 xl:scale-110 bg-gradient-to-br from-violet-800 to-violet-950 shadow-violet-950 z-40" : "bg-slate-900 border-slate-600"} rounded-2xl p-10 pt-0 space-y-10`} key={index}>
                        <div className="relative flex justify-center items-start">
                            <h4 className={`absolute px-5 -top-2.5 rounded-full text-sm ${plan.isPopular ? "bg-violet-300 text-violet-900  font-bold " : " bg-slate-700 text-slate-300 font-semibold"}`} >{
                                plan.description
                            }</h4>
                        </div>
                        <div className="space-y-5">
                            <Icon className={`p-4 size-min rounded-full border-2 ${plan.isPopular ? "bg-violet-500 border-violet-400" : "bg-gray-600 border-gray-500"}`} />
                            <h1 className={`uppercase font-extrabold text-lg  rounded-2xl w-fit px-5 ${plan.isPopular ? "bg-violet-300 text-violet-950" : "bg-slate-500/60 text-white"}`}>{plan.title} plan</h1>
                            <h1 className={`text-5xl font-extrabold ${plan.isPopular&&"text-violet-200"}`}>{plan.price}</h1>
                        </div>
                        <ul className="space-y-5">
                            {plan.features.map(({ FIcon, ...feature }, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <FIcon className={`${plan.isPopular ? "bg-violet-300 text-violet-900" : " bg-violet-900"} stroke-3 p-2 rounded-full size-7`} />
                                    {feature.text}
                                </li>
                            ))}
                        </ul>
                        <button className={`${plan.isPopular?"bg-violet-950 text-violet-200 ":"bg-violet-300/80 text-violet-950"} cursor-pointer py-3 px-6 font-semibold flex items-center place-self-center w-full justify-between rounded-full text-sm`}>Click here to get started <ArrowRight className="-rotate-45" /></button>
                    </div>
                ))}
            </section>
        </motion.main>
    )
}

export default Pricing
