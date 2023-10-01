import React from 'react';
import { Spin } from 'antd';
import './Spinner.css'; // Create a CSS file for styling

const Spinner = () => {
  return (
    <div className="loader-container">
  <div className="complex-spinner">
    <div className="spinner-circle">
      <div className="spinner-bar"></div>
    </div>
  </div>
</div>



  

  
  

    // <div className="spinner-container">
    //   <Spin size="large" />
    // </div>
  );
};

export default Spinner;
