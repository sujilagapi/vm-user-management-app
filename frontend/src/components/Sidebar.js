import React, {useContext} from "react";
import "./Sidebar.css";
import {ThemeContext} from "../contexts/ThemeContext";

function Sidebar({ activeMenu, handleMenuClick, handleLogout }) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const menuItems = [
        { name: 'Virtual Machines', icon: 'fas fa-server' },
        { name: 'History', icon: 'fas fa-history' },
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
                    {menuItems.map ((menu) => (
                        <li
                            key={menu.name}
                            className={menu.name === activeMenu ? 'active' : ''}
                            onClick={() => handleMenuClick (menu.name)}
                        >
                            <i className={`${menu.icon} menu-icon`}></i>
                            {menu.name}
                        </li>
                    ))}
                </ul>
            </nav>

            <button
                className="theme-toggle"
                onClick={() => toggleTheme (theme === "light" ? "dark" : "light")}
            >
                {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
            {/* Logout Button */}
            <div className="logout-section" onClick={handleLogout}>
                <i className="fas fa-sign-out-alt logout-icon"></i>
                <span>Logout</span>
            </div>
        </aside>
    );
}

export default Sidebar;