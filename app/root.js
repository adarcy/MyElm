/**
 * Created by likun on 2017/12/5.
 */
import React, { Component } from 'react'
import Navigation from './app'
import { View, Platform } from 'react-native'

export default class rootApp extends Component{
    render(){
        return(
            <View style={{backgroundColor:Platform.OS == 'ios'? "#000" : "#0398ff",flex:1}}>
                <Navigation/>
            </View>
        )
    }
}