import React from 'react'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from 'react-modal';
import { FaRegTimesCircle, FaPlus } from 'react-icons/fa';

import '../styles/DashboardSidebar.css';
import AddTaskForm from './AddTaskForm';

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
        <span className='add-task-text'>Add Task</span>
        <FaPlus className='add-task-icon' />

      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: '10px'
        }}>
          <FaRegTimesCircle
            size={30}
            style={{ cursor: 'pointer' }}
            color='red'
            title="Close"
            onClick={closeModal}
          />
        </div>
        <AddTaskForm onTaskAdded={closeModal} />
      </Modal>
    </div>
  )
}
