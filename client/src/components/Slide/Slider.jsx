import { Container,
  Card
  
} 
from '@mui/material';
import './Slider.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { info } from '../../data/CardInfo';

const Slide = () => {
  const settings = {
      dots: false,
      infinite: false,
      speed: 400,
      slidesToShow: 3.5,
      slidesToScroll:3.5,
      prevArrow:<ArrowBackIosNewIcon
                  sx={{color:'#FFf'}}
                  
                />,
      nextArrow:<ArrowForwardIosIcon
                  sx={{color:'#FFF'}}
      />
  };
    return (
      <Container
      >
        <Container sx={{display:'flex',height:'300px'}}>
            <Slider {...settings}>
              {info.map(e=>(
                <Card key={e.id}
                      sx={{height:'230px',cursor:'pointer',background:'transparent'}}
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