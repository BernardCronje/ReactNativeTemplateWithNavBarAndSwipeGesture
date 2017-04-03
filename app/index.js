
import React, { Component } from 'react';
import { Text, View, TouchableHighlight, PanResponder } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Style from './styles';

import SignIn from './routes/signIn';
import NavBarButton from './components/NavBarButton/NavBarButton';

var previousLeft = 0;
var previousTop = 0;

class TemplateApp extends Component {


    constructor(props) {
        super(props);

        // Here we set the default selected tab button.
        this.state = {
            //routeName: 'SignIn',
            //selectedTab: 'SignIn',
            routeName: 'Tab 1',
            selectedTab: 'Tab 1',
        }
    }

    changeState = (newRoute) => {
        var _selectedTab = newRoute;
        this.setState({
            routeName: newRoute,
            selectedTab: _selectedTab
        });
    }

    swipe = (newRoute) => {
        var _selectedTab = newRoute;
        this.setState({
            routeName: newRoute,
            selectedTab: _selectedTab
        });
    }

    render() {
        if (this.state.routeName == 'SignIn') {
            return (
                <SignIn />
            );
        }
        else
            return (
                // Here you can add another NavBarButton. Use Fontawesome icon.
                <View style={Style.rootContainer}

                    >
                    <View style={Style.navBar}>
                        <NavBarButton value="Tab 1" onPress={() => this.changeState('Tab 1')} name='home' selectedTab={this.state.selectedTab}></NavBarButton>
                        <NavBarButton value="Tab 2" onPress={() => this.changeState('Tab 2')} name='star' selectedTab={this.state.selectedTab}></NavBarButton>
                        <NavBarButton value="Tab 3" onPress={() => this.changeState('Tab 3')} name='gift' selectedTab={this.state.selectedTab}></NavBarButton>
                        <NavBarButton value="Tab 4" onPress={() => this.changeState('Tab 4')} name='user' selectedTab={this.state.selectedTab}></NavBarButton>
                    </View>
                    <View style={Style.contentPlaceHolder}
                        {...this.panResponder.panHandlers}
                        >
                        <Routing route={this.state.routeName} />
                    </View>
                </View>
            )
    }


    componentWillMount() {
        this.panResponder = PanResponder.create({

            onMoveShouldSetPanResponder: (evt, gestureState) => {
                return this.getDirectionAndColor(gestureState);
            },

            onPanResponderMove: (evt, gestureState) => {
                const {dx, dy, vx, vy} = gestureState;

                this.previousLeft = 0;
                this.previousLeft = this.previousLeft + dx;

                this.previousTop = 0;
                this.previousTop = this.previousTop + dy;
            },
            onPanResponderTerminate: (e, gestureState) => {
                if (gestureState.dx == 0 && gestureState.dy == 0)
                    return true;
                this.handleSwipeEnd();
            },
            onPanResponderRelease: (e, gestureState) => {
                if (gestureState.dx == 0 && gestureState.dy == 0)
                    return true;
                this.handleSwipeEnd();
            },

            onPanResponderTerminationRequest: () => true,
        });
    }

    getDirectionAndColor = ({ moveX, moveY, dx, dy}) => {
        const draggedDown = dy > 30;
        const draggedUp = dy < -30;
        const draggedLeft = dx < -30;
        const draggedRight = dx > 30;

        if (draggedDown)
            return true;
        if (draggedUp)
            return true;
        if (draggedLeft)
            return true;
        if (draggedRight)
            return true;

        return false;

    }

    handleSwipeEnd = () => {
        if (this.previousLeft == 0)
            return;

        if (this.previousTop == 0)
            return;

        if (this.previousTop < 100 && this.previousTop > -100) {
            if (this.previousLeft > 50) {
                switch (this.state.selectedTab) {
                    case 'Tab 1':
                        this.changeState('Tab 2');
                        break;
                    case 'Tab 2':
                        this.changeState('Tab 3');
                        break;
                    case 'Tab 3':
                        this.changeState('Tab 4');
                        break;
                    case 'Tab 4':
                        this.changeState('Tab 1');
                        break;
                    default:
                        break;
                }
            }

            if (this.previousLeft < -50) {
                switch (this.state.selectedTab) {
                    case 'Tab 1':
                        this.changeState('Tab 4');
                        break;
                    case 'Tab 2':
                        this.changeState('Tab 1');
                        break;
                    case 'Tab 3':
                        this.changeState('Tab 2');
                        break;
                    case 'Tab 4':
                        this.changeState('Tab 3');
                        break;
                    default:
                        break;
                }
            }
        }

        this.previousLeft = 0;
    }

}


// Here you add the added NavBarButton's routing-if-statement.
const Routing = (props) => {

    switch (props.route) {
        case 'Tab 1': {
            return (
                <Text>Tab 1</Text>
            );
        }
        case 'Tab 2': {
            return (
                <Text>Tab 2</Text>
            );
        }
        case 'Tab 3': {
            return (
                <Text>Tab 3</Text>
            );
        }
        case 'Tab 4': {
            return (
                <Text>Tab 4</Text>
            );
        }
        default: {
            <Text>Select your favourite Tab Button</Text>
        }
    }

};



export default TemplateApp;