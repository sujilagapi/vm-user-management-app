import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa"; // Icons
import "./Register.css"; // Import CSS

function Register() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        console.log("User Name:", userName, "Email:", email, "Password:", password);
        setMessage("Registration successful!"); // Simulated feedback
    };

    return (
        <div className="center-container">
            <div className="register-container">
                <h1 className="register-title">Register</h1>
                <form className="register-form" onSubmit={handleRegister}>
                    <div className="input-group">
                        <FaUser className="icon" />
                        <input
                            type="text"
                            placeholder="User Name"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <FaEnvelope className="icon" />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <FaLock className="icon" />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="register-button">Register</button>
                </form>
                {message && <p className="success-message">{message}</p>}
                <p className="login-link">
                    Already have an account? <a href="/">Login here</a>
                </p>
            </div>
        </div>
    );
}

export default Register;