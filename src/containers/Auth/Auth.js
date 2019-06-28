import React, { Component } from 'react';

//redux
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

//firebase stuff
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import 'firebase/auth';


const config = {
    apiKey: 'AIzaSyC5zeqTa6JZK12UXxfv7YknmQS2fez_EuY',
    authDomain: 'my-expenses-cf95d.firebaseapp.com',
};
firebase.initializeApp(config);


class Auth extends Component {
    state = {
        isSignedIn: false
    };

    uiConfig = {
        signInFlow: 'popup',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccessWithAuthResult: () => false
        }
    };

    render() {

        let authComponent = this.props.user === null
            ? <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
            : <Redirect to="/dashboard" />

        return authComponent;
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}


export default connect(mapStateToProps)(Auth);