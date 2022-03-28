import './DashBoard.scss' 
import Chart from '../Chart/Chart';
import { 
    Button,
    Select,
    MenuItem,
    FormControl,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
  } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PieChartIcon from '@mui/icons-material/PieChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import { useState,useEffect } from 'react';

const DashBoard = () => {
    const [time , setTime] = useState(true)
    const [listCoins , setListCoins] = useState([]);

    useEffect(()=>{
        if(time){
            setTimeout(()=>{
                fetch('https://api.coingecko.com/api/v3/coins')
                    .then(res=>res.json())
                    .then(data=> {
                        setListCoins(data)
            
                    })
                    .catch(err=>console.log(err))
        },1000)
            setTime(!time)
        }else{
            setInterval(()=>{
                fetch('https://api.coingecko.com/api/v3/coins')
                    .then(res=>res.json())
                    .then(data=>setListCoins(data))
                    .catch(err=>console.log(err))
        },600000)
        }
},[time])

    console.log(listCoins)

    const style = {color:'#58667E',background:'#fff',fontSize:'10px',fontWeight:'600'}
    const style2 = {fontSize:'10px',color:'#000',fontWeight:'bold',background:'#EFF2F5'}
    const cryptoContent = [
        {
            name:'Categories',style:style
        },
        {
            name:'Defi',style:style
        },
        {
            name:'NFT',style:style
        },
        {
            name:'Metaverse',style:style
        },
        {
            name:'Polkadot',style:style
        },
        {
            name:'BNB Chain',style:style
        },
        {
            name:'Solana',style:style
        },
        {
            name:'Avalanche',style:style
        },
        
]   
    const [number,setNumber]= useState(10)
    const handleChange = (e)=>{
        e.preventDefault()
        setNumber(e.target.value)
    }
 









    return (
        <div className='dashboard_container'>
            <div className='dashboard_container_header'>
                <div className='dashboard_container_header_first'>
                    <Button 
                        startIcon={<StarBorderIcon/>}
                        size='small'
                        variant='string'
                        sx={{background:'#EFF2F5', justifyContent:'flex-start'}}
                    >
                        Watchlist
                    </Button>
                    <Button 
                        startIcon={<PieChartIcon />}
                        size='small'
                        variant='string'
                        sx={{background:'#EFF2F5', justifyContent:'flex-start'}}
                    >
                        Portfolio
                    </Button>
                </div>
                <div className='dashboard_container_header_second'>
                    <Button 
                        size='small'
                        variant='string'
                        sx={{background:'#F0F6FF',color:'#3861FB'}}
                    >
                        Cryptocurrencies
                    </Button>
                    {cryptoContent.map(button=>(
                        <Button
                            key={button.name}
                            size='small'
                            variant='string'
                            sx={button.style}
                        >
                            {button.name}
                        </Button>
                    ))}
                </div>
                <div className='dashboard_container_header_third'>
                <div style={{display:'flex' ,alignItems:'center',justifyContent:'center'}}>
                    <p style={{fontSize:'15px',color:'#58667E'}}>Show rows</p>
                    <FormControl sx={{ m: 1,width:45 ,fontWeight:600 }}>
                    <Select
                        value={number}
                        onChange={handleChange}
                    >   
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={40}>40</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
    
                    </Select>
                    </FormControl>
                </div>
                    <Button
                        startIcon={<SyncAltIcon/>}
                        sx={style2}
                    >
                        Filters
                    </Button>
                    <Button
                        sx={style2}
                        startIcon={<DashboardIcon/>}
                    >
                        Customize
                    </Button>
                    <Button
                        startIcon={<FormatAlignJustifyIcon sx={{background:'#fff', borderRadius:'10px'}}/>}
                        endIcon={<ViewComfyIcon/>}
                        sx={style2}
                    />
                </div>
            </div>
            <div className='dashboard_container_table'>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><Button variant='string' startIcon={'#'} endIcon={<ArrowDropUpRoundedIcon/>}/></TableCell>
                                <TableCell><Button variant='string' sx={{fontWeight:600 , fontSize:12 , textTransform:'capitalize'}} >Name</Button> </TableCell>
                                <TableCell><Button variant='string' sx={{fontWeight:600 , fontSize:12, textTransform:'capitalize'}} >Price</Button></TableCell>
                                <TableCell><Button variant='string' sx={{fontWeight:600 , fontSize:12, textTransform:'capitalize'}} >24h%</Button></TableCell>
                                <TableCell><Button variant='string' sx={{fontWeight:600 , fontSize:12, textTransform:'capitalize'}} >7d%</Button></TableCell>
                                <TableCell><Button variant='string' sx={{fontWeight:600 , fontSize:12, textTransform:'capitalize'}} >Market Cap</Button></TableCell>
                                <TableCell><Button variant='string' sx={{fontWeight:600 , fontSize:12, textTransform:'capitalize'}} >Volume(24h)</Button></TableCell>
                                <TableCell><Button variant='string' sx={{fontWeight:600 , fontSize:12, textTransform:'capitalize'}} >Circulating Supply</Button></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        { listCoins.map( (coin,index) =>(
                          index < number ? <Chart  key={coin.id} listCoins={listCoins} coin={coin}/> : null
                        ))
                        }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
      );
}
 
export default DashBoard;