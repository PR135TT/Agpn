import Header from "../components/header"
import Path from "../home/pathways"
import Footer from "../components/footer"
import Marquee from "../home/marquee"
import Built from "../home/built"
import Do from "../home/whatWeDo"
import Serve from "../home/serve"
import Hero from "../home/hero1"

export default function Home(){
    return (
    <div className="App bg-gray-400 overflow-x-hidden">
        <Header/>
        <Marquee/>
        <Hero/>
        <Serve/>
        <Do/>
        <Built/>
        <Path/>
        <Footer/>
    </div>
    )
}