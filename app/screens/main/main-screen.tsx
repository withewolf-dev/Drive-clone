import { observer } from "mobx-react-lite"
import React from "react"
import { View, Text } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeScreen, SharedScreen, FileScreen, StarredScreen } from "../../screens"
import AppBar from "../../components/appBar/app-bar"

const Tab = createBottomTabNavigator()

export const MainScreen = observer(function MainScreen() {
  return (
    <>
    <AppBar/>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Starred" component={StarredScreen} />
      <Tab.Screen name="Shared" component={SharedScreen} />
      <Tab.Screen name="File" component={FileScreen} />
    </Tab.Navigator>
    </>
  )
})
