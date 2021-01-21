import React, {useState} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

import globalHelpers from '../../utils/globalHelpers';
import Tab from './Tab';
import style from './style';

function Tabbar() {
  const [activeTab, setActiveTab] = useState('home');
  let svgWidth = '100%';
  let svgHeight = '100';

  if (globalHelpers.isTabletOrIpad()) {
    svgHeight = '130';
    svgWidth = '60%';
  }

  function onTabPress(newTab) {
    setActiveTab(newTab);
  }

  const centerIcon = {
    backgroundColor: '#275aa2',
    padding: 10,
    borderRadius: 35,
    // transform: [{translateY: -5}],
    // bottom: 30,
    width: 50,
    height: 50,
    alignSelf: 'flex-start',
  };

  if (globalHelpers.isTabletOrIpad()) {
    centerIcon.bottom = 50;
    centerIcon.width = 75;
    centerIcon.height = 75;
  }

  return (
    <View style={[style.content]}>
      <View
        style={[
          style.subContent,
          globalHelpers.isTabletOrIpad() && {
            width: '60%',
            alignSelf: 'center',
            paddingHorizontal: 30,
            bottom: 20,
          },
        ]}>
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
          containerStyles={{alignSelf: 'flex-start'}}
          iconContainerStyles={centerIcon}
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
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Svg
          version="1.1"
          id="bottom-bar"
          x="0px"
          y="0px"
          width={svgWidth}
          height={svgHeight}
          preserveAspectRatio="xMidYMax slice"
          viewBox="0 0 502.7 149.8"
          space="preserve">
          <Path
            fill={'#275aa2'}
            stroke={'#373A50'}
            d={`M46.3,147.6c-3.7-0.8-7.5-1.3-11-2.6c-16.4-6.1-27.1-17.6-31.2-34.8c-0.8-3.5-1.1-7.2-1.2-10.7
          c-0.2-7.8-0.3-5,0-12.8c0.3-6.6,0.7-13.3,3.7-19.4C12.3,56.2,21.2,49.2,33.6,47c5.1-0.9,10.3-1.4,15.4-1.8
          c6.2-0.4,12.4-0.4,18.6-0.7c8.1-0.3,16.1-0.8,24.2-1.2c7.8-0.4,15.5-0.8,23.3-1.2c8-0.4,15.9-0.8,23.9-1.2c7.7-0.4,15.3-0.8,23-1.2
          c5.5-0.3,11.1-0.1,16.5-0.7c7.6-0.7,11.6,4.1,13,10.7c2.1,9.9,4.4,19.7,9.5,28.6c8.6,15.1,20.9,24.9,38.2,28.1
          c11.3,2.1,22.3,1.3,33.2-2.4c10.4-3.6,18.6-10.2,25-19.1c6.7-9.2,10.4-19.6,12.7-30.7c0.9-4.5,1.1-9.8,5.6-12.7
          c1.7-1.1,3.8-2.3,5.8-2.3c8.7-0.1,17.4,0.2,26.1,0.5c7.6,0.3,15.1,0.8,22.7,1.2c7.9,0.4,15.7,0.8,23.6,1.2
          c7.8,0.4,15.5,0.8,23.3,1.2c7.9,0.4,15.7,0.7,23.6,1.2c8.2,0.5,16.5,1.1,24.7,1.8c16.6,1.5,31.2,13.5,33.1,29.8
          c1.3,10.8,1,11.1,1.3,22.1c0.2,6.2-0.7,12.4-3,18.1c-6.6,15.9-17.9,26.5-35.2,30c-1.8,0.4-3.5,0.8-5.2,1.2
          C319.8,147.6,183,147.6,46.3,147.6z`}
          />
          {/* <Path
          fill={'#275aa2'}
          stroke={'#373A50'}
          d={`M296.9,48.1c0.7,23.7-20.3,46.8-48.1,45.4c-21.7-1.1-44.6-19.9-43-48.7c1.2-21.2,19.9-44.1,48.6-42.5
          C276.5,3.5,297.4,22.5,296.9,48.1z M288.6,47.9c-0.2-20.7-16.6-36.9-36.6-37.1c-21.2-0.3-37.5,16.7-37.7,36.8
          c-0.2,20.9,16.7,37.4,36.9,37.5C272,85.1,288.4,68.3,288.6,47.9z`}
        /> */}
        </Svg>
      </View>
    </View>
  );
}

export default Tabbar;
