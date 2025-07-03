import React from 'react'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from 'react-modal';

import '../styles/DashboardSidebar.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const DashboardSidebar = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
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
        <h3 className="logged-in-email" title={email}>{email}</h3>
        <button className='logout-button' onClick={() => (handleLogout())}>Logout</button>
      </div>

      <div className='add-task-form-button' onClick={openModal}>
        <span className='add-task-icon'>+</span>
        <span className='add-task-text'>Add Task</span>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>

    </div>
  )
}
