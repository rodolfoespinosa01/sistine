import { useContext, useState } from 'react';
import Sistine_S_icon from '../images/Sistine_S_icon.png';
import SistineBrush from '../images/SistineBrush.png';

function Footer() {
    const myStyle = {
        marginLeft: '190px',
      };

      const myStyle2 = {
        marginLeft: '90px', 
      };


  return (
    <footer className="bg-warning-subtle text-black pt-3 pb-3">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-auto ">
            <img src={Sistine_S_icon} alt="Left Logo" />
          </div>
          <div className="col-auto" style={myStyle}>
            <div className="d-flex align-items-center">
              <p className="mb-0">&copy; {new Date().getFullYear()} Sistine</p>
            </div>
          </div>
          <div className="col-auto" style={myStyle2}>
            <img src={SistineBrush} alt="Right Logo" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;