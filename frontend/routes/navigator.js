import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Dashboard from "../screens/Dashboard";
import SignupScreen from "../screens/SignupScreen";
import FirstScreen from "../screens/FirstScreen";
import LoginScreen from "../screens/LoginScreen";
import Bank from "../screens/Bank";

const screens = {
  First: {
    screen: FirstScreen,
    navigationOptions: {
      title: "",
    },
  },
  Signup: {
    screen: SignupScreen,
    navigationOptions: {
      title: "Signup Page",
    },
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      title: "Login",
    },
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: "Dashboard",
    },
  },
  Bank: {
        screen: Bank,
        navigationOptions: {
          title: "Bank",
        },
      },
};

const Navigator = createStackNavigator(screens, {
  initialRouteName: "First",
});

export default createAppContainer(Navigator);