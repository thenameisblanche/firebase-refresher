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
import { useEffect, useState } from "react"

export default function UseEffect() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    }, [])

    return (
        <>
            {windowWidth}
        </>

    )
}
