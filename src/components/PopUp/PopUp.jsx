import { Container,
        AppBar,
        Box,
        Toolbar,
        Typography,
        InputBase,
        Grid,
        Paper,
        
} 
from '@mui/material';
import './PopUp.scss'
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { popularCur,Bitcoin,fiatCurrencies,cryptocurrencies } from '../../data/Currencies';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { useState } from 'react';

// Redux:
import { SetPopUp } from '../../redux/action/action';
import { useDispatch , useSelector } from "react-redux";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'rgb(239,242,245)',
    '&:hover': {
      backgroundColor: 'rgb(239,242,245)',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  

const PopUp = ({popUpInitial}) => {
    const dispatch = useDispatch()
    const handlePopUp = () =>{
      dispatch(SetPopUp(!popUpInitial))
    } 
    const [input, setInput] = useState('');
    const handleInput = (e) =>{
      setInput(e.target.value)
      console.log(input)
    }
 
    return (
          <Container 
            sx={{
              position:'fixed',
              top:'50%',
              right:'50%',
              transform:' translate(50%,-50%)',
              zIndex: 1000,
              backdropFilter: 'blur(20px)',
              width: '800px',
              height: 'auto',
              borderRadius: '30px',
              boxShadow:'0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);'
            }}
          >         
            <CloseIcon sx={{float:'right', color:'#A6B0C3',cursor:'pointer'}} onClick={handlePopUp}/>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color='transparent'>
                    <Toolbar>
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                            Select Currency
                        </Typography>
               
                    </Toolbar>
                </AppBar>
            </Box>
            <Box>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={handleInput}
                    />
                </Search>
            </Box>
            <Container sx={{maxHeight:'500px',overflow:'auto'}}>
              <Container>
                <Typography sx={{color:'#A9BFDA' , marginBottom:'10px'}} variant="body2" display="block" gutterBottom>Popular currencies </Typography>
                <Grid container spacing={2} columns={12}>
                  {popularCur.map(e => (
                    <Grid item xs={3} key={e.name}>
                      <Paper sx={{ height:'55px',display:'flex',alignItems:'center',justifyContent:'space-around'}}>
                      {e.icon}
                      <div style={{float:'left'}}>
                        <Typography sx={{fontSize:'10px', fontWeight:'600'}}>{e.name}</Typography>
                        <Typography variant="caption" gutterBottom>{e.symbol}</Typography>
                      </div>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Container>
              <Container>
                <Typography sx={{color:'#A9BFDA' , marginBottom:'10px'}} variant="body2" display="block" gutterBottom>Bitcoin units</Typography>
                <Grid container spacing={2} columns={12}>
                  {Bitcoin.map(e=>(
                    <Grid item xs={3} key={e.name}>
                    <Paper sx={{ height:'55px',display:'flex',alignItems:'center',justifyContent:'space-around'}}>
                      {e.icon} 
                      <div style={{float:'left'}}>
                        <Typography sx={{fontSize:'10px', fontWeight:'600'}}>{e.name}</Typography>
                        <Typography variant="caption" gutterBottom>{e.symbol}</Typography>
                      </div>
                    </Paper>
                  </Grid>
                  ))}
                  

              </Grid>
              </Container>
              <Container>
                <Typography sx={{color:'#A9BFDA' , marginBottom:'10px'}} variant="body2" display="block" gutterBottom>Fiat Currencies</Typography>
                <Grid container spacing={2} columns={12}>
                  {fiatCurrencies.map(e=>(
                    <Grid item xs={3} key={e.name}>
                    <Paper sx={{ height:'55px',display:'flex',alignItems:'center',justifyContent:'space-around'}}>
                      {e.icon} 
                      <div style={{float:'left'}}>
                        <Typography sx={{fontSize:'10px', fontWeight:'600'}}>{e.name}</Typography>
                        <Typography variant="caption" gutterBottom>{e.symbol}</Typography>
                      </div>
                    </Paper>
                  </Grid>
                  ))}
                </Grid>
              </Container>
              <Container>
                <Typography sx={{color:'#A9BFDA' , marginBottom:'10px'}} variant="body2" display="block" gutterBottom>Cryptocurrencies</Typography>
                <Grid container spacing={2} columns={12}>
                  {cryptocurrencies.map(e=>(
                    <Grid item xs={3} key={e.name}>
                    <Paper sx={{ height:'55px',display:'flex',alignItems:'center',justifyContent:'space-around'}}>
                      {e.icon} 
                      <div style={{float:'left'}}>
                        <Typography sx={{fontSize:'10px', fontWeight:'600'}}>{e.name}</Typography>
                        <Typography variant="caption" gutterBottom>{e.symbol}</Typography>
                      </div>
                    </Paper>
                  </Grid>
                  ))}
                </Grid>
              </Container>
            </Container>
        </Container>
   
      );
}
 
export default PopUp;