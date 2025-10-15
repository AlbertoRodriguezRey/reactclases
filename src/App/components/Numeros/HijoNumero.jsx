import { Component } from "react";

class HijoNumero extends Component {
    sumarNumeros = () => {
        //CAPTURAMOS EL NUMERO DEL PROPIO COMPONENT EN PROPS
        var numero = parseInt(this.props.numero);
        //REALIZAMOS LA PETICION AL PARENT
        this.props.mostrarSumatorio(numero);
        
    }

    render() {
        return(<div>
            <h3 style={{color: "red"}}>Número: {this.props.numero}</h3>
            <button onClick={this.sumarNumeros}>
                Sumar {this.props.numero}
            </button>
        </div>)
    }
}

export default HijoNumero;