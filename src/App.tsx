import Navbar from "./components/layout/Navbar"
import AchievementsBar from "./components/sections/AchievementsBar"
import Hero from "./components/sections/Hero"
import Services from "./components/sections/Services"
import TrustedBy from "./components/sections/TrustedBy"
const App = () => {

  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <AchievementsBar />
      <TrustedBy />
      <Services />
    </div>
  )
}

export default App
