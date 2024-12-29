import React, { useState } from "react";
import "./VMHistory.css";

const VMHistory = () => {
    const vmList = [
        { id: 1, name: "VM1" },
        { id: 2, name: "VM2" },
        { id: 3, name: "VM3" },
        { id: 4, name: "VM4" },
        { id: 5, name: "VM5" },
    ];

    const vmHistoryData = {
        VM1: [
            {
                user: "Alice",
                startTime: "2024-12-01 10:00 AM",
                endTime: "2024-12-01 12:00 PM",
                instance: "macos145_m5_12",
                connection: "Rust Desk",
            },
            {
                user: "Bob",
                startTime: "2024-12-02 02:00 PM",
                endTime: "2024-12-02 04:00 PM",
                instance: "macos145_m5_12",
                connection: "Jump Desk",
            },
        ],
        VM2: [
            {
                user: "John",
                startTime: "2024-12-03 09:00 AM",
                endTime: "2024-12-03 11:00 AM",
                instance: "ubuntu_server_02",
                connection: "Rust Desk",
            },
        ],
        VM3: [],
        VM4: [
            {
                user: "Sophia",
                startTime: "2024-12-04 01:00 PM",
                endTime: "2024-12-04 03:00 PM",
                instance: "linux_server_04",
                connection: "Rust Desk",
            },
        ],
        VM5: [],
    };

    const [selectedVM, setSelectedVM] = useState(null);

    return (
        <div className="vm-history-container">
            {/* Sidebar */}
            <div className="vm-sidebar">
                <h3>Virtual Machines</h3>
                <ul className="vm-list">
                    {vmList.map((vm) => (
                        <li
                            key={vm.id}
                            className={selectedVM === vm.name ? "active" : ""}
                            onClick={() => setSelectedVM(vm.name)}
                        >
                            {vm.name}
                        </li>
                    ))}
                </ul>
            </div>

            {/* History Section */}
            <div className="vm-history">
                {selectedVM ? (
                    <>
                        <h3>History for {selectedVM}</h3>
                        <ul className="history-list">
                            {vmHistoryData[selectedVM] && vmHistoryData[selectedVM].length > 0 ? (
                                vmHistoryData[selectedVM].map((entry, index) => (
                                    <li key={index} className="history-item">
                                        <p>
                                            <strong>User:</strong> {entry.user}
                                        </p>
                                        <p>
                                            <strong>Start Time:</strong> {entry.startTime}
                                        </p>
                                        <p>
                                            <strong>End Time:</strong> {entry.endTime}
                                        </p>
                                        <p>
                                            <strong>Instance:</strong> {entry.instance}
                                        </p>
                                        <p>
                                            <strong>Connection:</strong> {entry.connection}
                                        </p>
                                    </li>
                                ))
                            ) : (
                                <p>No history available for {selectedVM}</p>
                            )}
                        </ul>
                    </>
                ) : (
                    <p>Please select a VM to view its history.</p>
                )}
            </div>
        </div>
    );
};

export default VMHistory;