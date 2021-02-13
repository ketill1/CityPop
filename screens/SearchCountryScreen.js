import * as React from 'react';
import { Button, View, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import { Searchbar} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native-elements';

function SearchCountryScreen({ route, navigation }) {

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }} >
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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

const styles = StyleSheet.create({
  space2: {
    height: 100
  }
})

export default SearchCountryScreen;
