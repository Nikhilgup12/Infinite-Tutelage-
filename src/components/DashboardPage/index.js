import { Component } from "react";
import QuickLinks from "../QuickLinks"
import OverView from "../OverView"
import TradingAccount from "../TradingAccount"
import "./index.css"
class DashboardPage extends Component{
    render(){
        return (
            <>
            <div className="dashboardpage-main-container">
                <div className="dashboard-header-container">
                    <h1 className="dashboard-header-name"> Dashboard </h1>
                    <div className="dashboard-search-noti-container">
                    <div className="search-bar-container">
                        <button className="search-button">
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1723974909/search-2-line_m0s0bu.svg" alt="search-icon" className="search-icon" />
                        </button>
                        <input type="text" placeholder="Search..." className="search-input" />
                    </div>
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1723975519/notification-3-line_pk0iv3.png" /> 
                    </div>
                </div>
                <div className="dashboard-overall-main-container">
                <div className="mobile dashboard-search-noti-container">
                    <div className="search-bar-container">
                        <button className="search-button">
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1723974909/search-2-line_m0s0bu.svg" alt="search-icon" className="search-icon" />
                        </button>
                        <input type="text" placeholder="Search..." className="search-input" />
                    </div>
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1723975519/notification-3-line_pk0iv3.png" alt="search"/> 
                    </div>
                    <div className="dashboard-overall-container">
                    <QuickLinks />
                    <OverView />
                    </div>
                    <TradingAccount />
                </div>
            </div>
            </>
        )
    }
}

export default DashboardPage