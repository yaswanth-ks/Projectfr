import { useState } from "react";
function Name()
{
    let [name, setName] = useState(0)
    return (
        <>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <h1>{name}</h1> 
        </>
    )
}
export default Name
