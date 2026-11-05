import Header from "../components/header"
import Footer from "../components/footer"
import Marquee from "../home/marquee"
import Hero from "../home/hero1"
import Content from "../home/content"
import Choose from "../components/chooseCareer"

export default function Home(){
    return (
    <div className="App bg-gray-400 overflow-x-hidden">
        <Header/>
        <Marquee/>
        <Hero/>
        <Content/>
        <Choose/>
        <Footer/>
    </div>
    )
}