import { observer } from 'mobx-react-lite'
import React from 'react'
import { View,Text } from 'react-native'

export const FileScreen = observer(function FileScreen() {
    return (
        <View>
            <Text style={{flex:1, justifyContent:"center",alignContent:"center"}}>File</Text>
        </View>
    )
})
