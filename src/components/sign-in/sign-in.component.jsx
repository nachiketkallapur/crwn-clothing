import React, { Component } from 'react';
import { connect } from 'react-redux';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component.jsx'
import CustomButton from '../custom-button/custom-button.component.jsx'
//import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { emailSignInStart }  = this.props;
        const { email, password } = this.state;

        emailSignInStart(email,password);
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const { googleSignInStart } = this.props;
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="email"
                        required />

                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"
                        required />
                    <div className="buttons">
                        <CustomButton type="submit" >Sign In</CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In With Google</CustomButton>
                        {/* <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>  prop without any value has a default value of true */}
                    </div>

                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        googleSignInStart: () => dispatch(googleSignInStart()),
        emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password}))
    }
}

export default connect(null,mapDispatchToProps)(SignIn);
