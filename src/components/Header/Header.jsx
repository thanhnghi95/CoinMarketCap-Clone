import './Header.scss';

import { styled} from '@mui/system';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PaidIcon from '@mui/icons-material/Paid';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DiamondIcon from '@mui/icons-material/Diamond';
import SearchIcon from '@mui/icons-material/Search';
import { Button, InputBase } from '@mui/material';
import * as React from 'react';

// Redux:
import { SetPopUp } from '../../redux/action/action';
import { useDispatch } from "react-redux";


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '50px',
    backgroundColor: '#EFF2F5',
    '&:hover': {
      backgroundColor: '#EFF2F5',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
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
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: '0.5s',
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '9ch',
        '&:focus': {
          width: '9ch',
        },
      },
    },
  }));
const Header = ({popUpInitial}) => {

    const dispatch = useDispatch()
    const handlePopUp = ()=>{
      dispatch(SetPopUp(!popUpInitial))
    }

    return (
        <nav className='header'>   
           <div className='content'>
                <div className='wraper'>
              
                    <div className='form'>
                        <div className='button lang'>
                        
                        </div>
                        <div className='button currency'>
                            <Button
                              startIcon={<PaidIcon sx={{color:'rgb(22,199,132)'}}/>}
                              endIcon={<ArrowDropDownIcon sx={{color:'#000'}}/>}
                              sx={{color:'#000', fontWeight:600 , fontSize:'15px'}}
                              onClick={handlePopUp}
                            > 
                              USD
                            </Button>
                        </div>
                        <div className='button mode'>
                            <DarkModeIcon/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='menu'>
                <div className='box'>
                    <div className='combo_box'>
                        <div className='image_box'>
                            <img src="./assets/img/Logo.svg" alt="" />
                            <p>CoinMarketCap</p>
                        </div>
                        <div className='content_box'>
                            <p>Cryptocurrencies</p>
                            <p>Exchanges</p>
                            <p>NFT</p>
                            <p>Cryptown</p>
                            <p>Portfolio</p>
                            <p>Watchlist</p>
                            <p>Products</p>
                            <p>Learn</p>
                        </div>
                        <div className='form_box'>
                            <div className='diamond comboBox'>
                                <DiamondIcon
                                    color='primary'
                                />
                            </div>
                            <div className='login comboBox'>
                                <p>Login</p>
                            </div>
                            <div className='register comboBox'>
                                <p>Sign up</p>
                            </div>
                            <div className='search comboBox'>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
           
        </nav>
        
      );
}
 
export default Header;