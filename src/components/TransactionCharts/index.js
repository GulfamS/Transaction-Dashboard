import React from "react"
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'
import "./index.css"

const TransactionCharts = () =>{
    return(
        <div className="container">
            <div className="char-card">
              <h1>Bar Chart Stats</h1>
              <BarChart
                    width={1000}
                    height={300}
                    margin={{top: 5}}
                >
                    <XAxis
                    dateKey="vaccineDate"
                    tick={{
                        stroke: '#6c757d',
                        strokeWidth: 1,
                        fontSize: 15,
                        fontFamily: 'Roboto',
                    }}
                    />
                    <YAxis
                    tick={{
                        stroke: '#6c757d',
                        fontSize: 15,
                        fontFamily: 'Roboto',
                        strokeWidth: 0,
                    }}
                    />
                    <Legend
                    wrapperStyle={{
                        paddingTop: 20,
                        textAlign: 'center',
                        fontSize: 12,
                        fontFamily: 'Roboto',
                    }}
                    />
                    <Bar
                    dataKey="dose1"
                    name="Dose 1"
                    fill="#5a8dee"
                    radius={[10, 10, 0, 0]}
                    barSize="20%"
                    />
                    <Bar
                    dataKey="dose2"
                    name="Dose 2"
                    fill="#f54394"
                    radius={[5, 5, 0, 0]}
                    barSize="20%"
                    />
                </BarChart>
            </div>
        </div>
    )
}

export default TransactionCharts