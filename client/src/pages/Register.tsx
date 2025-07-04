import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "../styles/Login.css"; // reuse styles
import { registerUser } from "../api/auth";

export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/dashboard");
        }
    }, []);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        try {
            await registerUser(email, password);


            toast.success("Account created successfully. Please log in.");
            navigate("/login");

        } catch (err: any) {
            console.error(err);
            toast.error("Registration failed. Please try again.");
        }
    };

    return (
        <div className="login-page">
            <form className="login-form" onSubmit={handleRegister}>
                <h1>TaskFlow</h1>
                <h2>Create Your Account</h2>

                <label>Email Address</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <label>Confirm Password</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                <button type="submit">Register</button>


                <p>
                    Already have an account? <a href="/login">Login</a>
                </p>
            </form>
        </div>
    );
};
