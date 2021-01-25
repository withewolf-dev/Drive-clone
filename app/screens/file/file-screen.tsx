import { observer } from "mobx-react-lite"
import React from "react"
import { View, Text } from "react-native"

export const FileScreen = observer(function FileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>File screen! 🎉</Text>
    </View>
  )
})
