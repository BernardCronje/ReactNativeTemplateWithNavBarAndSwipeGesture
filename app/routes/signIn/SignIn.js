import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Style from './styles';


class SignIn extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (

            // <Image
            //     source={images.background}
            //     style={Style.backgroundImage}>
            <View style={Style.backgroundImage}>
                <ScrollView>
                    <Text style={Style.headerText}>Template</Text>
                    <Text style={Style.headerText}>App</Text>

                    <View style={Style.loginContainer}>
                        <TextInput
                            style={Style.textInput}
                            placeholder='username'
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholderTextColor='rgba(255,255,255,0.5)'
                            onChangeText={(username) => this.props.updateState({ username })}
                            underlineColorAndroid="transparent"
                            onSubmitEditing={(event) => {
                                this.refs.txtPassword.focus();
                            } }
                            />

                        <TextInput
                            ref='txtPassword'
                            style={Style.textInput}
                            placeholder='password'
                            autoCapitalize='none'
                            placeholderTextColor='rgba(255,255,255,0.5)'
                            autoCorrect={false}
                            onChangeText={(password) => this.props.updateState({ password })}
                            underlineColorAndroid="transparent"
                            secureTextEntry
                            onSubmitEditing={(event) => {
                                this.props.signIn(this.props.changeComponent);
                            } }
                            />

                        <TouchableHighlight
                            style={Style.button}
                            onPress={() => this.props.signIn(this.props.changeComponent)}>
                            <Text style={Style.buttonText}>Sign In</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            onPress={() => this.props.changeComponent('ForgotPassword')}
                            style={Style.clearButton}>
                            <Text style={Style.clearButtonText}>Forgot your password?</Text>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
            </View>
            // </Image>

        )

    };
};

SignIn.propTypes = {
    updateState: React.PropTypes.func,
    signIn: React.PropTypes.func,
    confirmPasswordVisible: React.PropTypes.bool,
};

export default SignIn;
