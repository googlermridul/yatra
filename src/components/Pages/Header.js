import React from 'react';
import { Link } from 'react-router-dom';
import hamburger from '../../images/menu.png'
import plane from '../../images/paper-plane.png'
import useAuth from '../../hooks/useAuth';

const Header = () => {
   const {user, logOut} = useAuth()

   return (
      <nav className="navbar navbar-expand-md fixed-top shadow-sm">
         <div className="container">
            <Link className="link" to="/home">
               <h2 className="logo"><img src={plane} alt="" /> Yatra</h2>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <img className="hamburger" src={hamburger} alt="" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav">
                  <li className="nav-item">
                     <Link className="link" to="/home">Home</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="link" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="link" to="/tours">Tours</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="link" to="/events">Events</Link>
                  </li>

                  <li className="nav-item">
                     {
                        user.email ? 
                        <button className="link" onClick={logOut}>Logout</button> : 
                        <Link className="link" to="/login">Login</Link>
                     }
                  </li>
                  {/* <li className="nav-item">
                     {
                        user.email && <span className="name">{user.displayName}</span>
                     }
                  </li> */}
               </ul>
               <span className="navbar-text">
                  <button className="btn-yatra green">Donate</button>
               </span>
            </div>
         </div>
      </nav>
   );
};

export default Header;