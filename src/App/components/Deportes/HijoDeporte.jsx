import { Component } from "react";

class HijoDeporte extends Component {
    state = {
        favorito: ""
    }

    mostrarFavorito = () => {
        this.setState({
            favorito: this.props.nombre
        })
    }

    render() {
        return(<div>
            <h3 style={{color: "blue"}}>Deporte: {this.props.nombre}</h3>
            <button onClick={this.mostrarFavorito}>
                Seleccionar favorito
            </button>
        </div>)
    }
}

export default HijoDeporte;