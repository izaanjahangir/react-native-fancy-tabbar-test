import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  icon: {
    width: 22,
    height: 22,
  },
  activeTab: {
    width: 40,
    height: 40,
    borderRadius: Platform.OS === 'android' ? 80 : 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
