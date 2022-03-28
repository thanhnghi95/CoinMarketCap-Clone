import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PopUp from './components/PopUp/PopUp';


//Redux
import {  useSelector } from "react-redux";
import { PopUpMode } from './redux/selector/selector';





function App() {
  

  

  const popUp = useSelector(PopUpMode)
  const popUpInitial = popUp.mode
  return (
    <div className='App'>
      <Header popUpInitial={popUpInitial}/>
      {popUpInitial && 
        <PopUp popUpInitial={popUpInitial}/>
      }
      <Home 

      />  
        
    </div>
  );
}

export default App;
