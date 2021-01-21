import {isTablet} from 'react-native-device-info';
import {Platform} from "react-native";

const globalHelpers = {};

globalHelpers.isTabletOrIpad = function () {
  if (Platform.isPad) {
    return true;
  }

  return isTablet();
};

export default globalHelpers;
