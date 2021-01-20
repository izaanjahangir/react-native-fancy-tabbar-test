import React, {useState} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

import Tab from './Tab';
import style from './style';

function Tabbar() {
  const [activeTab, setActiveTab] = useState('home');

  const SVG_PATH = {
    pathX: '357',
    pathY: '675',
    pathA: '689',
    pathB: '706',
  };

  function onTabPress(newTab) {
    setActiveTab(newTab);
  }

  return (
    <View style={[style.container]}>
      <View style={[style.content]}>
        <View style={style.subContent}>
          <Tab
            onPress={() => onTabPress('feed')}
            active={activeTab === 'feed'}
            name="feed"
          />
          <Tab
            onPress={() => onTabPress('timeline')}
            active={activeTab === 'timeline'}
            name="timeline"
          />
          <Tab
            onPress={() => onTabPress('home')}
            active={activeTab === 'home'}
            iconContainerStyles={style.centerIcon}
            name="home"
          />
          <Tab
            onPress={() => onTabPress('profile')}
            active={activeTab === 'profile'}
            name="profile"
          />
          <Tab
            onPress={() => onTabPress('settings')}
            active={activeTab === 'settings'}
            name="settings"
          />
        </View>
        <Svg
          version="1.1"
          id="bottom-bar"
          x="0px"
          y="0px"
          width="100%"
          height="100"
          viewBox="0 0 1092 200"
          space="preserve">
          <Path
            fill={'#275aa2'}
            stroke={'#373A50'}
            d={`M30,60h${SVG_PATH.pathX}.3c17.2,0,31,14.4,30,31.6c-0.2,2.7-0.3,5.5-0.3,8.2c0,71.2,58.1,129.6,129.4,130c72.1,0.3,130.6-58,130.6-130c0-2.7-0.1-5.4-0.2-8.1C${SVG_PATH.pathY}.7,74.5,${SVG_PATH.pathA}.5,60,${SVG_PATH.pathB}.7,60H1062c16.6,0,30,13.4,30,30v94c0,42-34,76-76,76H76c-42,0-76-34-76-76V90C0,73.4,13.4,60,30,60z`}
          />
        </Svg>
      </View>
    </View>
  );
}

export default Tabbar;
