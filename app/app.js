/**
 * Created by likun on 2017/12/5.
 */
import React, { Component } from 'react'
import { Navigator, View, StatusBar, Platform } from 'react-native'
import Wrapper from './component/Wrapper'



export default class Navigation extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <View style={{flex:1}}>
                <StatusBar
                    backgroundColor="#0898ff"
                    barStyle="light-content"
                />
                <Navigator
                    initialRoute={{component: Wrapper}}
                    configureScene={() => Navigator.SceneConfigs.FloatFromRight}
                    renderScene={(route, navigator) => {
                        return <route.component navigator={navigator} {...route.args}
                        />
                        }
                    }
                />
            </View>
        )
    }
}