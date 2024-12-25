import React from "react";
import "./VMList.css";

function VMList() {
    const vms = [
        { id: 1, name: "VM1", status: "Free", user: null, instance: "macos145_m5_12", connection: "Rust Desk" },
        { id: 2, name: "VM2", status: "Occupied", user: "Alice", instance: "ubuntu_server_02", connection: "Jump Desk" },
        { id: 3, name: "VM3", status: "Inactive", user: null, instance: "windows11_g2", connection: "Rust Desk" },
        { id: 4, name: "VM4", status: "Free", user: null, instance: "linux_server_04", connection: "Jump Desk" },
        { id: 5, name: "VM5", status: "Occupied", user: "Bob", instance: "centos_server_01", connection: "Rust Desk" },
        { id: 6, name: "VM6", status: "Inactive", user: null, instance: "windows10_x64", connection: "Jump Desk" },
        { id: 7, name: "VM7", status: "Free", user: null, instance: "debian_vm_7", connection: "Rust Desk" },
        { id: 8, name: "VM8", status: "Occupied", user: "Jane", instance: "macos_vm_3", connection: "Jump Desk" },
        { id: 9, name: "VM9", status: "Inactive", user: null, instance: "ubuntu_desktop_9", connection: "Rust Desk" },
        { id: 10, name: "VM10", status: "Free", user: null, instance: "windows11_g8", connection: "Rust Desk" },
        { id: 11, name: "VM11", status: "Free", user: null, instance: "linux_vm_11", connection: "Rust Desk" },
        { id: 12, name: "VM12", status: "Occupied", user: "Eve", instance: "macos_pro_m2", connection: "Jump Desk" },
        { id: 13, name: "VM13", status: "Inactive", user: null, instance: "windows_server_2019", connection: "Rust Desk" },
        { id: 14, name: "VM14", status: "Free", user: null, instance: "debian_test_14", connection: "Jump Desk" },
        { id: 15, name: "VM15", status: "Occupied", user: "Charlie", instance: "linux_server_15", connection: "Rust Desk" },
        { id: 16, name: "VM16", status: "Inactive", user: null, instance: "ubuntu_lts_16", connection: "Jump Desk" },
        { id: 17, name: "VM17", status: "Free", user: null, instance: "mac_mini_2021", connection: "Rust Desk" },
        { id: 18, name: "VM18", status: "Occupied", user: "Sophia", instance: "centos7_vm_18", connection: "Jump Desk" },
        { id: 19, name: "VM19", status: "Inactive", user: null, instance: "win10_test_19", connection: "Rust Desk" },
        { id: 20, name: "VM20", status: "Free", user: null, instance: "macos_ventura", connection: "Rust Desk" },
    ];


    return (
        <div className="vm-container">
            <div className="vm-header">
                <h3>Virtual Machines</h3>
            </div>
            <div className="vm-grid">
                {vms.map((vm) => (
                    <div key={vm.id} className={`vm-card ${vm.status.toLowerCase()}`}>
                        <i className="fas fa-server vm-icon"></i>
                        <div className="vm-title">{vm.name}</div>
                        <p className="vm-status">
                            Status: <strong>{vm.status}</strong>
                        </p>
                        {vm.status === "Free" && (
                            <button className="vm-use-button">Use</button>
                        )}
                        {vm.status === "Occupied" && (
                            <p className="vm-user">
                                In Use By: <strong>{vm.user}</strong>
                            </p>
                        )}
                        <p className="vm-instance">
                            Instance: <strong>{vm.instance}</strong>
                        </p>
                        <p className="vm-connection">
                            Connection: <strong>{vm.connection}</strong>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VMList;