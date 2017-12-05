/**
 * Created by likun on 2017/12/5.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
    Text,
    View,
    BackAndroid,
    ScrollView,
    StyleSheet,
    AlertIOS,
    RefreshControl,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableHighlight,
    Image,
    TextInput,
    Platform,
    TouchableWithoutFeedback,
    Dimensions,
    ActivityIndicator,
    Animated
} from 'react-native'
import LocalImg from '../images'
import px2dp from '../util'
import Icon from 'react-native-vector-icons/Ionicons'
import Swiper from 'react-native-swiper'
import SplashScreen from 'react-native-splash-screen'

// import SearchView from '../component/SearchView'
// import LbsModal from '../component/LbsModal'
import TabView from '../component/TabView'
// import Bz from '../component/Bz'
// import DetailPage from './DetailPage'
// import data from '../data'

const isIOS = Platform.OS == "ios"
const { width, height } = Dimensions.get('window')
const headH = px2dp(isIOS?140:120)
const InputHeight = px2dp(28)

export default class HomePage extends Component<> {
    constructor(props){
        super(props)
        this.state = {
            location: "三里屯SOHO",
            scrollY: new Animated.Value(0),
            searchView: new Animated.Value(0),
            modalVisible: false,
            searchBtnShow: true,
            listLoading: false,
            isRefreshing: false
        }

        this.SEARCH_BOX_Y = px2dp(isIOS?48:43)
        this.SEARCH_FIX_Y = headH-px2dp(isIOS?64:44)
        this.SEARCH_KEY_P = px2dp(58)
        this.SEARCH_DIFF_Y = this.SEARCH_FIX_Y-this.SEARCH_BOX_Y
        this.SEARCH_FIX_DIFF_Y = headH-this.SEARCH_FIX_Y-headH
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Home
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
