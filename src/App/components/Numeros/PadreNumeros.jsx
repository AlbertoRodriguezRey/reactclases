import { Component } from "react";
import HijoNumero from "./HijoNumero";

class PadreNumeros extends Component {
    //NECESITAMOS UNA VARIABLE STATE PARA VISUALIZAR 
    //EL SUMATORIO 
    
    state = {
        numeros: [5, 7],
        //DEPENDIENDO DE SI EL VALOR SUMATORIO ES UNA CADENA O UN NUMERO
        //LA SUMA SE REALIZARA DE FORMA CONCATENADA O MATEMATICA
        sumatorio: 0
    }
    //DEBEMOS TENER UN METODO QUE SEA INVOCADO POR EL HIJO
    //AL PULSAR SOBRE EL BOTON DE SELECCIONAR

    mostrarSumatorio = (numeroSeleccionado) => {
        this.setState({
            sumatorio: numeroSeleccionado + this.state.sumatorio
        })
    }

    //METODO mostrarSumatorio OPTIMIZADO POR LA IA
    //SE UTILIZA PARA EVITAR PROBLEMAS DE ASINCRONISMO
    //Y ASEGURAR QUE SE UTILIZA EL VALOR MAS ACTUALIZADO
    //mostrarSumatorio = (numeroSeleccionado) => {
    //    this.setState(prevState => ({
    //        sumatorio: prevState.sumatorio + numeroSeleccionado
    //    }));
    //}

    limpiarMarcador = () => {
        this.setState({
            sumatorio: 0
        })
    }

    generarNumero = () => {
        let aleatorio = parseInt(Math.random() * 50) + 1;
        this.state.numeros.push(aleatorio);
        this.setState({
            numeros: this.state.numeros
        })
    }

    render() {
        return(<div>
            <h1>Padre Números</h1>
            <h4 style={{backgroundColor: "yellow", color:"black"}}>
                La suma es {this.state.sumatorio}
            </h4>
            <button onClick={this.limpiarMarcador}>Limpiar marcador</button>
            <button onClick={this.generarNumero}>Generar número</button>
            <h3 style={{backgroundColor: "lightblue", color: "black"}}>
                El juego es quedarse mas cerca de sumar 100
            </h3>
            {
                this.state.numeros.map((numero, index) => {
                    return (<HijoNumero key={index} numero={numero}
                    mostrarSumatorio={this.mostrarSumatorio} />
                    )
                })
            }
        </div>)
    }
}

export default PadreNumeros;