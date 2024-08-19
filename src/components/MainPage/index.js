import {Component} from "react"
import Dashboard from "../Dashboard"
import DashboardPage from "../DashboardPage"
import "./index.css"
class MainPage extends Component{
    render(){
        return (
            <>
            <div className="main-page-main-container">
                <Dashboard />
                <DashboardPage />
            </div>
            </>
        )
    }
}

export default MainPage 