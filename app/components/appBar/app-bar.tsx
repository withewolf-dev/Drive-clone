import React from 'react'
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';


export default function AppBar() {
    return (
        <Appbar style={styles.bottom}>
   <Appbar.Action
     icon="archive"
     onPress={() => console.log('Pressed archive')}
    />
    <Appbar.Action icon="account-search" onPress={() => console.log('Pressed mail')} />
    <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
    <Appbar.Action
      icon="delete"
      onPress={() => console.log('Pressed delete')}
    />
  </Appbar>
    )
}

const styles = StyleSheet.create({
    bottom: {
     backgroundColor:"gray",
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
    },
  });