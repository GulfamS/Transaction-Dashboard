import React from "react"
import {Link} from "react-router-dom"
import "./index.css"

const Header = () =>{
    return(
        <div className="headerContainer">
            <Link to="/transaction">Transaction</Link>
            <Link to="/transaction-statistics">TransactionStatistics</Link>
            <Link to="/transaction-charts">TransactionCharts</Link>
        </div>
    )
}

export default Header