import { Component } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Legend,
    ResponsiveContainer,
  } from "recharts"
import "./index.css"

const data = [
    { month: "Jan", value: 750 },  // Between $500 and $1000
    { month: "Feb", value: 375 },  // Between $250 and $500
    { month: "Mar", value: 1000 }, // $1000
    { month: "Apr", value: 1250 }, // Between $1000 and $1500
    { month: "May", value: 500 },  // $500
    { month: "Jun", value: 750 },  // Between $500 and $1000
    { month: "Jul", value: 250 },  // $250
    { month: "Aug", value: 125 },  // Between $0 and $250
    { month: "Sep", value: 125 },  // Between $0 and $250
    { month: "Oct", value: 500 },  // $500
    { month: "Nov", value: 125 },  // Between $0 and $250
    { month: "Dec", value: 250 },  // $250
  ];

class OverView extends Component{
    render(){
        const formatYAxisTick = (value) => {
            return `$${value}`;
          };
        return (
            <>
             <div className="overview-main-container">
                <div className="overview-container">
                    <h1 className="overview-heading"> Overview </h1>
                    <div className="overview-download-container">
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1723977918/download-line_ezsabq.png" />
                        <p> Download Report </p>
                    </div>
                </div>
                <div className="barcharts-button-container">
                    <button className="barcharts-monthly-button"> Monthly </button>
                    <button className="barcharts-yearly-button"> Yearly </button>
                </div>
                <div className="barchrat-main-container">
                    <ResponsiveContainer width="100%" height={500}>
                    <BarChart data={data} margin={{top: 5,}}>
                        <XAxis dataKey="month" tick={{stroke: "gray",strokeWidth: 1,}}/>
        <YAxis
          domain={[0, 1500]}  // Y-axis range from $0 to $1500
          ticks={[0, 250, 500, 1000, 1500]}  // Specific ticks for Y-axis
          tickFormatter={formatYAxisTick}
        //   tickFormatter={DataFormatter}
          tick={{
            stroke: "#EAECF0",
            strokeWidth: 1,
          }}
          axisLine={{ stroke: "#EAECF0", strokeWidth: 1 }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar dataKey="value" name="Value" fill="#AD8EDD" barSize="50" />
      </BarChart>
    </ResponsiveContainer>
                </div>
                
                </div>
            </>
        )
    }
}

export default  OverView