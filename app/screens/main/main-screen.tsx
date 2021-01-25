import { observer } from 'mobx-react-lite'
import React from 'react'
import { View,Text } from 'react-native'

export const MainScreen = observer(function MainScreen() {
    return (
        <View>
            <Text style={{flex:1,justifyContent:"center", alignContent:"center"}}>Main Screen</Text>
        </View>
    )
})
