import React from 'react'

export default function UseRef() {
    const theRef = React.useRef(null)
    return (
        <div className='app'>
            <input type="text" name="" id="" />
            <hr />
            <input type="text"    ref={theRef}     name="" id="" />
            <hr />
            <button onClick={() => theRef.current.focus()}>getFocus</button>
            
        </div>
    )
}
