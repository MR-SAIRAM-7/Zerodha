import Footer from "../Footer";
import Navbar from "../Navbar";
import OpenAccount from "../OpenAccount";
import Awards from "./Awards";
import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";


export default function HomePage() {
    return (
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <Awards></Awards>
            <Stats></Stats>
            <Pricing></Pricing>
            <Education></Education>
            <OpenAccount></OpenAccount>
            <Footer></Footer>


        </>
    )
}