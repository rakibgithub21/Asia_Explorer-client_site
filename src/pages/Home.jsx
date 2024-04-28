import Countries from "../components/Countries";
import HomeCards from "../components/HomeCards";
import Slider from "../components/Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider>

            <HomeCards></HomeCards>

            <Countries></Countries>
        </div>
    );
};

export default Home;