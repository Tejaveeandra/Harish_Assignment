
import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import "./StudentInfoHeader.css";

const StudentInfoHeader = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
    <div className="student-info-container">
      <div className="student-info-left">
        <div className="icon-box">
          <span className="icon-text">📝</span>
        </div>
        <div>
          <h2 className="student-info-title">Student Information</h2>
          <p className="student-info-subtitle">
            Get All Student Details Regarding Fee Payment, And More...
          </p>
        </div>
      </div>
      <div className="student-info-segment">
        <Link
          to="/student-profile/class-9"
          className={`segment-button ${currentPath === "/student-profile/class-9" ? "active" : ""}`}
        >
          Class 9
        </Link>
        <Link
          to="/student-profile/class-8"
          className={`segment-button ${currentPath === "/student-profile/class-8" ? "active" : ""}`}
        >
          Class 8
        </Link>
        <Link
          to="/student-profile/class-7"
          className={`segment-button ${currentPath === "/student-profile/class-7" ? "active" : ""}`}
        >
          Class 7
        </Link>
        <Link
          to="/student-profile/more"
          className={`segment-button more ${currentPath === "/student-profile/more" ? "active" : ""}`}
        >
          More
          <span className="dropdown-indicator">▾</span>
        </Link>
      </div>
     
    </div>
     <div className="student-info-content">
        <Outlet /> {/* Render nested components here */}
      </div>
      
      </>
  );
};

export default StudentInfoHeader;