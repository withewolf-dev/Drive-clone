import { observer } from 'mobx-react-lite'
import React from 'react'
import { View,Text } from 'react-native'

export const StarredScreen = observer(function StarredScreen() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>
          shared Screen 🎉
        </Text>
      </View>
    )
})
