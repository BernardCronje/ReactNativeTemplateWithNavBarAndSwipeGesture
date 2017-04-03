import React, { Component } from 'react';
import { LayoutAnimation, Alert } from 'react-native';
import SignIn from './SignIn';
import AccountService from '../../services/account-service';

import Loading from '../../components/Loading';
import Common from '../../services/common';
import LoyaltyApp from '../../index';

class SignInController extends Component {
    constructor(props) {
        super(props);

        this.mounted = false;
        this.state = {
            username: '',
            password: '',

            isLoading: false,
        };
    }

    componentWillMount() {
        this.mounted = true;
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    validInput(overrideConfirm) {
        const { username, password} = this.state;
        let valid = true;

        if (username.length === 0 || password.length === 0 ||
            username === 'username' || password === 'password') {

            valid = false;
        }

        return valid;
    }

    handleSignIn(changeComponent) {
        if (this.validInput(true) === true) {
            this.setState({ isLoading: true, });

            const { username, password } = this.state;

            // add signin logic here

            // let timeout = new Promise((resolve, reject) => {
            //     setTimeout(reject, 10000, 'request timed out');
            // })

            //let fetch = new Promise(() => {
            AccountService.signin(username, password)
                .then((response) => response.json())
                .then((responseJson) => {
                    Common.authorizationToken = responseJson.result;

                    if (Common.authorizationToken !== null && Common.authorizationToken.length > 0)
                        changeComponent('NavBar');
                    else
                        Alert.alert(
                            "Signin Failure:",
                            "Invalid username and password.",
                            [{ text: "close" }]
                        );

                }).finally(() => {
                    //this.setState({ isLoading: false, });
                })
                .catch((error) => {
                    Alert.alert(
                        "Signin Error:",
                        "An error ocurred during the signin process.",
                        [{ text: "close" }]
                    );
                });
            //});

            // Promise.race([timeout, fetch])
            //     .then(json => {/*do nothing*/ })
            //     .catch(err => {
            //         if (this.mounted) {
            //             this.setState({ isLoading: false, });
            //             Alert.alert(
            //                 "Signin Failure:",
            //                 "The request to sign in timed out. Please try again.",
            //                 [{ text: "close" }]
            //             );
            //         }
            //     });

        }
        else {
            Alert.alert(
                "Invalid credentials:",
                "A valid username and Password are required.",
                [{ text: "close" }]
            );
        }
    }

    render() {
        // if (this.state.isLoading == true)
        //     return (
        //         <Loading />
        //     )
        // else
            return (
                <SignIn
                    updateState={this.setState.bind(this)}
                    signIn={this.handleSignIn.bind(this)}
                    changeComponent={this.props.changeComponent}
                    {...this.state}
                    />
            );
    }
}

export default SignInController;
