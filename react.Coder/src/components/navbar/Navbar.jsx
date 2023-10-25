import React from "react";
import "./navbar.css"
import Carwidget from "../carwidget/Carwidget";




const Navbar = ({links}) => {

    console.log (links)

        
        
  return (
    <>
       <nav>
        <h1>Bienvenidos a la primera Pre entrega de mi E-Commerce</h1>
        <ul>
            <li><a href="#">Caterings</a></li>
            <li><a href="#">Tortas</a></li>
            <li><a href="#">Macarons</a></li>
        </ul>
        <Carwidget/>
      </nav>
      </>
    
  )
}


export default Navbar