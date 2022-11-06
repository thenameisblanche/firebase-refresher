import React from 'react'
import ReactDOM from 'react-dom'

export default function Modal({ children, open, onClose }) {
    if (!open) return null
    return ReactDOM.createPortal(
        <>
            <button onClick={onClose}>Close Modal</button>
            {children}
        </>,
        document.getElementById('portal')

    )
}
