import React from "react";
import { BiSolidGroup, BiSolidShoppingBags } from "react-icons/bi";
import { FaUsers, FaTags, FaBell, FaWallet, FaSignOutAlt } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import "./Sidebar.css";

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="logo-title">
                    <BiSolidShoppingBags className="logo-icon" />
                    <div className="title-text">
                        <h2>Wah!</h2>
                        <span className="subtitle">Smart Deals</span>
                    </div>
                </div>
            </div>



            {/* Navigation Items */}
            <ul>
                <li><LuLayoutDashboard /> Dashboard</li>
                <li><BiSolidGroup /> Vendors</li>
                <li><FaRocketchat /> Chat</li>
                <li><FaUsers /> Customers</li>
                <li><FaTags /> Deals</li>
                <li><FaBell /> Notifications</li>
                <li><FaWallet /> Coupons</li>
                <li><FaUsers /> Store Locations</li>
                <li><FaTags /> Categories</li>
                <li><FaBell /> Revenue</li>
                <li><FaWallet /> Wallet</li>
                <li>  </li>
                <li> </li>
                <li> </li>
            </ul>

            {/* Logout Button at Bottom */}
            <div className="logout-section">
                <button className="logout-btn">
                    <FaSignOutAlt /> Logout
                </button>
            </div>
        </aside>
    );
}

export default Sidebar;
