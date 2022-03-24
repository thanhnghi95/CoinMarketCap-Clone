import { Container,
    Card,
    CardMedia,
    CardContent,
    Typography
    
  } 
  from '@mui/material';

const style = {height:'154px',position:'relative',width:'inherit'}

export const info =[
    {  id:1,
       tag:  <iframe
                src='https://www.youtube.com/embed/J7eYhM6wXPo'
                width='inherit'
                height='auto'
                title='zz'
            />,
        content:<CardContent>
                    <Typography variant="caption" >
                    Crypto Deep Dive
                    </Typography>
                    <Typography variant="subtitle2">
                    What is Decentrailized Science
                    </Typography>
                </CardContent>
    },
    {id:2,
        tag: <div style={style} >
                <img src="./assets/img/img1.png" alt="" style={{position:'absolute',width:'304px',height:'154px',objectFit:'cover'}} />
            </div>
        ,
        content:<CardContent>
        <Typography variant="caption" >
        The capital
        </Typography>
        <Typography variant="subtitle2">
        Global coin MarketCap Conference 
        </Typography>
        </CardContent>
    
    },
    {id:3,
        tag: <div style={style}>
                <img src="./assets/img/img2.png" alt="" style={{position:'absolute',width:'304px',height:'154px',objectFit:'cover'}} />
            </div>
        ,
        content:<CardContent>
        <Typography variant="caption" >
        Crypto News
        </Typography>
        <Typography variant="subtitle2">
        Crypto & Sanctions
        </Typography>
        </CardContent>
    
    }
    ,
    {id:4,
        tag: <div style={style}>
                <img src="./assets/img/img3.png" alt="" style={{position:'absolute',width:'304px',height:'154px',objectFit:'cover'}} />
            </div>
        ,
        content:<CardContent>
        <Typography variant="caption" >
        Collect Your Diamonds
        </Typography>
        <Typography variant="subtitle2">
        Get The Santos FC Mystery-Pack
        </Typography>
        </CardContent>
    
    },
    {id:5,
        tag:<iframe
                src='https://www.youtube.com/embed/oG5KQiU6WXg'
                width='inherit'
                height='auto'
                title='zz'
            />,
        content:<CardContent>
        <Typography variant="caption" >
        Token Free Airdrop!
        </Typography>
        <Typography variant="subtitle2">
        Join FutureCoin's $60,000 Airdrop!
        </Typography>
        </CardContent>
    
    },
    {id:6,
        tag: <div style={style}>
                <img src="./assets/img/img5.png" alt="" style={{position:'absolute',width:'304px',height:'154px',objectFit:'cover'}} />
            </div>
        ,
        content:<CardContent>
        <Typography variant="caption" >
        Self Reporting
        </Typography>
        <Typography variant="subtitle2">
            Self-Reporting Dashboard (SRD)
        </Typography>
        </CardContent>
    
    },
    {id:7,
        tag: <div style={style}>
                <img src="./assets/img/img6.png" alt="" style={{position:'absolute',width:'304px',height:'154px',objectFit:'cover'}} />
            </div>
        ,
        content:<CardContent>
        <Typography variant="caption" >
        CoinMarketCap Portfolio
        </Typography>
        <Typography variant="subtitle2">
       Track your Token Profits
        </Typography>
        </CardContent>
    
    },
    {id:8,
        tag: <div style={style}>
                <img src="./assets/img/img7.png" alt="" style={{position:'absolute',width:'304px',height:'154px',objectFit:'cover'}} />
            </div>
        ,
        content:<CardContent>
        <Typography variant="caption" >
        API Sponsorship
        </Typography>
        <Typography variant="subtitle2">
        Get Free CoinMarketCap API
        </Typography>
        </CardContent>
    
    }
   

] 