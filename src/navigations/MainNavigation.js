import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/Home';
import MediaList from '../screens/MediaList';
import NoticeList from '../screens/NoticeList';
import NoticeDetail from '../screens/NoticeDetail';
import Podbbang from '../screens/Podbbang';
import PodbbangDetail from "../screens/PodbbangDetail";

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" >
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="MediaList" component={MediaList} options={{headerTitle: '영상목록'}}/>
      <Stack.Screen name="NoticeList" component={NoticeList} options={{headerTitle: '공지목록'}}/>
      <Stack.Screen name="NoticeDetail" component={NoticeDetail} options={{headerTitle: '공지'}}/>
      <Stack.Screen name="Podbbang" component={Podbbang} options={{headerTitle: '팟빵목록'}}/>
      <Stack.Screen name="PodbbangDetail" component={PodbbangDetail} options={{headerTitle: '팟빵'}}/>
    </Stack.Navigator>
  </NavigationContainer>
);
