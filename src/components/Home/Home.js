import Banner from "./Banner"
import Welcome from "./Welcome"
import Socials from "./Socials"
import Content from "./Content"
import "./Home.css"

const Home = () => {
    return (
        <div className="home">
            <Banner />
            <Welcome />
            <Socials />
            <Content />
        </div>
    )
}

export default Home