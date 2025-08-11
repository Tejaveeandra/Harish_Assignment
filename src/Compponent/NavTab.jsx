
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavTab.css'; // Keep for custom adjustments

const NavTabs = () => {
  return (
    <div className="nav-container">
      <nav className="nav nav-tabs">
        <ul className="nav nav-tabs custom-nav-tabs">
          <li className="nav-item">
            <NavLink to="/student-profile" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              Student Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/payments" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              Payments
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/transport" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              Transport
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/academics" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              Academics
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/alerts" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              Alerts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/history" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              History
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/room-allotment" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              Room Allotment
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/issue-forms" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              Issue Forms
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/certificates" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              Certificates
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavTabs;
