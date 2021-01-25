import { observer } from 'mobx-react-lite'
import React from 'react'
import { View,Text } from 'react-native'

export const HomeScreen = observer(function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>
          home screen! 🎉
        </Text>
      </View>
    )
})
