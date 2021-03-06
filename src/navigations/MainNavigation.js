import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/Home';
import MediaList from '../screens/MediaList';
import NoticeList from '../screens/NoticeList';
import NoticeDetail from '../screens/NoticeDetail';
import Podbbang from '../screens/Podbbang';
import PodbbangDetail from "../screens/PodbbangDetail";
import Question from "../screens/Question";
import Challenge from "../screens/Challenge";
import introduce from "../screens/Introduce";
import ContentDetail from "../screens/ContentDetail";
const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" >
      <Stack.Screen name="Home" component={Home} options={{ headerTitle: '홈', headerShown: false }} />
      <Stack.Screen name="MediaList" component={MediaList} options={{ headerTitle: '영상목록' }} />
      <Stack.Screen name="NoticeList" component={NoticeList} options={{ headerTitle: '공지목록' }} />
      <Stack.Screen name="NoticeDetail" component={NoticeDetail} options={{ headerTitle: '공지' }} />
      <Stack.Screen name="ContentDetail" component={ContentDetail} options={{ headerTitle: '공지내용' }} />
      <Stack.Screen name="Podbbang" component={Podbbang} options={{ headerTitle: '라디오목록' }} />
      <Stack.Screen name="PodbbangDetail" component={PodbbangDetail} options={{ headerTitle: '고래산마을 들리는 라디오' }} />
      <Stack.Screen name="Question" component={Question} options={{ headerTitle: '문의사항' }} />
      <Stack.Screen name="Introduce" component={introduce} options={{ headerTitle: '마을소개' }} />
      <Stack.Screen name="Challenge" component={Challenge} options={{ headerTitle: '마을체험' }} />
    </Stack.Navigator>
  </NavigationContainer>
);
