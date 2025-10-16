import React from "react";
import { BiSolidGroup, BiSolidShoppingBags } from 'react-icons/bi';
import { FaUsers, FaTags, FaBell, FaWallet, FaSignOutAlt } from "react-icons/fa";
import "./Sidebar.css";
import { FaRocketchat } from 'react-icons/fa';
import { LuLayoutDashboard } from 'react-icons/lu';



function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h2 className="mar">
                    <BiSolidShoppingBags className="logo-icon" /> Wah!
                </h2>
                <span className="subtitle">Smart Deals</span>
            </div>
            <ul>
                <li><LuLayoutDashboard /> Dashboard</li>
                <li><BiSolidGroup /> Vendors</li>
                <li><FaRocketchat /> Chat</li>
                <li><FaUsers /> Customers</li>
                <li><FaTags /> Deals</li>
                <li><FaBell /> Notifications</li>
                <li><FaWallet /> Wallet</li>
            </ul>

            <div className="logout-section">
                <button className="logout-btn">
                    <FaSignOutAlt /> Logout
                </button>
            </div>
        </aside>
    );
}

export default Sidebar;


