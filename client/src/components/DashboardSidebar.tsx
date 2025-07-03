import React from 'react'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import '../styles/DashboardSidebar.css';

export const DashboardSidebar = () => {
  const email = localStorage.getItem("email") || "No email found";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate('/login');
    toast.success("Logout successful! Redirecting to login page...");
  };
  return (
    <div className='dashboard-sidebar'>

      <div className='dashboard-sidebar-header'>
        <h3 className='logged-in-email'>{email}</h3>
        <button className='logout-button'  onClick={()=>(handleLogout())}>Logout</button>
      </div>

    </div>
  )
}
