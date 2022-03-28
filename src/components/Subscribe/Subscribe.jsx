import './Subscribe.scss'
import { Button, TextField } from '@mui/material';

const Subscribe = () => {
    return (
        <div className='subscribe'>
            <div className='subscribe_contain'>
                <div className='subscribe_contain_text'>
                    <p style={{fontSize:'30px'}}>Be the first to know about <b>crypto news every day</b></p>
                    <p  style={{fontSize:'20px'}}>Get crypto analysis, news and updates right to your inbox! Sign up here so you don't miss a single newsletter.</p>
                </div>
                <div className='subscribe_contain_box'>
                    <TextField sx={{width:'310px', height:'50px'}} id="outlined-basic" label="Enter your email address" variant="outlined" />
                    <Button sx={{marginLeft:'10px',width:'310px', height:'50px'}} variant="contained">Subscribe now</Button>
                </div>
            </div>
        </div>
      );
}
 
export default Subscribe;