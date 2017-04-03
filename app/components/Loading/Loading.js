import React from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import styles from './styles';

const Loading = (props) => {
  return (
    <Image
      //source={images.background}
      style={styles.backgroundImage}>

      <ActivityIndicator
        animating
        size={props.size}
        {...props}
        />
      
    </Image>
  );
};

Loading.propTypes = {
  size: React.PropTypes.string,
};

Loading.defaultProps = {
  size: 'large',
};

export default Loading;

//<Text style={styles.cancelText} onPress={() => alert('cancelled')}>want to cancel ?</Text>