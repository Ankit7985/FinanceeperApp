import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import CreatePost from './src/screens/createPost';
// import PostListing from './src/screens/postListing';
// import EmployeeDetails from './src/screens/fetchData';
// import FormData from './src/screens/formData';
import {Provider} from 'react-redux';
 import configureStore from './src/store';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
//import Profile from './src/screens/profile';
import {MyStatusBar} from './src/components/custom-statusbar';
// import BedTime from './src/screens/bed-time';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/screen/home';
import Setting from './src/screen/setting';
import Profile from './src/screen/profile';
import Contact from './src/screen/contact';
import {hp, wp} from './src/components/responsiveUi';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Address from './src/screen/address';

const store = configureStore();
// export default function App() {
//   const theme = {
//     ...DefaultTheme,
//     roundness: 2,
//     colors: {
//       ...DefaultTheme.colors,
//       primary: '#8C8896',
//       text: '#19122E',
//     },
//   };

//   const Stack = createNativeStackNavigator();
//   return (
//     // // <Provider store={store}>
//     <PaperProvider theme={theme}>
//       <MyStatusBar />

//       <NavigationContainer>
//         <Stack.Navigator
//           //  initialRouteName="CreatePost"
//           screenOptions={{headerShown: false}}>
//           <Stack.Screen name="BedTime" component={BedTime} />
//           {/*  <Stack.Screen name="CreatePost" component={CreatePost} />
//             <Stack.Screen name="PostListing" component={PostListing} />
//             <Stack.Screen name="EmployeeDetails" component={EmployeeDetails} />
//             <Stack.Screen name="FormData" component={FormData} />
//   <Stack.Screen name="Profile" component={Profile} />*/}
//         </Stack.Navigator>
//       </NavigationContainer>
//     </PaperProvider>
//     // </Provider>
//   );
// }
// // <Stack.Screen name="CreatePost" component={CreatePost} />
// // <Stack.Screen name="PostListing" component={PostListing} />
// //<Stack.Screen name="EmployeeDetails" component={EmployeeDetails} />
// //<Stack.Screen name='FormData' component={FormData}/>

export default function App() {
  const Tab = createBottomTabNavigator();
  const renderIcons = ({route}) => ({
    gestureEnabled: false,

    tabBarIcon: ({focused}) => {
      let iconName;
      if (route.name == 'Home') {
        iconName = (
          <Entypo name={'home'} size={30}/>
        );
      } else if (route.name == 'Profile') {
        iconName = <AntDesign name={'profile'} size={30} />;
      } else if (route.name == 'Contact') {
        iconName = <AntDesign name={'contacts'} size={30} />;
      } else if (route.name == 'Setting') {
        iconName = <AntDesign name={'setting'} size={30} />;
      } else if (route.name == 'Address') {
        iconName = (
          <Entypo name={'location'} size={30}/>
        );
      }

      return iconName;
    },
    tabBarItemStyle: {
      height: hp(60),
    },
    tabBarLabelStyle: {
      paddingBottom: wp(10),
    },
    tabBarActiveTintColor: 'white',
    tabBarInactiveTintColor: 'black',
    tabBarStyle: {
      height: hp(70),
      backgroundColor: 'white',
      borderTopWidth: 0,
    },
    styles: {
      position: 'absolute',
    },
    tabBarActiveBackgroundColor: 'grey',
    //  unmountOnBlur: true,
  });
  return (
    <>
    <Provider store={store}>
      <MyStatusBar />

      <NavigationContainer>
        <Tab.Navigator screenOptions={renderIcons}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Setting"
            component={Setting}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Contact"
            component={Contact}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
          name="Address"
          component={Address}
          options={{
            headerShown: false,
          }}
        />
        </Tab.Navigator>
      </NavigationContainer>
      </Provider>
    </>
  );
}
const styles = StyleSheet.create({
  tab: {position: 'absolute', width: '100%', bottom: 0, height: hp(60)},
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  academyItem: {
    height: hp(60),
    marginBottom: 0,
  },
  flex1: {flex: 1},
  navIconFocused: {
    height: 20,
    width: 20,
    color: 'white',
  },
  navIcon: {height: 20, width: 20, color: 'grey'},
  academy: {
    position: 'absolute',
    backgroundColor: 'black',
    marginBottom: 0,
    borderTopWidth: 0,
  },
});
