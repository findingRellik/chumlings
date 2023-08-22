import React, {useState} from 'react';
import './App.css';
import BannerImage from './components/BannerImage';
import SideNav from './components/SideNav';
import EditableTextBox from './components/EditableTextBox';

function Resume(props, state) {
  const [wid, setWid] = useState('0%');
  const openSidenav = ( ) => {
    setWid('25%')
  }
  
  const closeSidenav = ( ) => {
    setWid('0%')
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button className="menu-button" onClick={openSidenav}>MENU</button>
          <SideNav width={wid} closeNav={closeSidenav} />
        </div>
        <BannerImage />
        <div>
          <h1>Welcome to my Resume!</h1>
          <EditableTextBox name="Your Text"/>
          <h3>Name HERE</h3>
        </div>
      </header>
    </div>
  );
}

export default Resume;
