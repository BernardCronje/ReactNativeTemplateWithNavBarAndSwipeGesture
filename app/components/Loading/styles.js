import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },

  backgroundImage: {
    paddingHorizontal: 15,
    resizeMode: 'cover',
    flex: 1,
    width: null,
    height: null,

    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelText: {
    fontSize: 15,
    fontFamily: 'BMWMotorrad-TypeGlobalPro-Light',
    color: colors.headerText,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 0.5,
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  }
});
