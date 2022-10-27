// import { useEffect, useState } from "react"

// export default function UseEffect() {
//     const [resourceType, setResourceType] = useState('posts')
//     const [items, setItems] = useState([])

//     // Takes second parameter as an array, when changed, hook is going to run
//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//             .then(response => response.json())
//             .then(json => setItems(json))
//     }, [resourceType])
//     return (
//         <>
//             <div>
//                 <button onClick={() => { setResourceType('posts') }} >Posts</button>
//                 <button onClick={() => { setResourceType('users') }} >Users</button>
//                 <button onClick={() => { setResourceType('comments') }} >Comments</button>
//             </div>
//             <h1>{resourceType}</h1>
//             {items.map((item) => {
//                 return <pre>{JSON.stringify(item)}</pre>
//             })}
//         </>

//     )
// }

// Another Example
// import { useEffect, useState } from "react"
import { useEffect } from "react";
import { useState } from "react";

// export default function UseEffect() {
//     const [windowWidth, setWindowWidth] = useState(window.innerWidth)

//     const handleResize = () => {
//         setWindowWidth(window.innerWidth)
//     }

//     useEffect(() => {
//         window.addEventListener('resize', handleResize)
//     }, [])

//     return (
//         <>
//             {windowWidth}
//         </>

//     )
// }
import "./index.css";

export default function UseEffect() {
  const [trigger, setTrigger] = useState(null);
  useEffect(() => {
    console.log(trigger);
    if (trigger !== null && trigger === true) {
      const blue = document.getElementById("blue");
      blue.classList.remove("Red");
      blue.classList.add("Blue");
      console.log(blue);
    }
    if (trigger !== null && trigger === false) {
      const blue = document.getElementById("blue");
      blue.classList.remove("Blue");
      blue.classList.add("Red");
      console.log(blue);
    }
  });
  return (
    <>
      <h1 id="blue" className="okay ">
        Yallo
      </h1>
      <button
        onClick={() => {
          setTrigger(true);
        }}
      >
        On
      </button>
      <button
        onClick={() => {
          setTrigger(false);
        }}
      >
        Off
      </button>
      <button
        onClick={() => {
          setTrigger("blanche");
        }}
      >
        vlivk
      </button>
    </>
  );
}
