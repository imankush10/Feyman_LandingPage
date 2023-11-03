import "./Home.scss";
import Header from "../Header/Header";
import Herosection from "../HeroSection/Herosection";
import Sectiontwo from "../Sectiontwo/Sectiontwo";
import Sectionthree from "../Sectionthree.jsx/Sectionthree";
import Sectionfour from "../Sectionfour/Sectionfour";
import Footer from "../Footer/Footer";
import Connect from "../Connect/Connect";
import Pricing from "../Pricing/Pricing";
const Home = () => {
    return (
        <div className="body">
            <Header />
            <Herosection />
            <Sectiontwo />
            <Sectionthree />
            <Sectionfour />
            <Pricing />
            <Connect />
            <Footer />
        </div>
    );
};

export default Home;
