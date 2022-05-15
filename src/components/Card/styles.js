import { StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

export default StyleSheet.create({
  card: {
    height: height - 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 2,
    marginBottom: 2,
  },
  image: {
    borderRadius: 2,
    flex: 1,
    width: '100%',
    borderColor: '#000',
  },
  imageDescriptionContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flexDirection: 'column',
    height: '100%',
    position: 'absolute',
    left: 10,
    bottom: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Avenir',
    textShadowColor: '#000',
    textShadowRadius: 10,
  },
});