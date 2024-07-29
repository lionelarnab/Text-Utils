import React from "react";
import PropTypes from "prop-types";
import './navbar_style.css';
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} ${props.navbarColor === 'light' ? `bg-${props.mode}`: `bg-${props.navbarColor}`}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/"> */}
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li> */}
          </ul>
          {/*<form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>*/}
          {/* <div className="form-check form-check-inline">
    <input className="form-check-input1" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label className="form-check-label" htmlFor="inlineRadio1">1</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input1" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label className="form-check-label" htmlFor="inlineRadio2">2</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input1" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled/>
  <label className="form-check-label" htmlFor="inlineRadio3">3 (disabled)</label>
</div> */}
<div className="btn-class btn-class-inline">
<button className="btn mx-2" id="first_btn" type="submit" onClick={()=> props.toggleNavbar('#3bdc3b')} ></button>
</div>
<div className="btn-class btn-class-inline">
<button className="btn mx-2" id="second_btn" type="submit" onClick={()=> props.toggleNavbar('yellow')}></button>
</div>
<div className="btn-class btn-class-inline">
<button className="btn mx-2" id="third_btn" type="submit" onClick={()=> props.toggleNavbar('#ec3333')}></button>
</div>
          <div className={`form-check form-switch mx-3 text-${props.mode === 'light'? 'dark':'light'}`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
        </div>
        </div>
      </div>
    </nav>
  );
}
// Proptypes 
Navbar.propTypes = { title: PropTypes.string.isRequired // To make it mandatory field
  , aboutText: PropTypes.string };

// For default props
Navbar.defaultProps = {
  title: "Hello I Am",
  aboutText: "Hero Alom"
}