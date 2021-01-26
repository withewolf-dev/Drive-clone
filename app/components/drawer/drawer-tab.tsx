import React from 'react'
import { createDrawerNavigator, } from '@react-navigation/drawer';
import {HomeScreen,SharedScreen} from '../../screens'
import { BottomTab } from '../Bottom-tab/Bottom-tab';
import DrawerContent from './drawer-content/drawer-content'


const Drawer = createDrawerNavigator();

export  function DrawerTab() {
    return (
        <Drawer.Navigator  drawerContent={props => <DrawerContent {...props}/>} initialRouteName="Home">
        <Drawer.Screen name="Home"  component={BottomTab} />
      </Drawer.Navigator>
    )
}
