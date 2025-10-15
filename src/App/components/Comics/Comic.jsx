import { Component } from "react";

class Comic extends Component {


    render() {
        return(<div>
            <h4 style={{color: "blue"}}>
                {this.props.comic.titulo}
            </h4>
            <p>{this.props.comic.descripcion}</p>
            <img 
                src={this.props.comic.imagen} 
                alt={this.props.comic.titulo}
                style={{width: "200px"}} 
            />
            <br/>
            <button onClick={() => {
                this.props.seleccionarFavorito(this.props.comic)
            }}>
                Marcar como favorito
            </button>
            <button onClick={() => {
                var index = parseInt(this.props.index)
                this.props.deleteComic(index)
            }}>
                Eliminar comic
            </button>
        </div>)
    }
}

export default Comic;