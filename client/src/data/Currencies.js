import PaidIcon from '@mui/icons-material/Paid';
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { FaEthereum } from "@react-icons/all-files/fa/FaEthereum";
import ReactCountryFlag from "react-country-flag"

export const popularCur = [
    {
       name:'United States Dollar' ,
       symbol:'USD - $',
       icon:<PaidIcon
                sx={{width:'20px',height:'20px',color:'green'}}
           />,
    },
    {
        name:'EURO' ,
        symbol:'EUR - $',
        icon:<EuroSymbolIcon
                sx={{width:'20px',height:'20px',color:'#3861FB'}}
            />,
    },
     {
        name:'Pound Sterling' ,
        symbol:'GBP - $',
        icon:<CurrencyPoundIcon
                sx={{width:'20px',height:'20px',color:'red'}}
        />,

     },
     {
        name:'Bitcoin' ,
        symbol:'BTC',
        icon:<CurrencyBitcoinIcon
            sx={{width:'20px',height:'20px',color:'yellow'}}
        />,
     },
     {
        name:'Etherum' ,
        symbol:'ETH',
        icon:<FaEthereum
            sx={{width:'20px',height:'20px',color:'yellow'}}
        />
     },
]
export const Bitcoin=[
    {
        name:'Bits' ,
        symbol:'BITS',
        icon:<CurrencyBitcoinIcon
                 sx={{width:'20px',height:'20px',color:'yellow'}}
            />,
     },
     {
        name:'Satoshi' ,
        symbol:'SATS',
        icon:<CurrencyBitcoinIcon
                 sx={{width:'20px',height:'20px',color:'yellow'}}
            />,
     },
]
export const fiatCurrencies = [
    {
        name:'United States Dollar' ,
        symbol:'USD - $',
        icon:<PaidIcon
                sx={{width:'20px',height:'20px',color:'green'}}
            />,
     },
     {
         name:'EURO' ,
         symbol:'EUR - $',
         icon:<EuroSymbolIcon
                sx={{width:'20px',height:'20px',color:'#3861FB'}}
             />,
     },
      {
         name:'Pound Sterling' ,
         symbol:'GBP - $',
         icon:<CurrencyPoundIcon
                sx={{width:'20px',height:'20px',color:'red'}}
         />,
 
      },
      {
        name:'China' ,
        symbol:'CN - $',
        icon:<ReactCountryFlag
                countryCode='CN'
                sx={{width:'20px',height:'20px',color:'red'}}
                svg
            />,
     },
     {
         name:'Việt Nam' ,
         symbol:'VND',
         icon:<ReactCountryFlag
                countryCode='VN'
                sx={{width:'20px',height:'20px',color:'red'}}
                svg
            />,
     },
      {
         name:'Canada' ,
         symbol:'CAD',
         icon:<ReactCountryFlag
         countryCode='CA'
         sx={{width:'20px',height:'20px'}}
         svg
     />,
 
      },
      {
        name:'FRACE' ,
        symbol:'FR',
        icon:<ReactCountryFlag
        countryCode='FR'
        sx={{width:'20px',height:'20px'}}
        svg
    />,
     },
     {
         name:'Japanese' ,
         symbol:'JPY',
         icon:<ReactCountryFlag
         countryCode='JP'
         sx={{width:'20px',height:'20px'}}
         svg
     />,
     },
      {
         name:'KOREA' ,
         symbol:'KR',
         icon:<ReactCountryFlag
                countryCode='KR'
                sx={{width:'20px',height:'20px',color:'red'}}
                svg
            />,
 
      },
      {
        name:'Finland' ,
        symbol:'FI',
        icon:<ReactCountryFlag
        countryCode='FI'
        sx={{width:'20px',height:'20px',color:'red'}}
        svg
    />,
     },
     {
         name:'Singapore' ,
         symbol:'SGD',
         icon:<ReactCountryFlag
         countryCode='SI'
         sx={{width:'20px',height:'20px',color:'red'}}
         svg
     />,
     },
      {
         name:'New Zealand' ,
         symbol:'NZD',
         icon:<ReactCountryFlag
                countryCode='NZ'
                sx={{width:'20px',height:'20px',color:'red'}}
                svg
            />,
 
      },
      {
        name:'Australia' ,
        symbol:'AUD',
        icon:<ReactCountryFlag
                countryCode='AU'
                sx={{width:'20px',height:'20px'}}
                svg
            />,
     },
     {
         name:'Mexico' ,
         symbol:'MXN',
         icon:<ReactCountryFlag
                countryCode='ME'
                sx={{width:'20px',height:'20px',color:'red'}}
                svg
            />,
     },
      {
         name:'Thailand' ,
         symbol:'THB',
         icon:<ReactCountryFlag
                countryCode='TH'
                sx={{width:'20px',height:'20px',color:'red'}}
                svg
            />,
 
      },
      {
        name:'Laos' ,
        symbol:'LA',
        icon:<ReactCountryFlag
        countryCode='LA'
        sx={{width:'20px',height:'20px',color:'red'}}
        svg
    />,
     },
     {
         name:'Indonesian Rupiah' ,
         symbol:'IDR',
         icon:<ReactCountryFlag
         countryCode='IN'
         sx={{width:'20px',height:'20px',color:'red'}}
         svg
     />,
     },
      {
         name:'Egyptian Pound' ,
         symbol:'EGP - EGP',
         icon:<ReactCountryFlag
         countryCode='EG'
         sx={{width:'20px',height:'20px'}}
         svg
     />,
 
      },
      {
        name:'Bulgarian Lev' ,
        symbol:'BGN - BGN',
        icon:<ReactCountryFlag
        countryCode='BG'
        sx={{width:'20px',height:'20px'}}
        svg
    />,

     },
     {
        name:'Cambodia' ,
        symbol:'CAB',
        icon:<ReactCountryFlag
        countryCode='CA'
        sx={{width:'20px',height:'20px'}}
        svg
    />,

     },
     {
        name:'Turkish Lira' ,
        symbol:'TRY',
        icon:<ReactCountryFlag
        countryCode='TK'
        sx={{width:'20px',height:'20px'}}
        svg
    />,

     },
]
export const cryptocurrencies=[
    {
        name:'Bitcoin' ,
        symbol:'BTC',
        icon:<CurrencyBitcoinIcon
 
               sx={{width:'20px',height:'20px',color:'yellow'}}
  
           />,
    },
    {
        name:'Etherum' ,
        symbol:'ETH',
        icon:<FaEthereum
 
               sx={{width:'20px',height:'20px',color:'black'}}
  
           />,
    },
]