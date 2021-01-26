import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {HomeScreen,SharedScreen} from '../../screens'

const Drawer = createDrawerNavigator();

export  function DrawerScreen() {
    return (
        <Drawer.Navigator >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="shared" component={SharedScreen} />
      </Drawer.Navigator>
    )
}
