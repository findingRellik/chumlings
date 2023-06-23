import React, {useState} from 'react';
import './App.css';
import AlbumMaker from './components/AlbumMaker';
import BannerImage from './components/BannerImage';
import SideNav from './components/SideNav';

function App(props, state) {
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
        <SideNav width={wid} closeNav={closeSidenav} />
        <button className="menu-button" onClick={openSidenav}>MENU</button>
        <BannerImage />
        <div>
          <h1>Welcome to my Photojournal!</h1>
          <h3>Austin Metzner</h3>
          <AlbumMaker />
        </div>
      </header>
    </div>
  );
}

export default App;
