
import './App.css';
import React,{useState} from 'react';
import Form from './components/Form';
import Graphics from './components/Graphics';
import Last from './components/Last';

function App() {
  const[state, setState] = useState([{detalle: "Cigarrillos", precio:600}, {detalle: "Galletitas", precio: 470}])
  const[total, setTotal] = useState(1070)
  const manejarCambio = (gasto) => {
    const nuevo = [...state, gasto]
    const nuevoTotal = total + gasto.precio
    setState(nuevo)
    setTotal(nuevoTotal)
  }

  const appstyle = {
    width:'100vw',
    height:'100vh',
  
    boxSizing:"border-box"
  }
  return (
    <div className="App bg-indigo-200  grid grid-cols-3  grid-rows-7 gap-4 p-4" style={appstyle}>
      <h1 className='bg-red-200 text-lime-500 col-start-1 col-end-4 row-start-1 row-end-2'>Finanzas -Caja Personal</h1>
      <Graphics state={state} total={total}/>
      <Last state={state}/>
      <Form onSubmit={manejarCambio}/>
    </div>
  );
}

export default App;
