import React from 'react'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
import { View,Text } from 'react-native';

export default function DrawerContent(props:any) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Testing</Text>
    </View>
    )
}
