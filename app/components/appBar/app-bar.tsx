import React, { useState } from "react"
import { Appbar } from "react-native-paper"
import { StyleSheet } from "react-native"


export default function AppBar() {

    const [state, setstate] = useState(false)
    
  return (
    <Appbar style={styles.bottom}>
      <Appbar.Action icon="menu" onPress={() => console.log("Pressed archive")} />
      
    </Appbar>
  )
}

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: "gray",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
  },
})
