import * as React from 'react';
import {
StyleSheet,
View,
FlatList,
TouchableOpacity,
Button,
SafeAreaView,
StatusBar,
TouchableHighlight
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ListItem, Icon, Text } from 'react-native-elements';
import { ActivityIndicator, Colors } from 'react-native-paper';

//takes user input from route and navigate data from navigation
function ShowCountryScreen({ route, navigation }) {

  //set initial loading value true
  const [isLoading, setLoading] = React.useState(true);
  //set data to emty
  const [data, setData] = React.useState([]);
  //set previous user imput
  const { itemId, otherParam } = route.params;

  //get api data from specific country to show citis in falling order
  //uses: citie5000, fuzzy, orderBy, maxRows, username
  const myRequest = new Request(
    `http://api.geonames.org/searchJSON?q=${
      itemId}&orderby=population&fuzzy=1&cities=cities5000&maxRows=10&username=weknowit`)

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
        <Text style={styles.title}>Can't find country!</Text>
      </View>
    );
  };

  //show: header, countries loading and error
  return (
    <SafeAreaView style={styles.container}>
    <View style={{alignItems: 'center'} }>
    <View style={styles.space2} />
      <Text h2 >{itemId}</Text>
    <View style={styles.space2} />
    </View>
    <ActivityIndicator size='large' animating={isLoading}/>
    <FlatList
      renderItem={({ item, index }) => (
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => navigation.push('ShowPopulation', {
            itemId: item.toponymName})}>
        <View style={styles.item}>
          <Text style={styles.title}>{item.toponymName}</Text>
        </View>
        </TouchableHighlight>
      )}
      data={data}
      ListEmptyComponent={emptyComponent}
      keyExtractor={(item, index) => index.toString()}
    />
  </SafeAreaView>
  );
}
//styles for render text and list
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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
  space2: {
    height: 50
  }
})

export default ShowCountryScreen;
