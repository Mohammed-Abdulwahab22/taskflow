import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


import "../styles/Login.css"
import { loginUser } from '../api/auth';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const data = await loginUser(email, password);
            localStorage.setItem("token", data.token);
            localStorage.setItem("email" ,email);
            toast.success("Login successful! Redirecting to dashboard...");
            navigate("/dashboard");

        } catch (error) {
            toast.error("Login failed. Please check your credentials.");
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
