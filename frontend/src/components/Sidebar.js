import React from "react";
import "./Sidebar.css";

function Sidebar({ activeMenu, handleMenuClick, handleLogout }) {

    const menuItems = [
        { name: 'VMs', icon: 'fas fa-home' },
        { name: 'Logs', icon: 'fas fa-cog' },
        { name: 'Settings', icon: 'fas fa-user-tie' },
    ];

    return (
        <aside className="sidebar">
            <div className="profile-section">
                <h3>Muhammed Anvar</h3>
                <p>anvar@darasa.io</p>
            </div>
            <nav className="nav-links">
                <ul>
                    {menuItems.map((menu) => (
                        <li
                            key={menu.name}
                            className={menu.name === activeMenu ? 'active' : ''}
                            onClick={() => handleMenuClick(menu.name)}
                        >
                            <i className={`${menu.icon} menu-icon`}></i>
                            {menu.name}
                        </li>
                    ))}
                </ul>
            </nav>
            {/* Logout Button */}
            <div className="logout-section" onClick={handleLogout}>
                <i className="fas fa-sign-out-alt logout-icon"></i>
                <span>Logout</span>
            </div>
        </aside>
    );
}

export default Sidebar;