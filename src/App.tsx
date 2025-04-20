import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import About from "./components/sections/About"
import AchievementsBar from "./components/sections/AchievementsBar"
import Hero from "./components/sections/Hero"
import Pricing from "./components/sections/Pricing"
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
      <About />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
