import DashBoard from "../DashBoard/DashBoard";
import Highlights from "../HighLights/Highlight";
import Slide from "../Slide/Slider";
import Subscribe from "../Subscribe/Subscribe";


const Home = () => {
    return (
    <div>
        <Slide/>
        <Highlights/>
        <DashBoard />
        <Subscribe/>
    </div>
);
}
 
export default Home;