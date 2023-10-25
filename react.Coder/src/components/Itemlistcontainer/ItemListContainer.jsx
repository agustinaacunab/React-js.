import React from "react";
import Count from "../count/Count"


const ItemListContainer = ({bienvenida}) => {
return (
    <>
    <h1>{bienvenida}</h1>
<Count initial={1} stock={10}/>
    </>

)
}

export default ItemListContainer

