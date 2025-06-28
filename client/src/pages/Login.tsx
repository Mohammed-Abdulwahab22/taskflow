import React, { useState } from 'react'
import "../styles/Login.css"

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Login attempted with", { email, password });
    }

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
