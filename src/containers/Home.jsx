import React, { Component } from 'react';
import home from '../images/home.webp';

export default class Home extends Component {
    render() {
        return (
            <header className="App-header">
                <h1> Teacher Approved</h1>
                <h2>By Team 1: Avery,Adrionna,Cameron </h2>
                <img src="https://1.bp.blogspot.com/-kAEixPwMvqA/U_LTeuU2zsI/AAAAAAAANLY/Yb7pjX3ZemE/s1600/TEACHER-APPROVED-logo-10.png" alt="logo" />
                <p>
                   <p> Get your website approved now.</p>
          </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
          </a>
            </header>
        )
    }
}