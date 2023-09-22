import AboutUs from "./components/home/AboutUs";
import Contact from "./components/home/Contact";
import Hero from "./components/home/Hero";
import Pricing from "./components/home/Pricing";
import Services from "./components/home/Services";

export default function Home() {
  return (
    <>
      <Hero/>
      <AboutUs/>
      <Services/>
      <Pricing/>
      <Contact/>
    </>
  )
}
