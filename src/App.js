
import './App.css';
import React,{useState} from 'react';
import Form from './components/Form';
import Graphics from './components/Graphics';
import Last from './components/Last';

function App() {

  if(!localStorage.getItem('db')){
    localStorage.setItem('db',[])
  } 

  let getStorage = localStorage.getItem('db')
  let pars = JSON.parse(getStorage)
  
  
  
  const[state, setState] = useState(pars)

  const[groups, setGroups] = useState('')

  const resultado = pars.reduce((acc, currentItem) => {
    const existingItem = acc.find(item => item.detalle === currentItem.detalle);

    if (existingItem) {
        existingItem.total += currentItem.precio;
    } else {
        acc.push({
            detalle: currentItem.detalle,
            precio: currentItem.precio,
            total: currentItem.precio
        });
    }

    return acc;
}, []);



 

  
  
  const manejarCambio = (gasto) => {
    const nuevo = [...state, gasto]
    setState(nuevo)
    setGroups(resultado)
    localStorage.setItem("db", JSON.stringify(nuevo))
  }

  const appstyle = {
    width:'100vw',
    height:'100vh',
  
    boxSizing:"border-box"
  }
  return (
    <div className="App bg-indigo-200  grid grid-cols-3  grid-rows-7 gap-4 p-4" style={appstyle} >
      <h1 className='bg-red-200 text-lime-500 col-start-1 col-end-4 row-start-1 row-end-2'>Finanzas -Caja Personal</h1>
      <Graphics groups={resultado}/>
      <Last state={state}/>
      <Form onSubmit={manejarCambio}/>
    </div>
  );
}

export default App;
