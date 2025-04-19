import { motion } from "framer-motion"
import { FeatureItem } from "../../lib/types"
import { fadeOut } from "../../lib/animations"
const Card = ({ Icon, ...feature }: FeatureItem) => {
  return (
    <motion.div

      variants={fadeOut(feature.delay)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="lg:w-120 md:w-93 bg-gradient-to-r from-purple-900 via-violet-900 to-cyan-900 rounded-2xl p-1">
      <div className="size-full bg-slate-950 rounded-xl flex flex-col justify-center items-center md:space-y-5 space-y-3 p-5">
        <Icon className="bg-gray-900 hover:bg-gray-900/10 duration-300 cursor-pointer hover:border-slate-900 border-2 border-slate-700 p-5 size-max rounded-3xl" />
        <h3 className="lg:text-xl md:text-lg text-base font-extrabold">{feature.title}</h3>
        <p className="text-center text-slate-400 ">{feature.description}</p>
      </div>
    </motion.div>
  )
}

export default Card
