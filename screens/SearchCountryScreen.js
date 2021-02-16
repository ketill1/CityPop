//import react data
import * as React from 'react';
import { View, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import { Searchbar} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native-elements';

//navigation for navigating screens and passing input from user
function SearchCountryScreen({ navigation }) {

  //set curren search from searchbar and uppdate when typing
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  //show header, text and searchbar
  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }} >
    <View style={{ flex: 1, alignItems: 'center' }}>
    <View style={styles.space2} />
        <Text h2 >SEARCH BY {"\n"}COUNTRY</Text>
    <View style={styles.space2} />
    <Searchbar
      placeholder="Enter a country"
      onChangeText={onChangeSearch}
      value={searchQuery}
      onIconPress={() => navigation.push('ShowCountry', {
        itemId: searchQuery })}
    />
    </View>
    </TouchableWithoutFeedback>
  );
}

//styles for render text and searchbar
const styles = StyleSheet.create({
  space2: {
    height: 40
  }
})

export default SearchCountryScreen;
