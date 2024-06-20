import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="d-flex" id="wrapper">
        <Sidebar />
        <div id="page-content-wrapper">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
