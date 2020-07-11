import React, { Component } from 'react';
import home from '../images/home.webp';

export default class Home extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={home} alt="logo" />
                <p>
                    Edit <code>src/containers/Home.jsx</code> and save to reload.
          </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Make this House a Home.
          </a>
            </header>
        )
    }
}