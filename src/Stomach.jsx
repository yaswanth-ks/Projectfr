import { useContext } from "react";
import { nameContext } from "./App";
function Stomach(){
   
    let name=useContext(nameContext)
    let {bg,colour}=useContext(nameContext)
    return(
        <div>
            <h1 style={{border:"2px solid black", display:"inline", color:colour, backgroundColor:bg}}>Stomach</h1>
        </div>
    )
}


export default Stomach;