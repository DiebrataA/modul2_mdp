import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const main = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    width,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
  },
  view: {
    width: '100%',
    height: 500,
  },
  view1: {
    width: '100%',
    height: 170,
    justifyContent: 'center',
  },
  view2: {
    width: '100%',
    height: 200,
  },
  image: {
    width: 150,
    height: 150,
  },
  text: {
    fontSize: 15,
  },
});

export default main;
