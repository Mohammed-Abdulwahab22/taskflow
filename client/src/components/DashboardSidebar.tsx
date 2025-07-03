import React from 'react'
import '../styles/DashboardSidebar.css';

export const DashboardSidebar = () => {
  const email = localStorage.getItem("Email") || "No email found";

  return (
    <div className='dashboard-sidebar'>
        
        <div className='dashboard-sidebar-header'>
          <h3 className='logged-in-email'>{email}</h3>
          <button className='logout-button' >Logout</button>
        </div>

    </div>
  )
}
