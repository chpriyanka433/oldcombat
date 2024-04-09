import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../screens/Splash";
import Login from "../screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import AboutUs from "../screens/AboutUs";
import Home from "../screens/Home";
import PersonalDetails from "../screens/PersonalDetails";
import TestHistory from "../screens/TestHistory";
import NewTest from "../screens/NewTest";
import RecentTest from "../screens/RecentTest";
import TestSummary from "../screens/TestSummary";
import Level2 from "../screens/Level2";
import Level3 from "../screens/Level32";
import Level31 from "../screens/Level31";


const Stack = createStackNavigator();


const StackNavigation = () => {
    return (

        <Stack.Navigator initialRouteName="Splash" >
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="About" component={AboutUs} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="personal" component={PersonalDetails} options={{ headerShown: false }} />
            <Stack.Screen name="testhistory" component={TestHistory} options={{ headerShown: false }}/>
            <Stack.Screen name="newtest" component={NewTest} options={{ headerShown: false }} />
            <Stack.Screen name="recenttest" component={RecentTest} options={{ headerShown: false }}/>
            <Stack.Screen name="testsummary" component={TestSummary} options={{ headerShown: false }} />
            <Stack.Screen name="level2" component={Level2} options={{headerShown:false}} />
            <Stack.Screen name="level3" component={Level3} options={{headerShown:false}} />
            <Stack.Screen name="level31" component={Level31} options={{headerShown: false}} />
        </Stack.Navigator>

    )
}

export default StackNavigation