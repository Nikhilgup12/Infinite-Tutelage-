import { Component } from "react";
import "./index.css" 
class QuickLinks extends Component{
    render(){
        return (
            <>
             <div className="quicklinks-main-container">
                <h1 className="quicklinks-heading"> Quick Links </h1>
                <ul className="quicklinks-unordered-list-container">
                    <li className="quicklinks-list-container">
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1723976671/arrow-left-down-line_g5fktk.png" alt="quick-links" />
                        <p> Deposit </p>
                    </li>
                    <li className="quicklinks-list-container">
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1723981410/Vector_d9w5eg.png" alt="quick-links"/>
                        <p> withdraw </p>
                    </li>
                    <li className="quicklinks-list-container">
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1723985648/settings-4-line_aikcwb.png" alt="quick-links"/>
                        <p> Setting </p>
                    </li>
                    <li className="quicklinks-list-container">
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1723985648/user-follow-line_h0yuh2.png" alt="quick-links"/>
                        <p> Verification </p>
                    </li>
                    <li className="quicklinks-list-container">
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1723985648/star-s-line_hbkcld.png" alt="quick-links"/>
                        <p> Bonuses </p>
                    </li>
                    <li className="quicklinks-list-container">
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1723985648/line-chart-line_yo6r6a.png" alt="quick-links"/>
                        <p>MT5 </p>
                    </li>
                    <li className="quicklinks-list-container">
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1723985648/arrow-left-right-line_xhgzrp.png" alt="quick-links"/>
                        <p> Transfer</p>
                    </li>
                    <li className="quicklinks-list-container">
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1723985648/history-line_wne8gc.png" alt="quick-links"/>
                        <p>History </p>
                    </li>
                    <li className="quicklinks-list-container">
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1723985648/user-2-line_pdlk0u.png" alt="quick-links"/>
                        <p> Partner</p>
                    </li>
                    <li className="quicklinks-list-container">
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1723985648/token-swap-line_yw0jen.png" alt="quick-links"/>
                        <p> Exchange </p>
                    </li>
                    <li className="quicklinks-list-container">
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1723985648/bar-chart-grouped-line_ybzcav.png" alt="quick-links"/>
                        <p> Analytics </p>
                    </li>
                </ul>
             </div>
            </>
        )
    }
}

export default  QuickLinks