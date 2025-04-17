import { motion } from "framer-motion";
import CountUp from "react-countup";
import { statsData } from "../../lib/data";
import { fadeOut } from "../../lib/animations";
const AchievementsBar = () => {

  return (
    <motion.main
    variants={fadeOut(.4)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="flex justify-center items-center bg-gradient-to-r from-purple-600 via-blue-800 to-cyan-600 place-self-center rounded-2xl p-1">
      <section className="w-fit bg-slate-900 h-full rounded-xl flex flex-wrap py-3 lg:px-5 md:px-10 lg:gap-10 lg:justify-center justify-between items-center">
        {
          statsData.map(({ Icon, ...item }, index) => (
            <div key={index} className="space-y-3 hover:bg-slate-800 cursor-pointer p-6 rounded-xl duration-300 md:w-71 w-full">
              <div className="flex items-center justify-center gap-2">
                <Icon className="size-7" />
                <CountUp end={item.value} suffix={item.suffix} className="text-3xl text-center font-extrabold" />
              </div>
              <p className="text-xl text-slate-300 text-center">
                {item.label}
              </p>
            </div>
          ))
        }
      </section>
    </motion.main>
  )
}

export default AchievementsBar
