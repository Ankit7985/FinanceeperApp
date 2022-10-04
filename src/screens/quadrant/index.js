import {View, Text} from 'react-native';
import React from 'react';
import { Circle, G, Line } from 'react-native-svg';
import { CENTER, PADDING, R, STROKE, TAU } from '../../constant.js';
import { polar2Canvas } from 'react-native-redash';

const LINES=75;
const DELTA=TAU/LINES
const Quadrant = ({children}) => {
  return (
  <G mask={"url(#mask)"}>
  <Circle r={R+STROKE/2} cx={CENTER.x} cy={CENTER.y} fill={"orange"}/>
{new Array(LINES).fill(0).map((_,i)=>{
    const theta=i*DELTA;
    const p1=polar2Canvas({theta,radius:R+PADDING/2},CENTER)
    const p2=polar2Canvas({theta,radius:R-PADDING/2},CENTER)
    return(
        <Line x1={p1.x} x2={p2.x} y1={p1.y} y2={p2.y} stroke={"yellow"} strokeWidth={4}/>
    )
})}
  </G>
  );
};
export default Quadrant;
