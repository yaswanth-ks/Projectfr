 
/*function Useref() {
    let [count, setCount] = React.useState(0)
    let countRef = React.useRef(0)

    let increment = () => {
        setCount(count + 1)
        countRef.current = countRef.current + 1

        // console.log('State:', count)
        console.log('Ref:', countRef.current)
    }
    return (
        <div>
          <h1>Count: {countRef.current}</h1>
          <button onClick={increment}>Increment</button>
        </div>
      )
}
import React, { useEffect , useState , useRef} from 'react'
import img from "./images.jpeg"
const Useref = () => 
    {

    const[count, setCount] = useState("");
function handle(e) {
        setCount(e.target.value);
      }
      
      useEffect(() => {
         console.log(count)
      },[count])
        return (
          <>
          <label >name:</label>
        <input type="text" value={count} onChange={handle}/>
        <p>
            {count && (
              <img src={img} alt="#" />
            )}
        </p>

    </>
        )
}*/
export default Useref