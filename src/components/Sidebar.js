import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Sidebar() {
  return (
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="sidebar-heading">Menu</div>
      <Nav className="flex-column">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#dashboard">Dashboard</Nav.Link>
        <Nav.Link href="#settings">Settings</Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;
