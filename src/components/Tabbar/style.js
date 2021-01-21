import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  content: {
    flexDirection: 'column',
    zIndex: 0,
    flex: 1,
    left: 0,
    right: 0,
    position: 'absolute',
    bottom: 0,
  },
  subContent: {
    flexDirection: 'row',
    marginBottom: 0,
    zIndex: 1,
    position: 'absolute',
    bottom: 8,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    paddingHorizontal: 15,
    height: 80,
  },
  centerIcon: {
    zIndex: -10,
    position: 'relative',
    backgroundColor: '#275aa2',
    padding: 10,
    borderRadius: 35,
    transform: [{translateY: -5}],
    bottom: 30,
    width: 50,
    height: 50,
  },
});
