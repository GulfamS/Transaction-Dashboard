import React from "react"
import "./index.css"

const TransactionStatistics = () =>{
    return (
        <div className="mainContainer">
        <div className="statistiContainer">
            <h1>Statistics</h1>
            <div className="card">
                <p>Total sale</p>
                <p>Total sold item</p>
                <p>Total not sold item</p>
            </div>
        </div>
        </div>
    )
}

export default TransactionStatistics