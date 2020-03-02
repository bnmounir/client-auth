import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../actions';

class Login extends Component {
    handleSubmit = formProps => {
        this.props.login(formProps, () => {
            this.props.history.push('/features');
        });
    };

    render() {
        const { handleSubmit } = this.props;
        return (
            <>
                <br />
                <form
                    onSubmit={handleSubmit(formProps =>
                        this.handleSubmit(formProps)
                    )}
                >
                    <div className='input-field'>
                        <Field
                            id='email'
                            name='email'
                            type='text'
                            component='input'
                            autoComplete='none'
                        />
                        <label htmlFor='email'>Email</label>
                    </div>
                    <div className='input-field'>
                        <Field
                            id='password'
                            name='password'
                            type='password'
                            component='input'
                            autoComplete='none'
                        />
                        <label htmlFor='password'> password</label>
                    </div>
                    <div className='red-text'>{this.props.errorMessage}</div>
                    <button className='btn blue-grey darken-3'>Login</button>
                </form>
            </>
        );
    }
}
function mapStateToProps({ auth }) {
    console.log(auth.errorMessage);
    return { errorMessage: auth.errorMassage };
}
// export default connect(mapStateToProps, { login })(
//     reduxForm({ form: 'login' })(Login)
// );

export default compose(
    connect(mapStateToProps, { login }),
    reduxForm({ form: 'login' })
)(Login);
