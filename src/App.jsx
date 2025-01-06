 import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Aboutus from './Aboutus'
import Home from './Home'
import Contact from './Contact'
import './App.css'
import Params from './Params'
function App() {
  return (
    <Router>
      <nav>
        <div>
        <h1><Link to="/">Yaswanth</Link></h1>
        </div>
        <ol>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ol>
      </nav>
<Routes>
  <Route path="/" element={<Home/>}/>
   <Route path="/aboutus" element={<Aboutus/>}/>
   <Route path="/contact" element={<Contact/>}/>
   <Route path="/Params/:id" element={<Params/>}/>
 </Routes>
 <footer>
         <p>&copy; 2023 Yaswanth. All rights reserved.</p> 
 </footer>
       </Router>

  )
}
// import React, { createContext, useState } from "react";
// import Hen from "./Hen";


// export let nameContext=createContext();

// function App(){

//     let [colour,setColour]=useState("black");
//     let [bg,setBg]=useState("white")

//     function name(){
//       setColour(colour==="black"? "white": "black")
//       setBg(bg==="white"? "Black" : "white")
//     }
   
//     return(
//       <>
//       <nameContext.Provider value={{colour,bg}}>
//         <Hen></Hen>
//         <button onClick={name}>Click</button>
//       </nameContext.Provider>
//       </>
//     )
// }




export default App;
