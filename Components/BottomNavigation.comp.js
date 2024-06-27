import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomePage, TransactionsPage, TODOPage} from '../Pages';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text} from 'react-native';
import {Svg, Path, G, Image} from 'react-native-svg';
import Todo from '../assets/todo.svg';

const myIcon1 = <Icon name="comments" size={30} color="#900" />;
const BottomNav = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <BottomNav.Navigator>
        <BottomNav.Screen
          name="Home"
          component={HomePage}
          options={{
            showIcon: true,

            tabBarIcon: () => {
              return (
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512.001 512.001"
                  style="enable-background:new 0 0 512.001 512.001;"
                  width="30"
                  height="30">
                  <G>
                    <Path d="M490.134,185.472L338.966,34.304c-45.855-45.737-120.076-45.737-165.931,0L21.867,185.472   C7.819,199.445-0.055,218.457,0,238.272v221.397C0.047,488.568,23.475,511.976,52.374,512h407.253   c28.899-0.023,52.326-23.432,52.373-52.331V238.272C512.056,218.457,504.182,199.445,490.134,185.472z M448,448H341.334v-67.883   c0-44.984-36.467-81.451-81.451-81.451c0,0,0,0,0,0h-7.765c-44.984,0-81.451,36.467-81.451,81.451l0,0V448H64V238.272   c0.007-2.829,1.125-5.541,3.115-7.552L218.283,79.552c20.825-20.831,54.594-20.835,75.425-0.01c0.003,0.003,0.007,0.007,0.01,0.01   L444.886,230.72c1.989,2.011,3.108,4.723,3.115,7.552V448z" />
                  </G>
                </Svg>
              );
            },
          }}
        />
        <BottomNav.Screen
          name="Transactions"
          component={TransactionsPage}
          options={{
            showIcon: true,

            tabBarIcon: () => {
              return (
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="30"
                  height="30">
                  <Path d="M16.5,0c-4.206,0-7.5,1.977-7.5,4.5v2.587c-.484-.057-.985-.087-1.5-.087C3.294,7,0,8.977,0,11.5v8c0,2.523,3.294,4.5,7.5,4.5,3.416,0,6.231-1.304,7.167-3.146,.597,.087,1.207,.146,1.833,.146,4.206,0,7.5-1.977,7.5-4.5V4.5c0-2.523-3.294-4.5-7.5-4.5Zm0,2c3.148,0,5.5,1.32,5.5,2.5s-2.352,2.5-5.5,2.5-5.5-1.32-5.5-2.5,2.352-2.5,5.5-2.5ZM7.5,9c3.148,0,5.5,1.32,5.5,2.5s-2.352,2.5-5.5,2.5-5.5-1.32-5.5-2.5,2.352-2.5,5.5-2.5ZM2,14.582c1.36,.875,3.303,1.418,5.5,1.418s4.14-.543,5.5-1.418v.918c0,1.18-2.352,2.5-5.5,2.5s-5.5-1.32-5.5-2.5v-.918Zm5.5,7.418c-3.148,0-5.5-1.32-5.5-2.5v-.918c1.36,.875,3.303,1.418,5.5,1.418s4.14-.543,5.5-1.418v.918c0,1.18-2.352,2.5-5.5,2.5Zm9-3c-.514,0-1.012-.047-1.5-.116v-1.98c.492,.058,.99,.096,1.5,.096,2.197,0,4.14-.543,5.5-1.418v.918c0,1.18-2.352,2.5-5.5,2.5Zm0-4c-.514,0-1.012-.047-1.5-.116v-1.98c.492,.058,.99,.096,1.5,.096,2.197,0,4.14-.543,5.5-1.418v.918c0,1.18-2.352,2.5-5.5,2.5Zm0-4c-.542,0-1.066-.051-1.578-.127-.198-.887-.809-1.684-1.721-2.321,.992,.285,2.106,.449,3.299,.449,2.197,0,4.14-.543,5.5-1.418v.918c0,1.18-2.352,2.5-5.5,2.5Z" />
                </Svg>
              );
            },
          }}
        />
        <BottomNav.Screen
          name="ToDo"
          component={TODOPage}
          options={{
            showIcon: true,

            tabBarIcon: () => {
              return (
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="30"
                  height="30">
                  <Path d="m19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h11.646c1.287,0,2.497-.501,3.407-1.411l2.536-2.536c.897-.896,1.411-2.139,1.411-3.407V5c0-2.757-2.243-5-5-5ZM2,19V5c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v10h-4c-1.654,0-3,1.346-3,3v4H5c-1.654,0-3-1.346-3-3Zm16.639,2.175c-.448.448-1.02.725-1.639.802v-3.977c0-.552.449-1,1-1h3.976c-.079.615-.361,1.198-.802,1.639l-2.536,2.536ZM5,6.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Zm3,5.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm0,5.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Z" />
                </Svg>
              );
            },
          }}
        />
      </BottomNav.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;
