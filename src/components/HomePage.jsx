import React from 'react';
import './styles/HomePage.css';
import adminIcon from '../assets/admin_icn.svg'; // Ensure the path to the icon is correct
import adminIconWhite from '../assets/admin_white.svg'; // Ensure the path to the icon is correct

const HomePage = ({ onApply, onViewStatus, onAdminView }) => {
    const handleApplyClick = () => {
        onApply(); // Use the passed function to navigate
    };

    return (
        <div className="page">
            <div className="center-box">
                <h3>Chainsaw registration</h3>
                <p>Application for Chainsaw registration</p>
                <button className="apply-button" onClick={handleApplyClick}>APPLY</button>
                <button className="view-status-button" onClick={onViewStatus}>View Status</button>

                <button className="admin-view-button" onClick={onAdminView}>
                    <img src={adminIcon} alt="Admin Icon" className="admin-icon_black" />
                    <img src={adminIconWhite} className="admin-icon_white" />
                    Admin View
                </button>
            </div>
        </div>
    );
};

export default HomePage;
