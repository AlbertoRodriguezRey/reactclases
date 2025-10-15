import logo from '../logo.svg';
import './App.css';
import PadreDeportes from './components/Deportes/PadreDeportes';
// import DibujosComplejosRender from './components/Dibujos/DibujosComplejosRender';
// import Contador from './components/Contador';
// import DibujosComplejos from './components/DibujosComplejos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PadreDeportes />
        {/* <DibujosComplejosRender /> */}
        {/* <DibujosComplejos /> */}
        {/* <Contador inicio="4" />
        <Contador inicio="9" /> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
