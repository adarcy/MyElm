/**
 * Created by likun on 2017/12/5.
 */
import React, { Component } from 'react'
import { Navigator, View ,StyleSheet,
    Text,} from 'react-native'
import TabView from './TabView'

export default class Wrapper extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <TabView navigator={this.props.navigator}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});