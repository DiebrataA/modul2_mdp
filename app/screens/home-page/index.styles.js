import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const main = StyleSheet.create({
  container: {
    width,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    width,
    paddingLeft: 10,
    paddingRight: 10,
  },
  cardView: {
    width: '100%',
    height: 170,
    flexDirection: 'row',
  },
  cardView1: {
    width: '40%',
    height: 170,
    justifyContent: 'center',
  },
  cardView2: {
    width: '60%',
    height: 170,
  },
  image: {
    width: 150,
    height: 150,
  },
  text: {
    fontSize: 15,
    marginTop: 15,
  },
});

export default main;
