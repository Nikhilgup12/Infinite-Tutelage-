
// import Popup from 'reactjs-popup'
import { useState } from "react";

import "./index.css" 

const arr = [
    {
        id:1,
        image:"https://res.cloudinary.com/di9qg5ka6/image/upload/v1723967541/dashboard-line_ol7hqs.svg",
        name:"Dashboard"
    },
    {
        id:2,
        image:"https://res.cloudinary.com/di9qg5ka6/image/upload/v1723967559/copilot-line_eb8s4e.svg",
        name:"CRM"
    },
    {
        id:3,
        image:"https://res.cloudinary.com/di9qg5ka6/image/upload/v1723967558/box-3-line_fkqpxr.svg",
        name:"MAM"
    },
    {
        id:4,
        image:"https://res.cloudinary.com/di9qg5ka6/image/upload/v1723967558/pie-chart-line_cnylwo.svg",
        name:"PAMM"
    },
    {
        id:5,
        image:"https://res.cloudinary.com/di9qg5ka6/image/upload/v1723967558/swap-box-line_evd1ez.svg",
        name:"Trade"
    },
    {
        id:6,
        image:"https://res.cloudinary.com/di9qg5ka6/image/upload/v1723967558/wallet-line_ue66xm.svg",
        name:"Wallet"
    },
    {
        id:7,
        image:"https://res.cloudinary.com/di9qg5ka6/image/upload/v1723967557/money-dollar-circle-line_cnln9f.svg",
        name:"Accounts"
    },
    {
        id:8,
        image:"https://res.cloudinary.com/di9qg5ka6/image/upload/v1723967557/history-line_axtumb.svg",
        name:"History"
    }
]

const noti = [
    
    {
        id:1,
        image:"https://res.cloudinary.com/di9qg5ka6/image/upload/v1723970366/notification-4-line_je7qbk.svg",
        name:"Notifications"
    },
    {
        id:2,
        image:"https://res.cloudinary.com/di9qg5ka6/image/upload/v1723970366/settings-4-line_otf6gh.svg",
        name:"Settings"
    },
    {
        id:3,
        image:"https://res.cloudinary.com/di9qg5ka6/image/upload/v1723970365/headphone-line_ds8je5.svg",
        name:"Help & Support"
    },
    {
        id:4,
        image:"https://res.cloudinary.com/di9qg5ka6/image/upload/v1723970366/logout-box-line_xvgthh.png",
        name:"Log Out"
    }
]

const NavbarMobile = props => {
    const {closeNavbar} = props
    const [selectedId, setSelectedId] = useState(1);

    const handleItemClick = (id) => {
        setSelectedId(id);
    };
    return (
    <>
        <nav className='navbar-mobile'> 
            <div className='navbar-mobile-cross-container'>
            <div className="dashboard-navbar-user-container">
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1723970366/Frame_19_dajcfh.svg" alt="frame" />
                    {/* <FaRegCircleUser /> */}
                    <div className="dashboard-user-detail-container">
                        <h1 className="dashboard-navbar-username"> Shyam Shakur</h1>
                        <p className="dashboard-navbar-useremail"> shyam01.shankur@m</p>
                    </div>
                </div>
              <button onClick={closeNavbar} className='navbar-mobile-cross-button'>&times;</button>
            </div>
            
            <div className='navbar-container'>
            <ul className="dashboard-ul-container">
                        {arr.map((each) => (
                            <li
                                key={each.id}
                                className={`dashboard-list-container ${
                                    selectedId === each.id ? "selected" : ""
                                }`}
                                onClick={() => handleItemClick(each.id)}
                            >
                                <img
                                    src={each.image}
                                    alt={each.name}
                                    className={`dashboard-list-icon ${
                                        selectedId === each.id ? "selected-icon" : ""
                                    }`}
                                />
                                <h1
                                    className={`navbar-dashboard-list-name ${
                                        selectedId === each.id ? "selected-name" : ""
                                    }`}
                                >
                                    {each.name}
                                </h1>
                            </li>
                        ))}
                    </ul>
                    <hr className="dashboard-horizontal-line"/>
                    <ul className="dashboard-ul-container">
                    {
                    noti.map((each)=>(
                        <li key={each.id} className="dashboard-list-container"> 
                            <img src={each.image} alt={each.name} className="dashboard-list-icon"/> 
                            <h1 className="dashboard-list-name"> {each.name} </h1>
                        </li>
                    ))
                    }
                </ul>
                {/* <div className='nav-mobile-item'>
                    <p className='nav-menu-items'> About us  </p>
                </div>
                <div className='nav-mobile-item'>
              
                    <p className='nav-menu-items'>  Dental Treatments </p>
               
                </div>
                <div className='nav-mobile-item'>
              
                    <p className='nav-menu-items'>  Facial Aesthetics    </p>
              
                </div>
                <div className='nav-mobile-item'>
             
                    <p className='nav-menu-items'> Contact   </p>
             
                </div>
                <div className='nav-mobile-item'>
             
               <button className='navbar-mobile-logout'> Logout </button>
      
         </div> */}
                </div> 
              
           
           </nav> 
        </> 
        )
    } 

export default NavbarMobile 
