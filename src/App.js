import React  from 'react';
import './App.css';
import 'whatwg-fetch';
import {BrowserRouter} from 'react-router-dom';
import Main from './components/Main/MainComponent';

const App =()=>{
  return (
    <BrowserRouter>
      <div className="App">
        <Main/>
      </div>
    </BrowserRouter>
  );
}



export default App;
