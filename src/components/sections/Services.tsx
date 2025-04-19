import { motion } from "framer-motion"
import { fadeOut } from "../../lib/animations"
import { features } from "../../lib/data"
import Card from "../shared/Card"

const Services = () => {
    return (
        <main id="services" className="space-y-10">
            <section className="space-y-5">
                <motion.h2
                    variants={fadeOut(.2)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="lg:text-6xl md:text-3xl text-center text-2xl font-extrabold lg:leading-20"
                >Our <span className="bg-gradient-to-r from-blue-600 to-purple-700 text-transparent bg-clip-text">AI</span> Services</motion.h2>
                <motion.p
                variants={fadeOut(.3)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="text-center lg:max-w-4xl md:max-w-2xl max-w-sm place-self-center text-slate-300 lg:text-lg md:text-base text-sm">Unlock the potential of advanced machine learning, natural language processing, and predictive analytics. Our services include:</motion.p>
            </section>
            <section className="flex flex-wrap lg:justify-between justify-center lg:gap-0 gap-6 ">
                {
                    features.map((feature, index) => (
                        <Card key={index} delay={feature.delay} description={feature.description} title={ feature.title} Icon={feature.Icon} />
                    ))
                }
            </section>
        </main>
    )
}

export default Services
