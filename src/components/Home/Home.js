import Banner from "./Banner"
import Socials from "./Socials"
import Content from "./Content"
import "./Home.css"

const Home = () => {
    return (
        <div className="home">
            <Banner />
            <div className="landing-wrapper" style={{position: "relative"}}>
                <div className="filler"></div>
                <Socials />
            </div>
            <Content />
        </div>
    )
}

export default Home