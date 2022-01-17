import React,{useState} from "react";

import "./App.css";
import Header from "./Header";
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(
      <Router>
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      </Router>
    )

}

export default App;