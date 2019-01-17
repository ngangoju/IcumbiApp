import React from "react";
import { ScrollView, StyleSheet, 
  Text, View, 
  AppRegistry,
  FlatList,
  Image,
} from "react-native";

import ProfileHeader from '../components/ProfileHeader';

export default class ProfileTab extends React.Component {
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
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.welcomeContainer}>
              <ProfileHeader />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#000"
  // },
  // contentContainer: {
  //   paddingTop: 30
  // },
  // welcomeContainer: {
  //   alignItems: "center",
  //   marginTop: 10,
  //   marginBottom: 20
  // }
});
