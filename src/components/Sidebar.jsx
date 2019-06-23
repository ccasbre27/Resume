import React from 'react';

const Sidebar = ({ children }) => (
    <div className="Sidebar">
        <div className="Sidebar-container">
            Sidebar
            {children}
        </div>
    </div>
);

export default Sidebar;
