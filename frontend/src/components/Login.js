import React, { useState, useContext } from "react";
import { FaEnvelope, FaLock, FaMoon, FaSun } from "react-icons/fa"; // Importing icons
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext"; // Import Theme Context
import "./Login.css"; // Import CSS file for styling

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Access theme context
    const { theme, toggleTheme } = useContext(ThemeContext);

    // Handle login action
    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Email:", email, "Password:", password); // Simulated login action
    };

    // Navigate to register page
    const handleRegister = () => {
        navigate("/register");
    };

    return (
        <>
            {/* Theme Switcher */}
            <div className="theme-switcher">
                <button
                    className="theme-toggle"
                    onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
                >
                    {theme === "light" ? (
                        <FaMoon className="theme-icon" />
                    ) : (
                        <FaSun className="theme-icon" />
                    )}
                </button>
            </div>

            {/* Login Form */}
            <div className="login-container">
                <h1 className="login-title">Login</h1>
                <form className="login-form" onSubmit={handleLogin}>
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
                    <button type="submit" className="login-button">Login</button>
                </form>

                {/* Link to Register Page */}
                <p className="register-link">
                    Don't have an account?{" "}
                    <button onClick={handleRegister} className="register-button-link">
                        Register here
                    </button>
                </p>
            </div>
        </>
    );
}

export default Login;