import { observer } from 'mobx-react-lite'
import React from 'react'
import { View,Text } from 'react-native'

export const SharedScreen = observer(function SharedScreen() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>
          shared screen! 🎉
        </Text>
      </View>
        
    )
})
