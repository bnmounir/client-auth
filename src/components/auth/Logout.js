import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions';

export class Logout extends Component {
    componentDidMount() {
        this.props.logout();
    }
    handleRedirect = () => {
        setTimeout(() => {
            this.props.history.push('/');
        }, 2000);
    };
    render() {
        return (
            <>
                {this.handleRedirect()}
                <h3>Catch you in the flippity flip!</h3>
            </>
        );
    }
}

export default connect(null, { logout })(Logout);
