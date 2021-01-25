import { observer } from 'mobx-react-lite'
import React from 'react'
import { View,Text } from 'react-native'

export const StarredScreen = observer(function StarredScreen() {
    return (
        <View>
            <Text style={{flex:1,justifyContent:"center", alignContent:"center"}}>starred screen</Text>
        </View>
    )
})
