import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HouseTab from "../tabs/HouseTab";
import NotificationTab from "../tabs/NotificationTab";
import ProfileTab from "../tabs/ProfileTab";

const HouseStack = createStackNavigator({
  House: HouseTab
});

HouseStack.navigationOptions = {
  tabBarLabel: "House",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-home${focused ? "" : "-outline"}`
          : "md-home"
      }
    />
  )
};

const NotificationStack = createStackNavigator({
  Notification: NotificationTab
});

NotificationStack.navigationOptions = {
  tabBarLabel: "Notification",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-notifications" : "md-notifications"}
    />
  )
};

const ProfileStack = createStackNavigator({
  Profile: ProfileTab
});

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-contact" : "md-contact"}
    />
  )
};

export default createBottomTabNavigator({
  HouseStack,
  NotificationStack,
  ProfileStack
});
