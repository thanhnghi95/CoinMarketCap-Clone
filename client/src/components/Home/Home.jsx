import Chart from "../Chart/Chart";
import Highlights from "../HighLights/Highlight";
import Slide from "../Slide/Slider";


const Home = () => {
    return (
        <div>
            <div 
                style={{background:'#FAFBFD',
                        backgroundRepeat: 'repeat',
                        backgroundImage:'linear-gradient(rgb(204 157 157 / 10%),rgba(255,255,255,0.9),rgba(255,255,256,1))',
                    }}>
                    <Slide/>
            </div>
            <Highlights/>
            <Chart/>
        </div>
      );
}
 
export default Home;