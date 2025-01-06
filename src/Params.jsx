import React from 'react'
import { useParams } from 'react-router-dom'
const Params = () => {
    let {id}=useParams();

  return (
    <div>Params
        <h1>Params</h1>
        <h2>{id}</h2>
    </div>
  )
}

export default Params