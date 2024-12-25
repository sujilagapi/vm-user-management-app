import React from "react";
import "./VMList.css";

function VMList() {
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

    return (
        <div className="vm-container">
            <div className="vm-header">
                <h3>Virtual Machines</h3>
            </div>
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
        </div>
    );
}

export default VMList;