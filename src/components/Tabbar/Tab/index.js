import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';

import style from './style';

function Tab(props) {
  return (
    <TouchableOpacity
      underlayColor={'transparent'}
      onPress={() => alert('clicked')}>
      <View style={{...props.iconContainerStyles, bottom: 15}}>
        <Image style={style.icon} source={props.icon} />
      </View>
    </TouchableOpacity>
  );
}

Tab.defaultProps = {
  iconContainerStyles: {},
};

export default Tab;
