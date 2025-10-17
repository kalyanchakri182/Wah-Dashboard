import React from "react";
import { BiSolidGroup, BiSolidShoppingBags } from "react-icons/bi";
import { FaUsers, FaTags, FaBell, FaWallet, FaSignOutAlt } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import "./Sidebar.css";

function Sidebar({ onLogout }) {
    const handleLogout = () => {
        if (onLogout) {
            onLogout(); // 👈 This triggers the login view in App.js
        }
    };

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
            </ul>

            <div className="logout-section">
                <button className="logout-btn" onClick={handleLogout}>
                    <FaSignOutAlt /> Logout
                </button>
            </div>
        </aside>
    );
}

export default Sidebar;
