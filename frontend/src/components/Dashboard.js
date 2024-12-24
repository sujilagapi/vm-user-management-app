import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "./Dashboard.css";

function Dashboard() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    // Mock VM data
    const vms = [
        { id: 1, name: "VM1", status: "Active", user: "John" },
        { id: 2, name: "VM2", status: "Inactive", user: null },
        { id: 3, name: "VM3", status: "Active", user: "Alice" },
        { id: 4, name: "VM4", status: "Inactive", user: null },
        { id: 5, name: "VM5", status: "Active", user: "Jane" },
        { id: 6, name: "VM6", status: "Inactive", user: "Doe" },
        { id: 7, name: "VM7", status: "Active", user: "Chris" },
        { id: 8, name: "VM8", status: "Inactive", user: null },
        { id: 9, name: "VM9", status: "Active", user: "Smith" },
    ];

    const activeVMs = vms.filter((vm) => vm.status === "Active").length;
    const inactiveVMs = vms.filter((vm) => vm.status === "Inactive").length;

    return (
        <div className="dashboard">
            {/* Header */}
            <header className="dashboard-header">
                <h1 className="dashboard-title">VM Dashboard</h1>
                <div className="header-actions">
                    <button
                        className="theme-toggle"
                        onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
                    >
                        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
                    </button>
                    <button className="logout-button">Logout</button>
                </div>
            </header>

            {/* VM Summary */}
            <section className="vm-summary">
                <div className="summary-item">
                    <h3>Active VMs</h3>
                    <p>{activeVMs}</p>
                </div>
                <div className="summary-item">
                    <h3>Inactive VMs</h3>
                    <p>{inactiveVMs}</p>
                </div>
            </section>

            {/* VM Cards */}
            <section className="vm-section">
                <div className="vm-grid">
                    {vms.map((vm) => (
                        <div key={vm.id} className={`vm-card ${vm.status.toLowerCase()}`}>
                            <h2 className="vm-title">{vm.name}</h2>
                            <p className="vm-status">
                                Status: <strong>{vm.status}</strong>
                            </p>
                            {vm.user && <p className="vm-user">User: {vm.user}</p>}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Dashboard;