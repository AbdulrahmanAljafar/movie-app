import logo from './logo.svg';
import One from "./Onecard"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import json from './movie.json'
import axios from "axios";
import { CardGroup, Card, Col,Row } from 'react-bootstrap';
import React, { useState, useEffect } from "react";


function App() {
  console.log(json)
  let cards = json.map((item,i)=>{
    return <One key={i} item={item} />
  })



  return (
    <div className="App">
     <div style={{margin: "auto", padding: "20px"}} className="row d-flex container">
     {cards}

     </div>
        
       
    
     
       
    </div>
  );
}

export default App;
