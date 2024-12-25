import React, { useState } from "react";
import "./VMList.css";

function VMList() {
    const [selectedVM, setSelectedVM] = useState(null); // Tracks the selected VM
    const [isModalOpen, setIsModalOpen] = useState(false); // Tracks modal state
    const [instanceName, setInstanceName] = useState(""); // Instance name input
    const [connectionType, setConnectionType] = useState(""); // Connection type input



    const vms = [
        { id: 1, name: "VM1", status: "Free", user: null, instance: "", connection: "" },
        { id: 2, name: "VM2", status: "Occupied", user: "Alice", instance: "ubuntu_server_02", connection: "Rust Desk" },
        { id: 3, name: "VM3", status: "Inactive", user: null, instance: "", connection: "" },
        { id: 4, name: "VM4", status: "Free", user: null, instance: "", connection: "" },
    ];

    // Calculate counts
    const freeCount = vms.filter(vm => vm.status === "Free").length;
    const usedCount = vms.filter(vm => vm.status === "Occupied").length;


    const handleUseClick = (vm) => {
        setSelectedVM(vm); // Set the selected VM
        setInstanceName(vm.instance); // Pre-fill instance name
        setConnectionType(vm.connection); // Pre-fill connection type
        setIsModalOpen(true); // Open the modal
    };

    const handleReleaseClick = (vm)=> {

    }

    const handleConfirm = () => {
        console.log("Instance Name:", instanceName);
        console.log("Connection Type:", connectionType);
        // Add logic to handle confirmation, e.g., API call
        setIsModalOpen(false); // Close the modal
    };

    const handleCancel = () => {
        setIsModalOpen(false); // Close the modal
    };

    return (
        <div className="vm-container">
            <div className="vm-header">
                <h3>Virtual Machines</h3>
                <div className="vm-stats">
                    <div className="vm-stat-box">
                        <span className="vm-stat-title">Available</span>
                        <span className="vm-stat-value">{freeCount}</span>
                    </div>
                    <div className="vm-stat-box">
                        <span className="vm-stat-title">Used</span>
                        <span className="vm-stat-value">{usedCount}</span>
                    </div>
                </div>
            </div>
            <div className="vm-grid">
                {vms.map ((vm) => (
                    <div key={vm.id} className={`vm-card ${vm.status.toLowerCase ()}`}>
                        <i className="fas fa-server vm-icon"></i>
                        <div className="vm-title">{vm.name}</div>
                        <p className="vm-status">
                            Status: <strong>{vm.status}</strong>
                        </p>
                        <p className="vm-instance">
                        Instance: <strong>{vm.instance? vm.instance : "- - - - - - - - - - -" }</strong>
                        </p>
                        <p className="vm-connection">
                            Connection: <strong>{vm.connection? vm.connection : "- - - - - - - - - - -" }</strong>
                        </p>
                        {vm.status === "Occupied" && (
                            <p className="vm-user">
                                In Use By: <strong>{vm.user}</strong>
                            </p>
                        )}
                        {vm.status === "Free" && (
                            <button className="vm-use-button" onClick={() => handleUseClick(vm)}>
                                Use
                            </button>
                        )}
                        {vm.status === "Occupied" && (
                            <button className="vm-release-button" onClick={() => handleReleaseClick(vm)}>
                                Release
                            </button>
                        )}
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>Use {selectedVM?.name}</h3>
                        <div className="modal-body">
                            <label>
                                Instance Name:
                                <input
                                    type="text"
                                    value={instanceName}
                                    onChange={(e) => setInstanceName(e.target.value)}
                                />
                            </label>
                            <label>
                                Connection Type:
                                <select
                                    value={connectionType}
                                    onChange={(e) => setConnectionType(e.target.value)}
                                >
                                    <option value="Rust Desk">Rust Desk</option>
                                    <option value="Jump Desk">Jump Desk</option>
                                </select>
                            </label>
                        </div>
                        <div className="modal-footer">
                            <button className="confirm-button" onClick={handleConfirm}>
                                Confirm
                            </button>
                            <button className="cancel-button" onClick={handleCancel}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default VMList;