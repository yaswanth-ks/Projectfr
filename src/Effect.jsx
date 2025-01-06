import React from 'react'
import { useState ,useEffect} from 'react'
const Effect = () => {
    let [count, setCount] = useState(0)
    useEffect(() => {
      console.log('Value Updated')
      
    },[count])
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    )
}

export default Effect