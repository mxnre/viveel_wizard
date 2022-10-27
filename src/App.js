import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './page/Home/Home';
import Symbol from './page/Symbol/Symbol';
import  Distribution from './page/Distribution/Distribution';
import Chain from './page/Chain/Chain';
import Resume from './page/Resume/Resume';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
       <Routes>
        <Route exact path ='/' element = {<Home/>}/>
        <Route exact path = '/symbol' element ={<Symbol/>}/>
        <Route exact path = '/distribution' element ={<Distribution/>}/>
        <Route exact path = '/chain' element ={<Chain/>}/>
        <Route exact path = '/resume' element ={<Resume/>}/>
       </Routes>
      </div>
    </Router>
    
  );
}

export default App;
