import React from "react";


function Graphics(props){
    const asd = props.groups
   console.log(asd)

    let t = 0
    const total = asd.map((element)=>{return t+=element.total})
    console.log(total)
    console.log(t)
    
    return (
        <div id="Graphics" className="col-start-1 col-end-3 row-start-2 row-end-7 bg-stone-400 flex   flex-col p-4 gap-4">
            {asd.map((element, index)=><p key={index} className='bg-cyan-200' >{`${element.detalle} ${(100/t*element.total).toFixed(2)}%`}</p>
            )}
        </div>
    )
}

export default Graphics