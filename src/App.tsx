import Navbar from "./components/layout/Navbar"
import AchievementsBar from "./components/sections/AchievementsBar"
import Hero from "./components/sections/Hero"
const App = () => {

  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <AchievementsBar />
    </div>
  )
}

export default App
