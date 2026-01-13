import React from 'react';
import { FaBook, FaCheckSquare, FaClock, FaHome, FaMusic } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Student OS 🌿</h2>
      
      <div>
        <h3>Quick Actions</h3>
        <div className="menu-item"><FaHome /> Dashboard</div>
        <div className="menu-item"><FaCheckSquare /> My Tasks</div>
        <div className="menu-item"><FaClock /> Focus Zone</div>
      </div>

      <div>
        <h3>Management</h3>
        <div className="menu-item"><FaBook /> Courses</div>
        <div className="menu-item"><FaMusic /> Lo-fi Playlist</div>
      </div>
    </aside>
  );
};

export default Sidebar;