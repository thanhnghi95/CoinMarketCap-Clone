import { Container,
  Card
  
} 
from '@mui/material';
import './Slider.scss'
import Slider from "react-slick";

import { info } from '../../data/CardInfo';
const Slide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
    return (
      <Container sx={{padding:'10px 0px'}}>
        <Container sx={{display:'flex', overflow:'hidden'}}>
          <Slider  {...settings}>
            {info.map(e=>(
              <Card key={e.id} 
                    sx={{ width: '300px',height:'200px', margin:'0px 10px' }}
                >
                  {e.tag}
                  {e.content}
            </Card>
            ))}
          </Slider>
        </Container>
      </Container>

  
    );
}
 
export default Slide;