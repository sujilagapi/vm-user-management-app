import React, { useContext, useState } from "react";
import Sidebar from "./Sidebar";
import VMList from "./VMList";
import { ThemeContext } from "../contexts/ThemeContext";
import "./Dashboard.css";
import {useNavigate} from "react-router-dom";
import VMHistory from "./VMHistory";

function Dashboard() {
    const [selected, setSelected] = useState("vms"); // Track selected section
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [activeMenu, setActiveMenu] = useState('Virtual Machines');
    const navigate = useNavigate();

    const handleMenuClick = (menu) => setActiveMenu(menu);
    const handleLogout = () => {
        navigate('/');
    };
    return (
        <div className="home-layout">
            <Sidebar activeMenu={activeMenu} handleMenuClick={handleMenuClick} handleLogout={handleLogout} />
                <div className="main-content">
                    <div className="content-container">
                        {(() => {
                            switch (activeMenu) {
                                case 'Virtual Machines':
                                    return (<VMList/>);
                                case 'History':
                                    return (<VMHistory/>);
                                default:
                                    return <p>This is the {activeMenu} section. Content will go here later.</p>;
                            }
                        }) ()}
                    </div>
                </div>
            </div>
    );
}

export default Dashboard;