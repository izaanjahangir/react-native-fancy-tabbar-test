import React from 'react';
import {AreaChart, Grid, XAxis} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {Path} from 'react-native-svg';
import * as scale from 'd3-scale';

import {View} from 'react-native';

function MainChart() {
  //   const data = [0, 0, 0, 50, 0, 0, 0, 10, 0, 0, -30, 0, 0];
  const data = [0, 50, 10, 20, 30, 40, 50, 0];

  const Line = ({line}) => (
    <Path
      key={'line'}
      strokeWidth={3}
      d={line}
      stroke={'rgb(255, 255, 255)'}
      fill={'none'}
    />
  );

  return (
    <View>
      <AreaChart
        style={{height: 200, width: '100%'}}
        data={data}
        contentInset={{top: 30, bottom: 30}}
        curve={shape.curveBasis}
        xScale={scale.scaleTime}
        svg={{fill: '#265289', stroke: 'white', strokeWidth: 0}}>
        <Line />
      </AreaChart>
      <XAxis
        // style={{marginHorizontal: -10}}
        data={data}
        xAccessor={({item}) => {
          console.log('item =>', item);
          return item;
        }}
        numberOfTicks={4}
        xScale={scale.scaleTime}
        // formatLabel={(value, index) => {
        //   console.log("value =>", value);
        //   console.log("index =>", index);
        //   return "value";
        // }}
        contentInset={{left: 30, right: 30}}
        svg={{fontSize: 15, fill: 'black'}}
      />
    </View>
  );
}

export default MainChart;
