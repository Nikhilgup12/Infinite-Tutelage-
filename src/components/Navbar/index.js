
import { Component } from "react"; 

import {GiHamburgerMenu} from 'react-icons/gi'
import NavbarMobile from "../NavbarMobile"
import "./index.css"

class Navbar extends Component{ 
    state = {isNavbar:false} 

    onToggleNavbar=()=>{
        this.setState((prevState)=>({
            isNavbar : !prevState.isNavbar
        }))
    } 
    
    render(){
        const {isNavbar}= this.state 
        return (
            <>
            <nav className="nav-container">
                <div className="nav-content">
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1723966787/Group_22_ylunhm.svg" className="nav-logo-mobile" alt="organic-store" />
           
                
                <li onClick={this.onToggleNavbar} className="hamburger"> <GiHamburgerMenu size={20} color={"#ffffff"}/> </li>
           
        </div>
     </nav>
     {isNavbar && <NavbarMobile closeNavbar={this.onToggleNavbar} />}
    </>
        )
    }
}

export default Navbar
