import './Chart.scss'
import { 
  Button,
  TableCell,
  TableRow,
  LinearProgress,

} from '@mui/material';
import StarBorderSharpIcon from '@mui/icons-material/StarBorderSharp';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';






const Chart = ({listCoins , coin}) => {
    const [star , setStar] = useState('');
    const handleStar = () =>{
      for(let i=0; i < listCoins.length-1;  i++ ){
        if(coin.id ===listCoins[i].id){
          setStar(coin.id)
          break
        }
      }
      if(coin.id===star){
        setStar('')
      }
  }

    return (
 
         
            <TableRow key={coin.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
                <Button
                  sx={star === coin.id ? {color:'yellow'}  : {color:'rgb(88,102,126)'} }
                  startIcon={<StarBorderSharpIcon />}
                  onClick={handleStar} 
                >
                  {coin.market_data.market_cap_rank}
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  sx={{color:'rgb(128,138,157)'}}
                  startIcon={ <Button 
                                sx=
                                {{color:'#000',fontSize:'15px !important', fontWeight:600,textTransform:'Capitalize'}}
                                startIcon={<img alt='' src={coin.image.thumb}/>}>
                                      {coin.name}
                              </Button> }
                  endIcon={<Button variant="text" sx={{fontWeight:600 ,width:'5px',background:'#F0F6FF',textTransform:'Capitalize'}}>Buy</Button>}
                >
                  {coin.symbol}
                </Button>
              </TableCell>
              <TableCell> <b>${coin.market_data.current_price.usd}</b></TableCell>

              <TableCell>
                    {
                      coin.market_data.price_change_percentage_24h.toString() > 0 
                      ?
                        <Button
                            sx={{color:'green'}}
                            startIcon={
                              <ArrowDropUpIcon sx={{color:'green'}}/>
                            }
                        >
                         <b> {coin.market_data.market_cap_change_percentage_24h}</b>
                        </Button>
                      
                        :
                      
                        <Button
                            sx={{color:'red'}}
                            startIcon={
                              <ArrowDropDownIcon sx={{color:'red'}}/>
                            }
                        >
                        {coin.market_data.market_cap_change_percentage_24h}
                        </Button>
                      
                    }
              </TableCell>

              <TableCell>

               {
                      coin.market_data.price_change_percentage_7d > 0 
                      ?
                        <Button
                            sx={{color:'green'}}
                            startIcon={
                              <ArrowDropUpIcon sx={{color:'green'}}/>
                            }
                        >
                          <b>{coin.market_data.price_change_percentage_7d}</b>
                        </Button>
                      
                        :
                      
                        <Button
                            sx={{color:'red'}}
                            startIcon={
                              <ArrowDropDownIcon sx={{color:'red'}}/>
                            }
                        >
                        {coin.market_data.price_change_percentage_7d}
                        </Button>
                      
                    }
              </TableCell>

              <TableCell><b> ${coin.market_data.market_cap.usd}</b></TableCell>
              <TableCell>
                <div>
                  <b>${coin.market_data.total_volume.usd}</b>
                  <p style={{color:'#7F899C'}}>{coin.market_data.total_volume.btc} &nbsp; {coin.symbol.toUpperCase()}</p>
                </div>
              </TableCell>

              <TableCell>
              <div style={{display:'flex'}}>
                  <b>{coin.market_data.circulating_supply}</b> &nbsp;
                  <b >{coin.symbol.toUpperCase()}</b>
              </div>
           
                {coin.market_data.total_supply === null || parseInt(coin.market_data.total_supply) === parseInt(coin.market_data.circulating_supply)  
                ?
                null
                :
                <LinearProgress variant="determinate" 
                  value={(parseInt(coin.market_data.circulating_supply)/parseInt(coin.market_data.total_supply))*100}
                />
                }
              </TableCell>
              <TableCell>Chart</TableCell>

            </TableRow>
  

    );
}
 
export default Chart;