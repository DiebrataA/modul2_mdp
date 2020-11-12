import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const main = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    width,
    paddingLeft: 10,
    paddingRight: 10,
    position: 'absolute',
  },
  view: {
    flex: 1,
    alignItems: 'center',
  },
  view1: {
    justifyContent: 'center',
    marginBottom: 20,
    alignItems: 'center',
  },
  view2: {
    backgroundColor: '#fff',
    flex: 1,
    width: '95%',
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#FFF',
  },
  text: {
    fontSize: 15,
  },
  titleContainer: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: '#FFF',
  },
  nameView: {
    marginTop: 8,
    alignItems: 'center',
  },
  nameText: {
    fontSize: 20,
    letterSpacing: 0.3,
    marginBottom: 3,
  },
  emailText: {
    letterSpacing: 0.3,
    fontSize: 15,
  },
  list: {
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderColor: '#a5a5a5',
  },
  cobaja: {
    backgroundColor: '#960004',
    height: 180,
    width,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
});

export default main;
