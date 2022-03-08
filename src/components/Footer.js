import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import "./Footer.css";
import ReactDOM from 'react-dom';

const Footer = () => (
  	<footer className="text-center text-dark" >    
        <div className="text-center text-dark p-3" >
          © 2022 Copyright:
          <a className="text-dark" target="_blank" href="https://modiharshit.github.io"> Harshit Modi</a>
        </div>
    </footer>
);

export default Footer;
