import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = (props) =>  (
            <div className="App container">
                <div className="container-fluid">
                    <nav className="navbar-nav App__nav navbar-right">
                        <ul class="nav navbar-nav">
                            <Link to="/login">
                                <span class="glyphicon glyphicon-log-in"></span>
                                {!this.props.isLoggedIn ? ' Login' : ' Logout'}
                            </Link>
                        </ul>
                    </nav>
                    <header className="App-header">
                        <h1 className="App-title">React login-password app</h1>
                    </header>
                </div>
            </div>
        );

export default Header;
