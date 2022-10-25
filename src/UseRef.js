import { useEffect, useRef, useState } from "react"

export default function UseRef() {
    const [name, setName] = useState('')

    const renderCount = useRef(1)

    useEffect(() => {
        renderCount.current = renderCount.current + 1
    })
    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)} />
            <div>My name is {name}</div>
            <div>I rendered {renderCount.current}</div>
        </div>
    )
}
