import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//loading screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SearchCityScreen from './screens/SearchCityScreen';
import SearchCountryScreen from './screens/SearchCountryScreen';
import ShowCityPopulationScreen from './screens/ShowCityPopulationScreen';
import ShowCountryScreen from './screens/ShowCountryScreen';

//creats stack, init header and backarrow on all screens.
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home"
        component={HomeScreen} />
        <Stack.Screen name="SearchCity"
        component={SearchCityScreen}
        options={{ title: 'CityPop' }} />
        <Stack.Screen name="SearchCountry"
        component={SearchCountryScreen}
        options={{ title: 'CityPop' }} />
        <Stack.Screen name="ShowPopulation"
        component={ShowCityPopulationScreen}
        options={{ title: 'CityPop' }} />
        <Stack.Screen name="ShowCountry"
        component={ShowCountryScreen}
        options={{ title: 'CityPop' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
