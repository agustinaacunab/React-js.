import react from "react";
import "./ejemplo.css";


const Ejemplo = () => {
    const buttonStyles = {
        backgroundColor: "olive",
        color: "white"
    }
    return(
        <div>
            <h1 className="Pruebadeclase">Bienvenidos</h1>
            <h2 style={{color: "green"}}>Div ejemplo1</h2>
            <button style={buttonStyles}>hola</button>
            <p style={{fontStyle: "italic"}}>Esta es una prueba</p>
        </div>
    );
};


const Ejemplo2 = () => {
    return(
        <div>
            <h3 className="ex1">Esta es una caja con contenido</h3>
            <h4 className="ex2">Vamos haciendo mas Pruebass</h4>
        </div>
    )
}
export default Ejemplo;