import { Component } from "react";

//PODEMOS DECLARAR METODOS FUERA DE LA CLASE
//DICHOS METODOS NO PUEDEN UTILIZAR NADA DEL COMPONENT

function metodoAbsurdo() {
  console.log("Método sin funcionalidad");
}
class Contador extends Component {
  //LAS VARIABLES SE DECLARAN A NIVEL DE CLASE
  //NO SE UTILIZAN PALABRAS COMO var, let O const
  numero = 1;
  //CON LOS METODOS SUCEDE EXACTAMENTE LO MISMO, SOLO
  //LA DECLARACION
  incrementarNumero = () => {
    //PARA ACCEDER A LAS VARIABLES DE CLASE, DEBEMOS UTILIZAR
    //LA PALABRA CLAVE this
    this.numero += 1;
    console.log("Valor de número: " + this.numero);
  };

  //LAS VARIABLES STATE SON DECLARADAS EN EL OBJETO DE LA CLASE
  state = {
    valor: parseInt(this.props.inicio),
  };

  incrementarValor = () => {
    //EN SETSTATE SE MODIFICAN OBJETOS CON SU KEY Y SU VALUE
    this.setState({
      valor: this.state.valor + 1,
    });
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "blue" }}>
          Ejemplo Contador JSX {this.props.inicio}
        </h1>
        <h3 style={{ color: "red" }}>Valor: {this.state.valor}</h3>
        <button onClick={this.incrementarValor}>Incrementar valor</button><br/>
        {/* LA LLAMADA A LOS METODOS SE REALIZA CON this
      Y NO SE UTILIZA NI LAMBDA NI PARENTESIS*/}
        <button onClick={this.incrementarNumero}>Incrementar número</button>
        <br />
        {/* TENEMOS MULTIPLES FORMAS DE REALIZAR LLAMADAS */}
        <button
          onClick={() => {
            //CODIGO JSX
            //SI ES EXTERNO, NO LLEVA this
            metodoAbsurdo();
            this.incrementarNumero();
          }}
        >
          {/* Otra sintaxis con función anonima Lambda */}
          Funcion absurda con lambda
        </button>
      </div>
    );
  }
}

export default Contador;
