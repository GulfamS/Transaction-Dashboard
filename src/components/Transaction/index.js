import React from "react"
import "./index.css"

const Transaction= () =>{
    return(
        <div className="topbar">
            <div className="topbarContainer">
                <div className="transaction-card">
                    <p className="transaction">Transaction Dashboard</p>
                </div>
            </div>
            <div className="searchCard">
                <input className="input" placeholder="Search Transaction" type="text"/>
                <div className="month">
                <span>Select Month</span>
                <select>
                <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March" selected>March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
                </div>
            </div>
            <div className="table">
                <p className="id">ID</p>
                <p className="title">Title</p>
                <p className="description">Description</p>
                <p className="price">Price</p>
                <p className="category">Category</p>
                <p className="sold">Sold</p>
                <p className="image">Image</p>
            </div>
            <div className="footer">
                <button className="buttons">Page No: </button>
                <button className="buttons">Next</button>
                <button className="buttons">Previous</button>
                <button className="buttons">Per Page: 10</button>
            </div>
        </div>
    )
}

export default Transaction