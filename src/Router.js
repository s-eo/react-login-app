import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import App from './components/App/App';
import Header from './components/Header/Header';
import Login from './components/Login/Login';

const Router = () => (
            <HashRouter>
                <div>
                    <Route path = "/" component = {App} />
                    // <Route path = "/" exact component = {Header} />
                    <Route path = "/login" component = {Login} />
                </div>
            </HashRouter>
        );

export default Router;
