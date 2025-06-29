import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


import "../styles/Login.css"
import { loginUser } from '../api/auth';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();


    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const data = await loginUser(email, password);
            localStorage.setItem("token", data.token);
            console.log("Login successful:", data);

            // Redirect to dashboard or home page
            navigate("/dashboard");

        } catch (error) {
            console.error("Login failed:", error);
            setError("Login failed. Please check your credentials.");
        }

    };

    return (
        <div className='login-page'>
            <form className='login-form' onSubmit={handleLogin}>
                <h1>TaskFlow</h1>
                <h2>Sign In To Your Account</h2>
                <label>Email Address</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required />

                <button type="submit">Login</button>

                <p>Don't have an account? <a href="/register">Register</a></p>

            </form>

        </div>
    )
}
