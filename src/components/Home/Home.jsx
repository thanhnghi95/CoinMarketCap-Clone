import DashBoard from "../DashBoard/DashBoard";
import Highlights from "../HighLights/Highlight";
import Slide from "../Slide/Slider";


const Home = () => {
    return (
    <div>
        <Slide/>
        <Highlights/>
        <DashBoard />
    </div>
);
}
 
export default Home;