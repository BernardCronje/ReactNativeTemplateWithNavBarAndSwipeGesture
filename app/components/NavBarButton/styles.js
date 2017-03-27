

'use strict';

import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({


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

    
})


export default Style;