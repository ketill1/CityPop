//import react data
import * as React from 'react';
import {
StyleSheet,
View,
FlatList,
SafeAreaView,
TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ListItem, Icon, Text } from 'react-native-elements'
import { ActivityIndicator, Colors } from 'react-native-paper';


//takes user input from route and navigate data from navigation
function ShowCityPopulationScreen({ route, navigation }) {

  //set initial loading value true
  const [isLoading, setLoading] = React.useState(true);
  //set data to emty
  const [data, setData] = React.useState([]);
  //set previous user imput
  const { itemId, otherParam } = route.params;

  //get api data from specific city to show population
  //uses: citie5000,isNameRequired, fuzzy, maxRows, username
  const myRequest = new Request(`http://api.geonames.org/searchJSON?q=${itemId}&fuzzy=1&isNameRequired=true&cities=cities5000&maxRows=1&username=weknowit`)

  //fetch api and check for error
  React.useEffect(() => {
    fetch(myRequest)
      .then((response) => response.json())
      .then((json) => setData(json.geonames))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  //check for empty list from user input
  const emptyComponent = () => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>Can't find city!</Text>
      </View>
    );
  };

  //show: header, city, poulation container, loading and error
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
      <View style={styles.space2} />
        <Text h2 >{itemId}</Text>
      <View style={styles.space2} />
      </View>
      <ActivityIndicator size='large' animating={isLoading}/>
        <FlatList
          ListHeaderComponent={
          <View>
            <Text style={styles.title}>POPULATION</Text>
          </View>
          }
          data={data}
          ListEmptyComponent={emptyComponent}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.population}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
    </SafeAreaView>
  );
}
//styles for render text and list
const styles = StyleSheet.create({
  space2: {
    height: 100
  },
  item: {
    backgroundColor: '#a9a9a9',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    textAlign: 'center'
  },
})

export default ShowCityPopulationScreen;
