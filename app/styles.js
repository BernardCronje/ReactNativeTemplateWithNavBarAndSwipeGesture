

'use strict';

import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({

    rootContainer: {
        flex: 1
    },
    navBar: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f3f3f3',
        shadowColor: "#000000",
        height: 13
    },
    navBarButton: {
        flex: 1, backgroundColor: 'whitesmoke',
    },
    navBarButtonContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgrey',
    },
    navBarButtonIcon: {
        flex: 1,
        fontSize: 20,
        marginTop: 13,
        color: 'grey',
    },
    navBarButtonIconSelected: {
        flex: 1,
        fontSize: 22,
        marginTop: 13,
        color: 'rgba(28,105,212,1)',
    },
    navBarButtonText: {
        flex: 1,
        fontSize: 9,
        color: 'grey',
    },
    navBarButtonTextSelected: {
        flex: 1,
        fontSize: 9,
        color: 'rgba(28,105,212,1)',
    },
    // navBarDisplay: {
    //     flex: 9, 
    //     backgroundColor: 'lightgrey',
    //     borderWidth: 0.5,
    //     borderColor: 'grey'
    // },
    inputButtonHighlighted: {
        backgroundColor: 'rgb(75, 150, 229)'
    },
    contentPlaceHolder: {
        flex: 9,
        padding: 10,
        backgroundColor: 'whitesmoke'
    },
    
})


export default Style;