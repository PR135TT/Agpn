import Header from "../components/header"
import Footer from "../components/footer"
import Marquee from "../home/marquee"
import Hero from "../home/hero1"
import Choose from "../components/chooseCareer"
import Built from "../home/useBuilt"

export default function Home(){
    return (
    <div className="App bg-gray-400 overflow-x-hidden">
        <Header/>
        <Marquee/>
        <Hero/>
        <Built/>
        <Choose/>
        <Footer/>
    </div>
    )
}