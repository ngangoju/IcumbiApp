import React, { Component } from 'react';
import { View, StyleSheet, Text, WebView,TouchableOpacity } from 'react-native'
class Test extends Component {
    render() {
        return (
            <View style={styles.testContainer}>
                <WebView
                    source={{ uri: 'https://www.google.com/?gws_rd=cr,ssl&ei=SICcV9_EFqqk6ASA3ZaABA#q=tutorialspoint' }}
                />

            </View>
        );
    }

}

class Hello extends Component {
    render() {
        return (
            <View style={styles.helloContainer}>
                <Text>Welcome to Icumbi  Mobile App</Text>
                <Text>Coding is Good Added By Emmzzo to day</Text>
            </View>
        );
    }
}


class List extends Component{
    state={
        names:[
            {
                id:0,
                name:'Ben',
            },
            {
                id:1,
                name:'Susan',
            },
            {
                id:2,
                name:'Robert',
            },
            {
                id:3,
                name:'Mary',
            }
        ]
    }
    alertItemName=(item)=>{
        alert(item.name)
    }
    render(){
        return(
<View>
{
    this.state.names.map((item,index)=>(
        <TouchableOpacity
        key={item.id}
        style={styles.listContainer}
        onPress={()=>this.alertItemName(item)}>
        <Text>
            {item.name}
        </Text>
        </TouchableOpacity>
    ))
}

</View>
        );
    }
}
 class Houses extends Component {
    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native
                </Text>
                <Text style={styles.instructions}>
                    To get started ,edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R,to reload,{'\n'}
                    Cmd+D  or shake for Dev menu
                </Text>
             </View>

        );
    }
}

/*const styles = StyleSheet.create({
    
})*/
export{Test,Hello,Houses,List as default};
const styles = StyleSheet.create({
    testContainer: {
        height: 350,
    },
    helloContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listContainer:{
        paddingTop:25,
        marginTop:5,
        backgroundColor:'#d9f9b1',
        alignItems:'center',
    },
    text:{
        color:'#4f603c'
    },
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
})