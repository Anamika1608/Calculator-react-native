import React from 'react';
import { Image, View, StyleSheet, Dimensions } from 'react-native';
import logo from '../../assets/images/logo.webp';

function IntroScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Image 
          source={logo} 
          style={styles.innerImg}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', 
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inner: {
    width: width * 0.8, 
    height: height * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5', 
    borderRadius: 20, 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  innerImg: {
    width: '70%', 
    height: '70%',
    aspectRatio: 1, 
  },
});

export default IntroScreen;