import React from 'react';
import FirstScreen from './Compnents/screen1';
import SecondScreen from './Compnents/screen2';

import 'reactstrap/dist/reactstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button}from 'reactstrap';

import {

  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect

} from "react-router-dom";




function App() {

  return (
     <Router>
      <Switch>

        <Route exact path="/screen1" component={FirstScreen}/>
        <Route exact path="/screen2" component={SecondScreen}/>
        <Redirect to="/screen2"/>
        <Redirect to="/screen1"/>

        </Switch>
     </Router>






  );
}

export default App;
