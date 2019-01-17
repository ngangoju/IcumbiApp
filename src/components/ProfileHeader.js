import React from "react";
import {
  ScrollView, StyleSheet, 
  Text, View, Image,
  ImageBackground,
  Linking,
  AppRegistry,
  FlatList,
  TouchableOpacity
} from "react-native";
// import Houses from '../components/house';

// const child =(props) =>{
//     return(
//         <div>
//           <button onClick={props.doWhaterever}>{props.title}</button>
//         </div>
//     )
// }
export default class ProfileHeader extends React.Component {
  static navigationOptions = {
    title: "Profile"
  }; 

  
    constructor() {
      super()
      // this.state ={
      //   dataSource: []
      // }
    }
    
    
    render() {
        const user={
            name: 'Mutabazi Matthew',
        };
        return (
            
            <ImageBackground style={styles.headerBackground} source={require('../img/22.jpg')} >
                
                <View style={styles.header}>
                    <View style={styles.profilepicWrap}>
                        <Image style={styles.headerBackground} source={require('../img/pp.png')} ></Image>
                    </View>
                        <Text style={styles.name}>{user.name? user.name: 'Anonymous'}</Text>
                        <Text style={styles.pos}>{user.role==="House Owner"? user.role: 'Client'}</Text>
                    </View>
                    
                    <View>
                        <Text style={styles.booked } onPress={this.props.booked}>houses</Text>
                        <TouchableOpacity onPress={()=> Linking.openURL('https://icumbi.tres.rw/house')}>
                            <Text>Google</Text>
                        </TouchableOpacity>
                        
                    </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
  headerBackground:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // height: 100,
    width: null,
    height: 827,
    alignSelf: 'stretch'

  },
  header:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 20,
    height: 200,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    // opacicity: 0.4
  },
  profilepicWrap:{
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: '#2b8fbb',
    borderWidth: 16,
  },
  profilepic:{
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderColor: '#fff',
    borderWidth: 4
  },
  name:{
    marginTop: 20,
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold'
  },
  pos:{
    fontSize: 14,
    color: '#0394c0',
    fontWeight: '300',
    fontStyle: 'italic'
  },
  booked:{
    fontSize: 14,
    color: '#0394c0',
    fontWeight: '300',
    fontStyle: 'italic'
  },
  
});
