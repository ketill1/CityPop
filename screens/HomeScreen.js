//import react-data
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Text } from 'react-native-elements';

//navigation for navigating screens
function HomeScreen({ navigation }) {
  //show header, text and button
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
      <Text h2>CityPop</Text>
    <View style={styles.space2} />
    <View>
    <Button
      style={styles.button}
      title="     SEARCH BY CITY    "
      type="outline"
      onPress={() => {
      /* Navigate to the SearchCity route with params */
      navigation.navigate('SearchCity');
      }}
    />
    <View style={styles.space} />
    <Button style={styles.button}
      title="SEARCH BY COUNTRY"
      type="outline"
      onPress={() => {
      /* 1. Navigate to the SearchCountry route with params */
        navigation.navigate('SearchCountry');
      }}
    />
    </View>
    </View>
  );
}
//styles for render text and button
const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
    padding: 30
  },
  space: {
    height: 20
  },
  space2: {
    height: 100
  }

})

export default HomeScreen;
