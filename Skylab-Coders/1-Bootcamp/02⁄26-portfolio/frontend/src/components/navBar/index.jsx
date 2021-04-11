/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './index.scss';

export default function NavBar() {
  return (
    <header>
      <nav className="container">
        <div className="nav__maindiv">
          <a className="nav__picture-name" href="index.html">
            <span className="nav__picture--anchor">
              <img className="nav__portrait" src="https://trello-attachments.s3.amazonaws.com/603b798354daf559b3f09c34/603b79a4e9f1ee7a67f583e1/98bfdcefd7f8c1a24768f786ba5d143c/portrait.png" alt="portrait user" />
            </span>
            <h3 className="nav__name--anchor">Pablo H. Depares</h3>
          </a>
          <ul className="nav-bar__menu">
            <li className="nav-bar__item">
              <a className="nav-bar__link" href="#landing">Home</a>
            </li>
            <li className="nav-bar__item">
              <a className="nav-bar__link" href="#about-me">About Me</a>
            </li>
            <li className="nav-bar__item">
              <a className="nav-bar__link" href="#whatido">What I Do</a>
            </li>
            <li className="nav-bar__item">
              <a className="nav-bar__link" href="#landing">Resume</a>
            </li>
            <li className="nav-bar__item">
              <a className="nav-bar__link" href="#landing">Portfolio</a>
            </li>
            <li className="nav-bar__item">
              <a className="nav-bar__link" href="#landing">Contact</a>
            </li>
          </ul>
          <ul className="nav__social-icons">
            <li className="social-icons__item">
              <a className="social__icon" href="#landing"><i className="fab fa-twitter" /></a>
            </li>
            <li className="social-icons__item">
              <a className="social__icon" href="https://www.linkedin.com/in/pablo-h-depares-b86367134/"><i className="fab fa-linkedin-in" /></a>
            </li>
            <li className="social-icons__item">
              <a className="social__icon" href="https://github.com/pehedepa/kender"><i className="fab fa-github" /></a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
