//import react data
import * as React from 'react';
import { View, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native-elements';

//navigation for navigating screens and passing input from user
function SearchCityScreen({ navigation }) {

  //set curren search from searchbar and uppdate when typing
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    //show header, text and searchbar
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }} >
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text h2 >SEARCH BY {"\n"}CITY</Text>
      <View style={styles.space2} />
      <Searchbar
        placeholder="Enter a city"
        onChangeText={onChangeSearch}
        value={searchQuery}
        onIconPress={() => navigation.push('ShowPopulation', {
          itemId: searchQuery })}
      />
    </View>
    </TouchableWithoutFeedback>
  );
};
//styles for render text and searchbar
const styles = StyleSheet.create({
  space2: {
    height: 100
  }
})

export default SearchCityScreen;
