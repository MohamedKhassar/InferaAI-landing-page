import AI_about_us from "/assets/AI_about_us.jpeg"
import { motion } from "framer-motion"
import { fadeOut } from "../../lib/animations"
import { missionVision } from "../../lib/data"
import Card from "../shared/Card"
const About = () => {
    return (
        <motion.main
            variants={fadeOut(.1)}
            initial="initial"
            animate="animate"
            id="about"
            className="flex lg:flex-row flex-col-reverse justify-between items-center lg:my-30 my-15  gap-18">
            <section className="rounded-4xl relative">
                <div className="absolute -top-10 -right-10 -z-10 w-44 h-44 bg-gradient-to-r rotate-45 from-blue-500 via-purple-600 to-transparent blur-2xl rounded-full" />
                <div className="rounded-4xl overflow-hidden">
                    <img loading="lazy" src={AI_about_us} alt="AI_about_us" className="hover:scale-110 transition-transform" />
                </div>
            </section>
            <section className="lg:space-y-9 space-y-6 lg:space-x-7 max-w-2xl">
                <h1 className="lg:text-6xl md:text-3xl lg:text-start text-center text-2xl font-extrabold lg:leading-20">
                    About Our
                    <span className="bg-gradient-to-r from-blue-600 to-purple-700 text-transparent bg-clip-text"> AI Solution</span>
                </h1>
                <p className="lg:text-lg md:text-base text-sm text-slate-300 lg:text-start text-center lg:leading-8 leading-7 tracking-tighter">
                    We are on a mission to empower businesses with transformative AI technology. Our team of experts combines industry‑leading research with innovative algorithms to deliver a platform that adapts to your unique needs. Join us and lead the digital revolution in your industry.
                </p>
                <div className="flex gap-5 lg:flex-row flex-col">
                    {
                        missionVision.map((item, index) => (
                            <Card key={index} title={item.title} description={item.description} Icon={item.Icon} delay={item.delay} />
                        ))
                    }
                </div>
            </section>

        </motion.main>
    )
}

export default About
