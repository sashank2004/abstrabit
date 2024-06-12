import profileicon from './images/peopleicon.png';
import dropdownicon from './images/belowicon.png';
import logo from './images/logo.png';
import up from './images/up.png';
import right from './images/right.png';
import arrowup from './images/arrowup.png';
import two from './images/two.png';
import three from './images/three.png';
import './App.css';
import React, { useState } from 'react';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
function Appbar(){
  const [menuOpen, setMenuOpen] = useState(false);
  const[supportOpen,setSupportOpen]=useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const handleSupport=()=>{
    setSupportOpen(!supportOpen);
  }
  return (<div className="appbar">
    <div>
      <img className='logo' src={logo}/>
    </div>
    <div className="appbar-icons">
      <div className="appbar-links">
        <a href="#Dashboard">Dashboard</a>
        <a href="#FAQs">FAQs</a>
      </div>
      <div style={{display:"flex",alignContent:"center"}}>
        <div style={{marginRight:"40px",marginTop:"7px",cursor:"pointer"}}> <a onClick={handleSupport}>Support</a>
        {supportOpen&&(<div className="support">
          <div style={{display:"flex",textAlign:"center"}}>
          <CallIcon/>              
            <div>
            <a href="#profile">+91 88777 37777<br></br>+91 887775666<br></br></a>
            </div>
            </div>
            <div style={{display:"flex"}}>
            <div><EmailIcon/></div>
            <a href="#account">support@silverbullet.in<br></br>info@silverbullet.in</a>
            </div>     
          </div>)}</div>
          <div className="appbar-account">
        {!menuOpen &&(<div className="profile-button" onClick={handleMenuToggle}>
            <img className="profile-icon" src={profileicon}/>
            <img className="dropdown-icon" src={dropdownicon}/>
        </div>)}
        {menuOpen &&(<div className="profile-click-button" onClick={handleMenuToggle}>
            <img className="profile-icon" src={profileicon}/>
            <img className="dropdown-icon" src={arrowup}/>
        </div>)}
        {menuOpen && (
          <div className="menu">
            <div style={{display:"flex"}}>
            <img style={{width:"50px",height:"50px"}} src={up}/>
            <a href="#profile">My Profile</a>
            </div>
            <div style={{display:"flex"}}>
            <img style={{width:"50px",height:"50px"}} src={two}/>
            <a href="#profile">My FDs</a>
            </div>
            <div style={{display:"flex"}}>
            <img style={{width:"50px",height:"50px"}} src={three}/>
            <a href="#profile">My Transactions</a>
            </div>
            <div style={{display:"flex"}}>
            <img style={{width:"50px",height:"50px"}} src={right}/>
            <a href="#profile">Logout</a>
            </div>
          </div>
        )}
      </div>
      </div>
      
    </div>
  </div>
  )
}
export default Appbar