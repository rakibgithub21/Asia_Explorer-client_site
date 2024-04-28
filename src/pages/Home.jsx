import Countries from "../components/Countries";
import Feedback from "../components/Feedback";
import Frequently from "../components/Frequently";
import HomeCards from "../components/HomeCards";
import Slider from "../components/Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider>

            <HomeCards></HomeCards>

            <Countries></Countries>
            <Frequently></Frequently>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;