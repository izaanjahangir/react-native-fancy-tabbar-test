import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    marginHorizontal: 15,
    marginBottom: 10,
  },
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
    bottom: 0,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    paddingHorizontal: 10,
  },
});
