import { useState } from 'react'

function countInital() {
    console.log("run function");
    return 4
}

export default function UseState() {

    // useState v1
    // const [count, setCount] = useState(0)

    // useState v2
    // const [count, setCount] = useState(() => {
    //     console.log("run function");
    //     return 4
    // })

    // using countInital, it will run every render\
    // const [count, setCount] = useState(countInital())
    // but as function, it will not
    // const [count, setCount] = useState(() => { countInital() })

    // If you are doing something where you have slow complex computation for your initial state, use function version, so it only gets ran one time

    // useState when dealing with objects
    const [state, setState] = useState({ count: 4, theme: 'blue' })
    const count = state.count
    const theme = state.theme


    // function decrementCount() {
    //     setCount(prevCount => prevCount - 1)
    // }

    // This will override all of the old state, but with spread operator
    function decrementCount() {
        setState(prevState => {
            return {
                // All the values are spread, this will not override
                ...prevState,
                count: prevState.count + 1

            }
        })
    }
    function incrementCount() {
        // setCount(prevCount => prevCount + 1)

    }

    return (

        <>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <span>{theme}</span>
            <button onClick={incrementCount}>+</button>
        </>
    )
}
