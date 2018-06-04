import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
    }

    render() {
        return (
            <div className="App container">
                <div className="container-fluid">
                    <nav className="navbar-nav App__nav navbar-right">
                        <ul class="nav navbar-nav">
                            <Link to="/login">
                                <span class="glyphicon glyphicon-log-in"></span>
                                {!this.isLoggedIn ? ' Login' : ' Logout'}
                            </Link>
                        </ul>
                    </nav>
                    <header className="App-header">
                        <h1 className="App-title">React login-password app</h1>
                    </header>
                </div>
            </div>
        );
    }
}

export default App;
