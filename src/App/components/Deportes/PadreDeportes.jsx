import { Component } from "react";
import HijoDeporte from "./HijoDeporte";

class PadreDeportes extends Component {
    deportes = ["Futbol", "Baloncesto", "Tenis", "voley"];


    render() {
        return(<div>
            <h1>Padre deportes</h1>
            {
                this.deportes.map((deporte, index) => {
                    return (<HijoDeporte key={index} nombre={deporte} />)
                })
            }
            <h2 style={{backgroundColor: "Yellow", color: "black"}}>
                Su deporte favorito es:
            </h2>
        </div>)
    }
}

export default PadreDeportes;