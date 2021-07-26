import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
    return (
        <>
        <nav className="navbar">
    <ul className="navbar-nav">
      <li className="logo">
        <Link to="#" className="nav-link">
          <span className="link-text logo-text" style={{fontSize: '1px !important'}}><Link to="/">Portfolio</Link></span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            fill='blue'
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
          >
            <g className="fa-group">
              <path
                fill="aqua"
                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                className="fa-secondary"
              ></path>
              <path
                fill="aqua"
                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                className="fa-primary"
              ></path>
            </g>
          </svg>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/" className="nav-link">
        <i className="fas fa-home"></i>
          <span className="link-text">Home</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/resume" className="nav-link">
        <i className="fas fa-address-card"></i>
          <span className="link-text">Resume</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/projects" className="nav-link">
        <i className="fas fa-code"></i>
          <span className="link-text">Projects</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/aboutme" className="nav-link">
            <i className="fas fa-user-circle"></i>
          <span className="link-text">About Me</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/contactme" className="nav-link">
            <i className="fas fa-at"></i>
          <span className="link-text">Contact Me</span>
        </Link>
      </li>
    </ul>
  </nav>
    </>
    )
}
