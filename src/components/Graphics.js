import React from "react";


function Graphics(props){
    const {state,total} = props
    
    return (
        <div id="Graphics" className="col-start-1 col-end-3 row-start-2 row-end-7 bg-stone-400 flex   flex-col p-4">
            {state.map((element, index)=><p key={index}>{`${element.detalle} ${(100/total*element.precio).toFixed(2)}%`}</p>
            )}
        </div>
    )
}

export default Graphics