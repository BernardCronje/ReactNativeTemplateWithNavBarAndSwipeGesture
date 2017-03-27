

import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Style from './styles';


const NavBarButton = (props) => {
    return (
        <TouchableHighlight style={Style.navBarButton}
            underlayColor="rgb(233, 233, 233)"
            onPress={props.onPress}>
            <View style={Style.navBarButtonContainer}>
                <Icon
                    style={[Style.navBarButtonIcon, props.value === props.selectedTab ? Style.navBarButtonIconSelected : null]}
                    name={props.name} />
                <Text style={[Style.navBarButtonText, props.value === props.selectedTab ? Style.navBarButtonTextSelected : null]}>{props.value}</Text>
            </View>
        </TouchableHighlight>
    )
}

export default NavBarButton;