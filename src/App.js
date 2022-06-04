import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Router from './Router';
// import {Redirect, Route, Switch} from 'react-router-dom'



function App() {
  return (
    
    <div>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>
  )
}

export default App
