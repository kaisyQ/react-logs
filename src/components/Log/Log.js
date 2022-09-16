import React from "react"
import './Log.css'
function Log({ title, text}) {
    return <>
        <div className="log">
            <h3 className="log__title">{title}</h3>
            <p className="log__text">{text}</p>
        </div>
    </>
}

export default Log