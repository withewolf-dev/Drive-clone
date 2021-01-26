import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeScreen, SharedScreen, FileScreen, StarredScreen } from "../../screens"
import AppBar from "../appBar/app-bar"

const Tab = createBottomTabNavigator()

export   function BottomTab() {
  return (
    <>
      <AppBar />
      <Tab.Navigator initialRouteName={"Home"}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Starred" component={StarredScreen} />
        <Tab.Screen name="Shared" component={SharedScreen} />
        <Tab.Screen name="File" component={FileScreen} />
      </Tab.Navigator>
    </>
  )
}
