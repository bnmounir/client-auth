import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
        });
    }
    renderLinks = () => {
        return this.props.authenticated ? (
            <>
                <li>
                    <Link to='/logout'>Logout</Link>
                </li>
                <li>
                    <Link to='/features'>Features</Link>{' '}
                </li>
            </>
        ) : (
            <>
                <li>
                    <Link to='/signup'>Sign up</Link>
                </li>
                <li>
                    <Link to='/login'>Log in</Link>
                </li>
            </>
        );
    };
    render() {
        return (
            <header>
                <nav className='blue-grey darken-4'>
                    <div className='nav-wrapper container'>
                        <Link className='brand-logo' to='/'>
                            Redux Auth
                        </Link>
                        <a
                            href='#a'
                            data-target='mobile-demo'
                            className='sidenav-trigger'
                        >
                            <i className='material-icons'>menu</i>
                        </a>
                        <ul className='right hide-on-med-and-down'>
                            {this.renderLinks()}
                        </ul>
                    </div>
                </nav>
                <ul className='sidenav' id='mobile-demo'>
                    {this.renderLinks()}
                </ul>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
