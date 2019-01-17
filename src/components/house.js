import React, { Component } from 'react';
import { Text, View, TouchableOpacity,  StyleSheet, WebView, FlatList, Image, ActivityIndicator, ToastAndroid } from 'react-native';
//import {SearchBar,List} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/Ionicons';
export default class Houses extends Component {
    constructor() {
        super();
        this.state = {
            dataSource: [],
            isLoading: true,
        }
    }
    renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginBottom: 3 }}
                onPress={() => ToastAndroid.show(item.author, ToastAndroid.SHORT)}
            >
                <Image style={{ width: 80, height: 80, margin: 5 }}
                    source={{ uri: item.urlToImage }}
                />
                <View style={{ flex: 1, justifyContent: 'center', marginLeft: 5 }}>
                    <Text style={{ fontSize: 18, color: 'green', marginBottom: 10 }}>
                        Author:{item.author}
                    </Text>
                    <Text style={{ fontSize: 16, color: 'red', marginBottom: 14 }}>
                        <Text style={{ color: 'black' }}>Title:</Text>{item.title}
                    </Text>
                    <Text style={{ fontSize: 16 }}>
                        <Text style={{ color: 'orange' }}>Description:</Text> {item.description}
                    </Text>
                    <Text style={{ fontSize: 16, color: 'black', marginBottom: 10 }}>
                        <Text style={{ color: 'orange' }}>Content: </Text>{item.content}
                    </Text>
                    <Text style={{ fontSize: 14, color: 'blue', alignItems: 'flex-end' }}>
                        PublishedAt: {item.publishedAt}
                    </Text>
                </View>
            </TouchableOpacity>
        )

    }
    renderSeparator = () => {
        return (
            <View style={{ height: 1, width: '100%', backgroundColor: 'black' }}>

            </View>
        );
    }
    /*renderHeader = () => {
        return (
            <SearchBar placeholder="Type here..." lightThem round />
        );
    }*/
    componentDidMount() {
        const url = 'https://newsapi.org/v2/everything?q=bitcoin&from=2018-12-17&sortBy=publishedAt&apiKey=f0cb6490af1043818c8d444d2e70cce7'
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson.articles,
                    isLoading: false
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    render() {

        return (
            this.state.isLoading
                ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#330066" animating />
                </View>
                :
                <View style={styles.container}>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index}
                        ItemSeparatorComponent={this.renderSeparator}
                       // ListHeaderComponent={this.renderHeader}
                    />
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
})