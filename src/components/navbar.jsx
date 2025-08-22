import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className='navbar-container'>
                    <div className="navbar-brand">
                        <div className="search-cont">
                            <input type="search" name="" id="search" placeholder="search" />
                            <FaSearch className="search-icon" />
                        </div>
                        <div id="logo"><img src="https://scentsnstories.pk/cdn/shop/files/SNS_Logo_For_Web_NEW.png?v=1747300036&width=480" /></div>
                        <div className="navbar-icons">
                            <FaUserAlt /> <h3>Acount</h3>
                            <FaCartShopping /><h3>Cart</h3>
                        </div>
                    </div>
                </div>
                <ul className="navbar-list">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">Azadi Sell</li>
                    <li className="nav-item">Oud</li>
                    <li className="nav-item">Gifting</li>
                    <li className="nav-item">Less Than 1500</li>
                </ul>
            </nav>
        </>
    )

}
export default Navbar;








