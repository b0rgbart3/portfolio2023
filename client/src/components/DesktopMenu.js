// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom"; 
import { Link, NavLink } from "react-router-dom";
import "./DesktopMenu.css";

//let page="/";

// function getPage() {
//   let location = useLocation();
//   if (location && location.pathname) {
//     page = location.pathname;
//   }
// }

function DesktopMenu() {

  // getPage();
  // const [linkStyle, setLinkStyle] = useState("");

  // useEffect(() => {
  //   let myTimer = setTimeout( () => {
  //     setLinkStyle("state2");
  //     clearTimeout(myTimer);
  //   }, 300);
  //   // let React clear our timeout so we don't have a memory leak
  //   return () => {
  //     clearTimeout(myTimer);
  //   }
  // } );

  return (
    <div className="desktopMenu">
      <ul className="dmenuList">
      
      <li>
      <NavLink to={`/`} 
      className={({ isActive, isPending }) =>
        isActive ? "active": isPending? "pending": ""}>/BART DORITY</NavLink>
      </li>
      <li>
      <NavLink to={'skills'}  className={({ isActive, isPending }) =>
        isActive ? "active": isPending? "pending": ""}>/SKILLS</NavLink></li>
      <li>
      <NavLink to={'projects'}  className={({ isActive, isPending }) =>
        isActive ? "active": isPending? "pending": ""}>/PROJECTS</NavLink></li>
      <li>
      <NavLink to={'resume'}  className={({ isActive, isPending }) =>
        isActive ? "active": isPending? "pending": ""}>/RESUME</NavLink></li>
      <li>
      <NavLink to={'endorsements'}  className={({ isActive, isPending }) =>
        isActive ? "active": isPending? "pending": ""}>/ENDORSEMENTS</NavLink></li>
      <li>
      {/* <Link to={'contact'}>/CONTACT</Link> */}
      <NavLink to={`contact`} 
      className={({ isActive, isPending }) =>
        isActive ? "active": isPending? "pending": ""}>/CONTACT</NavLink>
      </li>
        {/* <Link to="/">
        { page==="/"?
        (   <li className={ 'active ' + linkStyle}>/BART DORITY</li>):
        (   <li className={ linkStyle}>/BART DORITY</li>)}
      
        </Link>
        <Link to="/skills">
        { page==="/skills"?
        (   <li className={ 'active ' + linkStyle}>/SKILLS</li>):
        (   <li className={ linkStyle}>/SKILLS</li>)}
        </Link>
        <Link to="/projects">
        { page==="/projects"?
        (   <li className={ 'active ' + linkStyle}>/PROJECTS</li>):
        (   <li className={ linkStyle}>/PROJECTS</li>)}

        </Link>
        <Link to="/resume">
        { page==="/resume"?
        (   <li className={ 'active ' + linkStyle}>/RESUME</li>):
        (   <li className={ linkStyle}>/RESUME</li>)}
        </Link>
        {/* <Link to="/endorsements">
        { page==="/endorsements"?
        (   <li className={ 'active ' + linkStyle}>/ENDORSEMENTS</li>):
        (   <li className={ linkStyle}>/ENDORSEMENTS</li>)}
        </Link> */}
        {/* <Link to="/contact">
        { page==="/contact"?
        (   <li className={ 'active ' + linkStyle}>/CONTACT</li>):
        (   <li className={ linkStyle}>/CONTACT</li>)}
        </Link> */} 
      </ul>
    </div>
  );
}

export default DesktopMenu;
