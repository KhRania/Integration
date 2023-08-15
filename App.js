const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import IPhone1313Pro8 from "./screens/IPhone1313Pro8";
import IPhone13ProMax7 from "./screens/IPhone13ProMax7";
import IPhone13ProMax6 from "./screens/IPhone13ProMax6";
import IPhone13ProMax5 from "./screens/IPhone13ProMax5";
import IPhone13ProMax4 from "./screens/IPhone13ProMax4";
import IPhone13ProMax3 from "./screens/IPhone13ProMax3";
import IPhone13ProMax2 from "./screens/IPhone13ProMax2";
import Vector from "./components/Vector4";
import FrameComponent3 from "./components/Frame13";
import VectorIcon3 from "./components/Vector3";
import FrameComponent1 from "./components/Frame14";
import VectorIcon2 from "./components/Vector2";
import FrameComponent2 from "./components/Frame15";
import VectorIcon1 from "./components/Vector1";
import FrameComponent from "./components/Frame16";
import VectorIcon from "./components/Vector";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <VectorIcon3 />,
    <VectorIcon2 />,
    <VectorIcon1 />,
    <VectorIcon />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <FrameComponent3 />,
    <FrameComponent1 />,
    <FrameComponent2 />,
    <FrameComponent />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              backgroundColor: "#7e7acc",
              width: "100%",
              height: "6%",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
  {bottomTabItemsNormal.map((item, index) => {
    const isFocused = state.index === index;
    return (
      <Pressable
        key={index}
        onPress={() => {
          if (!isFocused) {
            navigation.navigate(state.routes[index].name);
          }
        }}
        style={({ pressed }) => ({
          opacity: pressed ? 0.6 : 1,

        })}
      >
        {isFocused ? bottomTabItemsActive[index] : item}
      </Pressable>
  );
})}

          </View>
        );
      }}
    >
      <Tab.Screen
        name="IPhone13ProMax2"
        component={IPhone13ProMax2}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="IPhone13ProMax3"
        component={IPhone13ProMax3}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="IPhone13ProMax7"
        component={IPhone13ProMax7}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="IPhone13ProMax4"
        component={IPhone13ProMax4}
        options={{ headerShown: false }}
      />
        <Tab.Screen
        name="IPhone13ProMax5"
        component={IPhone13ProMax5}
        options={{ headerShown: false }}
      />
        <Tab.Screen
        name="IPhone13ProMax6"
        component={IPhone13ProMax6}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Karla-Medium": require("./assets/fonts/Karla-Medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="IPhone1313Pro8"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
            <Stack.Screen
              name="IPhone1313Pro8"
              component={IPhone1313Pro8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13ProMax6"
              component={IPhone13ProMax6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13ProMax5"
              component={IPhone13ProMax5}
              options={{ headerShown: false }}
            />
            
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
