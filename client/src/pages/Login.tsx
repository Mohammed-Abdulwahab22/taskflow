import React,{useState} from 'react'
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
            <h2>Login</h2>
            <label>Email:</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required/>
            <label>Password:</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required/>
                <button type="submit">Login</button>

                </form>
         
    </div>
  )
}
