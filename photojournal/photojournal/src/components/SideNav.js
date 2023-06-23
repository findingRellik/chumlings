import React from 'react';
import './master.css'
import Resume from '../Resume';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class SideNav extends React.Component {

   render() {  

      return ( 
         <div className="sidenav" style={{width: this.props.width}}>
            <button className="close-menu-button" onClick={this.props.closeNav}>X</button>
            <Link to="/" className="menu-item">HOME</Link>
            <Link to="/resume" className="menu-item">RESUME</Link>
            <Link to="/login" className="menu-item">LOG IN</Link>
         </div>
      )

    }

};

export default SideNav;