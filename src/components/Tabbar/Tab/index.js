import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';

import style from './style';

function Tab(props) {
  let iconSource;

  if (props.name === 'home' && props.active) {
    iconSource = require('../../../assets/icons/home-active.png');
  }

  if (props.name === 'home' && !props.active) {
    iconSource = require('../../../assets/icons/home.png');
  }

  if (props.name === 'feed' && props.active) {
    iconSource = require('../../../assets/icons/feed-active.png');
  }

  if (props.name === 'feed' && !props.active) {
    iconSource = require('../../../assets/icons/feed.png');
  }

  if (props.name === 'timeline' && props.active) {
    iconSource = require('../../../assets/icons/timeline-active.png');
  }

  if (props.name === 'timeline' && !props.active) {
    iconSource = require('../../../assets/icons/timeline.png');
  }

  if (props.name === 'profile' && !props.active) {
    iconSource = require('../../../assets/icons/profile.png');
  }

  if (props.name === 'profile' && props.active) {
    iconSource = require('../../../assets/icons/profile-active.png');
  }

  if (props.name === 'settings' && !props.active) {
    iconSource = require('../../../assets/icons/settings.png');
  }

  if (props.name === 'settings' && props.active) {
    iconSource = require('../../../assets/icons/settings-active.png');
  }

  function handlePress() {
    if (props.onPress) {
      return props.onPress();
    }
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[
          style.activeTab,
          {bottom: 11, ...props.iconContainerStyles},
          props.active && {backgroundColor: 'white'},
        ]}>
        <Image style={style.icon} source={iconSource} />
      </View>
    </TouchableOpacity>
  );
}

Tab.defaultProps = {
  iconContainerStyles: {},
  name: 'default',
  active: false,
};

export default Tab;
