// import { useEffect, useRef, useState } from "react"
import { useRef } from "react";
import { useState } from "react";

// export default function UseRef() {
//     const [name, setName] = useState('')

//     const renderCount = useRef(1)

//     useEffect(() => {
//         renderCount.current = renderCount.current + 1
//     })
//     return (
//         <div>
//             <input value={name} onChange={e => setName(e.target.value)} />
//             <div>My name is {name}</div>
//             <div>I rendered {renderCount.current}</div>
//         </div>
//     )
// }

export default function UseRef() {
    const username = useRef(null);
    const anotherone = useRef(null);
    console.log(username);
    const onUsernameClick = () => {
        // current points to the mounted input text element
        console.log(username);
        console.log(username.current);
        username.current.focus();
    };

    const onAnotherClick = () => {
        console.log(anotherone.current);
        anotherone.current.classList.add("remoe")
        console.log(anotherone.current);

    }
    return (
        <>
            <input ref={username} type="text" />
            <h1 ref={anotherone} >Another Ref</h1>

            <button onClick={onUsernameClick}>Focus on input</button>
            <button onClick={onAnotherClick}>Another</button>
        </>
    );
}
