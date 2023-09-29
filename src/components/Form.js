import React from "react";

function Form(props){
    const data = e =>{
        e.preventDefault()
        const detalle = document.getElementById('detalle').value
        const precio = document.getElementById('gasto').value

        const ob = {
            detalle: detalle,
            precio: parseInt(precio)
        }
        
        props.onSubmit(ob)

        document.getElementById('detalle').value = ""
        document.getElementById('gasto').value = ""
    }
    return(
        <form className="bg-violet-500 col-start-1 col-end-3 row-start-7 row-span-1 space-x-4 flex justify-center items-center" id="form" onSubmit={data}>
            <input placeholder="Detalle gasto" id="detalle" className="input h-10"></input>
            <input placeholder="Monto" id='gasto' className="input h-10"></input>
            <button className="bg-white px-2 h-10" >Actualizar</button>
        </form>
    )
}

export default Form