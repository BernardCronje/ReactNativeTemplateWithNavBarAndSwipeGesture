import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';

const window = Dimensions.get('window');
export default StyleSheet.create({

  loginContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 25
  },
  headerText: {
    fontSize: 50,
    color: colors.headerText,
    backgroundColor: 'transparent'
  },
  textInput: {
    height: 40,
    marginTop: 20,
    paddingLeft: 10,
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: 'white',
    borderWidth: 1,
    color: 'white',
  },
  backgroundImage: {
    backgroundColor: 'black',
    paddingHorizontal: 15,
    //resizeMode: 'cover',
    flex: 1,
    width: null,
    height: null,
    paddingTop: 100,
  },
  signInButton: {
    flexDirection: 'column',
    marginTop: 20
  },
  button: {
    height: 40,
    backgroundColor: 'rgba(28,105,212,1)',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 15
  },
  clearButton: {
    height: 40,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  clearButtonText: {
    color: 'white',
    fontSize: 13
  },
  error: {
    height: 28,
    justifyContent: 'center',
    width: window.width,
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
  }
});
