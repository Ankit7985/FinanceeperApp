/** @format */

import {
    widthPercentageToDP as wp2dp,
    heightPercentageToDP as hp2dp,
  } from 'react-native-responsive-screen';
  
  //Taken from https://uxdesign.cc/implementing-responsive-design-system-to-react-native-238c0cb7503e - read this to understand logic
  
  const artboardHeight = 896;
  const artboardWidth = 414;
  /**
   * Width-Percentage
   * Converts width dimension to percentage
   * Takes values from artboardHeight and artboardWidth (the size of the design artboards used in figma) - will allow us to use same pixel values
   * from figma and have it look the same accross different device screen sizes
   * @param dimension directly taken from design wireframes (Super small screens may need special catering to as the content may be too small)
   * @returns {string} percentage string e.g. '25%'
   */
  export const wp = dimension => {
    return wp2dp((dimension / artboardWidth) * 100 + '%');
  };
  
  /**
   * Height-Percentage
   * Converts width dimension to percentage
   * * 360, 760 - design were made using this scale
   * @param dimension directly taken from design wireframes
   * @returns {string} percentage string e.g. '25%'
   */
  export const hp = dimension => {
    return hp2dp((dimension / artboardHeight) * 100 + '%');
  };
  