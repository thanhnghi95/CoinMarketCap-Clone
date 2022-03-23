import './App.css';
import io from 'socket.io-client'
import {ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PopUp from './components/PopUp/PopUp';



// const socket = io.connect('http://localhost:3001')

function App() {
  const [popUp , setPopUp ] = useState(false) 
  return (
    <div className='App'>
      <Header popUp={popUp} setPopUp={setPopUp}/>
      {popUp && 
        <PopUp setPopUp={setPopUp} 

        />
      }
      <Home/>
    </div>
  );
}

export default App;
