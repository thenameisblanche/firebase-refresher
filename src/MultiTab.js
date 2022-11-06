import React from 'react'
import { useState } from 'react'

export default function MultiTab() {

    const [toggleState, setToggleState] = useState(1)

    const ToggleTab = (index) => {
        console.log(index);
        setToggleState(index)
    }


    return (
        <div className='container'>
            <div className='bloc-tabs'>
                <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => ToggleTab(1)}>Tab 1</div>
                <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => ToggleTab(2)} >Tab 2</div>
                <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => ToggleTab(3)} >Tab 3</div>
            </div>

            <div className="content-tabs">
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                    <h1>Content 1</h1>
                </div>
                <div className={toggleState === 2 ? "content active-content" : "content"}>

                    <h1>Content 2</h1>
                </div>
                <div className={toggleState === 3 ? "content active-content" : "content"}>

                    <h1>Content 3</h1>
                </div>
            </div>
                     
        </div>
    )
}
