import './Hightlight.scss'
import { Container,
    AppBar,
    Box,
    Toolbar,
    Typography,
    InputBase,
    Grid,
    Paper,
    Button,
    Switch,
    Card, CardHeader,CardContent, Avatar
} 
from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
const Highlights = () => {
    const [textArea, setTextArea] = useState(false);
    const [cardContainer ,setCardContainer] = useState(true);
    return (
       <div className='hightlight_container'>
           <div className='hightlight_box'>
                <div className='hightlight_nav'>
                    <div className='hightlight_nav_title'>
                        <Typography variant="h4" gutterBottom component="div">
                            Today's Cryptocurrency Prices by Market Cap
                        </Typography>
                        <div className='hightlight_nav_title2'>
                            <Typography variant="body2" sx={{display:'flex',justifyContent:'center',alignContent:'center'}}>
                                The global crypto market cap is &nbsp; <b>$1.96T</b> , a <ArrowDropUpIcon sx={{color:'green'}} fontSize='small' /> <p style={{color:'green'}}>2.77% </p> increase over the last day.
                            </Typography>
                            <Typography 
                                sx={{textDecoration: 'underline',
                                        cursor:'pointer', marginLeft:'10px'
                                }} 
                                onClick={()=>setTextArea(!textArea)}
                                variant="caption" display="block" gutterBottom>
                                    {!textArea ? 'Read More': 'Read Less'}
                            </Typography>
                        </div>
                        {textArea &&
                            <div className='readmore_content'>
                                <Typography variant="body2">The total crypto market volume over the last 24 hours is $99.31B, which makes a 11.98% increase. The total volume in DeFi is currently $14.27B, 14.37% of the total crypto market 24-hour volume. The volume of all stable coins is now $83.02B, which is 83.59% of the total crypto market 24-hour volume.</Typography>
                                <Typography variant="body2" >Bitcoin's price is currently $43,124.94.</Typography>
                                <Typography variant="body2">{`$ Bitcoin’s`} dominance is currently 41.74%, a decrease of 0.11% over the day. </Typography>
                            </div>
                        }
                    </div>
                   <div className='hightlight_nav_button'>
                        <Typography variant="subtitle1" display="block">Hightlights</Typography>
                        <Switch defaultChecked onClick={()=>setCardContainer(!cardContainer)} />
                    </div>
                </div>
                {cardContainer &&
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Card>
                                <CardHeader
                                    sx={{display:'flex' , justifyContent:'space-between' ,alignItems:'center' }}
                                    avatar={<LocalFireDepartmentIcon sx={{color:'red'}}/>}
                                    title={<Typography variant='h6'>Trending</Typography>}
                                    action={
                                            <Button
                                                variant="text"
                                                endIcon={<ArrowForwardIosIcon/>}
                                            >More
                                            </Button>
                                        }
                                />
                                <CardContent sx={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                                    <div style={{display:'flex' ,justifyContent:'space-between',alignItems:'center'}}>
                                        <Typography variant='caption'>1</Typography>
                                        <div style={{marginLeft:'15px',display:'flex', justifyContent:'space-between' ,alignItems:'center'}}>
                                            <Avatar
                                                sx={{ width: 24, height: 24 }}
                                                src='./assets/img/apecoin.png'
                                            />
                                            <div style={{width:'120px',marginLeft:'5px',display:'flex' ,justifyContent:'space-between',alignItems:'center'}}> 
                                                <Typography  variant='subtitle'>ApeCoin</Typography>
                                                <Typography  variant='caption'>APE</Typography>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <ArrowDropUpIcon sx={{color:'green'}}/>
                                        <Typography sx={{color:'green',fontSize:'10px'}}>15.33%</Typography>
                                    </div>
                                </CardContent>
                                <CardContent sx={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                                    <div style={{display:'flex' ,justifyContent:'space-between',alignItems:'center'}}>
                                        <Typography variant='caption'>2</Typography>
                                        <div style={{marginLeft:'15px',display:'flex', justifyContent:'space-between' ,alignItems:'center'}}>
                                            <Avatar
                                                sx={{ width: 24, height: 24 }}
                                                src='./assets/img/Shiba.png'
                                            />
                                            <div style={{width:'120px',marginLeft:'5px',display:'flex' ,justifyContent:'space-between',alignItems:'center'}}> 
                                                <Typography  variant='subtitle'>Shiba Inu</Typography>
                                                <Typography  variant='caption'>SHIB</Typography>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <ArrowDropUpIcon sx={{color:'green'}}/>
                                        <Typography sx={{color:'green',fontSize:'10px'}}>5.26%</Typography>
                                    </div>
                                </CardContent>
                                <CardContent sx={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                                    <div style={{display:'flex' ,justifyContent:'space-between',alignItems:'center'}}>
                                        <Typography variant='caption'>3</Typography>
                                        <div style={{marginLeft:'15px',display:'flex', justifyContent:'space-between' ,alignItems:'center'}}>
                                            <Avatar
                                                sx={{ width: 24, height: 24 }}
                                                src="./assets/img/CAKE-logo.png"
                                            />
                                            <div style={{width:'130px',marginLeft:'5px',display:'flex' ,justifyContent:'space-between',alignItems:'center'}}> 
                                                <Typography  variant='subtitle'>PancakeSwap</Typography>
                                                <Typography  variant='caption'>CAKE</Typography>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <ArrowDropUpIcon sx={{color:'green'}}/>
                                        <Typography sx={{color:'green',fontSize:'10px'}}>2.90%</Typography>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card >
                                <CardHeader
                                    sx={{display:'flex' , justifyContent:'space-between' ,alignItems:'center' }}
                                    avatar={<TrendingUpIcon sx={{borderRadius:'50%',background:'green', color:'#fffTrendingUpIcon'}}/>}
                                    title={<Typography variant='h6'>Biggest Gainers</Typography>}
                                    action={
                                        <Button
                                                variant="text"
                                                endIcon={<ArrowForwardIosIcon/>}
                                            >More
                                            </Button>
                                        }
                                />
                                <CardContent sx={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                                    <div style={{display:'flex' ,justifyContent:'space-between',alignItems:'center'}}>
                                        <Typography variant='caption'>1</Typography>
                                        <div style={{marginLeft:'15px',display:'flex', justifyContent:'space-between' ,alignItems:'center'}}>
                                            <Avatar
                                                sx={{ width: 24, height: 24 }}
                                                src="./assets/img/ALTS.jpg"
                                            />
                                            <div style={{width:'120px',marginLeft:'5px',display:'flex' ,justifyContent:'space-between',alignItems:'center'}}> 
                                                <Typography  variant='subtitle'>AltSwich</Typography>
                                                <Typography  variant='caption'>ALTS</Typography>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <ArrowDropUpIcon sx={{color:'green'}}/>
                                        <Typography sx={{color:'green',fontSize:'10px'}}>331.36%%</Typography>
                                    </div>
                                </CardContent>
                                <CardContent sx={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                                    <div style={{display:'flex' ,justifyContent:'space-between',alignItems:'center'}}>
                                        <Typography variant='caption'>2</Typography>
                                        <div style={{marginLeft:'15px',display:'flex', justifyContent:'space-between' ,alignItems:'center'}}>
                                            <Avatar
                                                sx={{ width: 24, height: 24 }}
                                                src="./assets/img/ARC.jpg"
                                            />
                                            <div style={{width:'120px',marginLeft:'5px',display:'flex' ,justifyContent:'space-between',alignItems:'center'}}> 
                                                <Typography  variant='subtitle'>ARC</Typography>
                                                <Typography  variant='caption'>ARC</Typography>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <ArrowDropUpIcon sx={{color:'green'}}/>
                                        <Typography sx={{color:'green',fontSize:'10px'}}>5.26%</Typography>
                                    </div>
                                </CardContent>
                                <CardContent sx={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                                    <div style={{display:'flex' ,justifyContent:'space-between',alignItems:'center'}}>
                                        <Typography variant='caption'>3</Typography>
                                        <div style={{marginLeft:'15px',display:'flex', justifyContent:'space-between' ,alignItems:'center'}}>
                                            <Avatar
                                                sx={{ width: 24, height: 24 }}
                                                src='./assets/img/integral.webp'
                                            />
                                            <div style={{width:'130px',marginLeft:'5px',display:'flex' ,justifyContent:'space-between',alignItems:'center'}}> 
                                                <Typography  variant='subtitle'>Integral</Typography>
                                                <Typography  variant='caption'>ITGR</Typography>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <ArrowDropUpIcon sx={{color:'green'}}/>
                                        <Typography sx={{color:'green',fontSize:'10px'}}>194.64%</Typography>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card>
                                <CardHeader
                                    sx={{display:'flex' , justifyContent:'space-between' ,alignItems:'center' }}
                                    avatar={<AccessTimeIcon sx={{color:'#637086'}}/>}
                                    title={<Typography variant='h6'>Recently added</Typography>}
                                    action={
                                        <Button
                                                variant="text"
                                                endIcon={<ArrowForwardIosIcon/>}
                                            >More
                                            </Button>
                                        }
                                />
                                <CardContent sx={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                                    <div style={{display:'flex' ,justifyContent:'space-between',alignItems:'center'}}>
                                        <Typography variant='caption'>1</Typography>
                                        <div style={{marginLeft:'15px',display:'flex', justifyContent:'space-between' ,alignItems:'center'}}>
                                            <Avatar
                                                sx={{ width: 24, height: 24 }}
                                                src='./assets/img/monster.png'
                                            />
                                            <div style={{width:'120px',marginLeft:'5px',display:'flex' ,justifyContent:'space-between',alignItems:'center'}}> 
                                                <Typography  variant='subtitle'>Monster Saga</Typography>
                                                <Typography  variant='caption'>MTS</Typography>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        
                                        <Typography sx={{fontSize:'10px'}}>0.008796</Typography>
                                    </div>
                                </CardContent>
                                <CardContent sx={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                                    <div style={{display:'flex' ,justifyContent:'space-between',alignItems:'center'}}>
                                        <Typography variant='caption'>2</Typography>
                                        <div style={{marginLeft:'15px',display:'flex', justifyContent:'space-between' ,alignItems:'center'}}>
                                            <Avatar
                                                sx={{ width: 24, height: 24 }}
                                                src='./assets/img/Adalend.webp'
                                            />
                                            <div style={{width:'120px',marginLeft:'5px',display:'flex' ,justifyContent:'space-between',alignItems:'center'}}> 
                                                <Typography  variant='subtitle'>Adalend</Typography>
                                                <Typography  variant='caption'>ADAL</Typography>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            
                                        <Typography sx={{fontSize:'10px'}}>1.72</Typography>
                                    </div>
                                </CardContent>
                                <CardContent sx={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                                    <div style={{display:'flex' ,justifyContent:'space-between',alignItems:'center'}}>
                                        <Typography variant='caption'>3</Typography>
                                        <div style={{marginLeft:'15px',display:'flex', justifyContent:'space-between' ,alignItems:'center'}}>
                                            <Avatar
                                                sx={{ width: 24, height: 24 }}
                                                src='./assets/img/Confetti.jpg'
                                            />
                                            <div style={{width:'130px',marginLeft:'5px',display:'flex' ,justifyContent:'space-between',alignItems:'center'}}> 
                                                <Typography  variant='subtitle'>Confetti</Typography>
                                                <Typography  variant='caption'>CFTI</Typography>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                    
                                        <Typography sx={{fontSize:'10px'}}>33.67</Typography>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                  }
                </div>
         
       </div>
      );
}
 
export default Highlights;