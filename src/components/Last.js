import React from "react";

function Last({state}){
    
    return(
        <div className="col-start-3 col-end-4 row-start-2 row-span-6  overflow-y-scroll bg-stone-200">
            {state.map((element, index) => <p key={index}>{`${element.detalle} costo: ${element.precio}`}</p>)}
        </div>
    )
}

export default Last