import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from 'react-native';
import Svg, {Circle, Path} from 'react-native-svg';

const tabs = [1, 2, 3, 4, 5];
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathX: '357',
      pathY: '675',
      pathA: '689',
      pathB: '706',
    };
  }

  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.content]}>
          <View style={styles.subContent}>
            {tabs.map((_tabs, i) => {
              const styles = {
                opacity: 1,
              };

              if (i === 2) {
                styles.zIndex = -10;
                styles.position = 'relative';
                styles.backgroundColor = '#373A50';
                styles.padding = 10;
                styles.borderRadius = 35;
                styles.transform = [{translateY: -5}];
              }

              return (
                <TouchableOpacity
                  key={i}
                  underlayColor={'transparent'}
                  onPress={() => alert(i)}>
                  <View style={{...styles, bottom: 15}}>
                    <Image
                      style={{width: 35, height: 35}}
                      source={require('../../assets/icons/home.png')}
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
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
              fill={'#373A50'}
              stroke={'#373A50'}
              d={`M30,60h${this.state.pathX}.3c17.2,0,31,14.4,30,31.6c-0.2,2.7-0.3,5.5-0.3,8.2c0,71.2,58.1,129.6,129.4,130c72.1,0.3,130.6-58,130.6-130c0-2.7-0.1-5.4-0.2-8.1C${this.state.pathY}.7,74.5,${this.state.pathA}.5,60,${this.state.pathB}.7,60H1062c16.6,0,30,13.4,30,30v94c0,42-34,76-76,76H76c-42,0-76-34-76-76V90C0,73.4,13.4,60,30,60z`}
            />

            {/* <Circle
              fill={'#7EE6D2'}
              stroke={'#7EE6D2'}
              cx="546"
              cy="100"
              r="100"
            /> */}
          </Svg>
          {/* <View
            style={{
              position: 'absolute',
              width: '100%',
              transform: [{translateY: 20}],
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{backgroundColor: 'purple'}}
              onPress={() => alert('asd')}>
              <View
                style={{
                  backgroundColor: 'red',
                  width: 60,
                  height: 60,
                  borderRadius: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 35, height: 35}}
                  source={require('../../assets/icons/home.png')}
                />
              </View>
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
