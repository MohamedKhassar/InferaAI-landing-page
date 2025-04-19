import { motion } from "framer-motion"
import { companyLogos } from "../../lib/data"
import { fadeOut } from "../../lib/animations"
const TrustedBy = () => {
    return (
        <main className="lg:my-30 my-15">
            <section className="md:space-y-20 space-y-10">
                <motion.h2

                    variants={fadeOut(.2)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="lg:text-6xl md:text-3xl text-center text-2xl font-extrabold lg:leading-20"
                >Trusted by Industry <span className="bg-gradient-to-r from-blue-600 to-purple-700 text-transparent bg-clip-text">Leaders</span></motion.h2>
                <motion.div

                    variants={fadeOut(.4)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="flex flex-wrap lg:gap-0 gap-10 lg:justify-between justify-evenly items-center">
                    {companyLogos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt={`Company logo ${index + 1}`}
                            className="md:h-20 h-15 lg:grayscale-100 hover:grayscale-0 duration-300 cursor-pointer hover:scale-105"
                        />
                    ))}
                </motion.div>
            </section>
        </main>
    )
}

export default TrustedBy
