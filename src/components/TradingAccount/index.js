import {Component} from "react"
import "./index.css" 

class TradingAccount extends Component{
    render(){
        return (
            <>
            <div className="trading-container">
            <div className="trading-main-container">
                <h1 className="trading-heading"> Trading Accounts </h1>
                <div className="trading-master-container">
                    <h1 className="trading-master-heading"> Master Account </h1>
                    <div className="trading-master-button">
                        <button className="trader-button"> CTrader</button>
                        <button className="hex-button"> #273728</button>
                    </div>
                    <div className="trading-master-usd">
                        <h1 className="trading-master-usd-heading"> 0.00<span className="trading-span-usd"> usd </span></h1>
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1723981410/Vector_d9w5eg.png" alt="trading" />
                    </div>
                </div>
                <div className="trading-master-container">
                    <h1 className="trading-master-heading"> Master Account </h1>
                    <div className="trading-master-button">
                        <button className="trader-button"> CTrader</button>
                        <button className="hex-button"> #273728</button>
                    </div>
                    <div className="trading-master-usd">
                    <h1 className="trading-master-usd-heading"> 0.00<span className="trading-span-usd"> usd </span></h1>
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1723981410/Vector_d9w5eg.png" alt="trading" />
                    </div>
                </div>
                </div>
                <div className="open-tardes-main-container">
                    <h1 className="trading-heading"> Open Trades </h1>
                    <div className="trading-master-container">
                        <div className="opentrades-container">
                        <div className="trading-master-button">
                        <button className="open-trader-button"> GBPUSD </button>
                        <button className="open-button"> Long </button>
                    </div>
                    <p> 0.12 </p>
                        </div>
                        <p className="usd-para"> +56.00 <span className="usd-span"> USD  </span></p>
                    </div>

                    <div className="trading-master-container">
                        <div className="opentrades-container">
                        <div className="trading-master-button">
                        <button className="open-trader-button"> GBPUSD </button>
                        <button className="open-button"> Long </button>
                    </div>
                    <p> 0.12 </p>
                        </div>
                        <p className="usd-para-red"> +56.00 <span className="usd-span"> USD  </span></p>
                    </div>

                    <div className="trading-master-container">
                        <div className="opentrades-container">
                        <div className="trading-master-button">
                        <button className="open-trader-button"> GBPUSD </button>
                        <button className="open-button-or"> Short </button>
                    </div>
                    <p> 0.12 </p>
                        </div>
                        <p className="usd-para-red"> +56.00 <span className="usd-span"> USD  </span></p>
                    </div>
                </div>
                </div>
            </>
        )
    }
}

export default  TradingAccount