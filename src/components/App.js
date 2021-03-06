import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import Signup from './auth/Signup';
import Logout from './auth/Logout';
import Login from './auth/Login';
import Features from './Features';
import Footer from './Footer';

function App() {
    return (
        <>
            <Router>
                <div style={{ flex: '1 0 auto' }}>
                    <Header />
                    <main className='container'>
                        <Route exact path='/' component={Landing} />
                        <Route exact path='/signup' component={Signup} />
                        <Route exact path='/features' component={Features} />
                        <Route exact path='/logout' component={Logout} />
                        <Route exact path='/login' component={Login} />
                        <Router exact path='*' component={Landing} />
                    </main>
                </div>
                <Footer />
            </Router>
        </>
    );
}

export default App;
