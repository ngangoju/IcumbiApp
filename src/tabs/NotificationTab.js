import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default class NotificationTab extends React.Component {
  static navigationOptions = {
    title: "Notifications"
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.welcomeContainer}>
          {/* Notifications list component */}
          <Text>Notifications list component</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  }
});
