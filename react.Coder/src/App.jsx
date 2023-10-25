import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Ejemplo from './components/ejemplo'
import './App.css'

import ItemListContainer from './components/Itemlistcontainer/ItemListContainer'
import Count from "./components/count/Count"
import Navbar from "./components/navbar/Navbar"



const enlaces =[
  "inicio",
  "acerca de",
  "servicios",
  "Tienda"
  ]
  
  const greeting = "Bienvenidos a Lu Aguilar pasteleria E-commerce. Aqui encontraras tus favoritos para que lleguen a la puerta de tu casa"
function App() {
  
    

  return (
    <>
    <Navbar links ={enlaces}/>
    <Ejemplo></Ejemplo>
    <ItemListContainer bienvenida={greeting}/>

    
     
    </>
  )
}

export default App
