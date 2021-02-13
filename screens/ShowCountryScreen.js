import * as React from 'react';
import {
ActivityIndicator,
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
import { ListItem, Icon, Text } from 'react-native-elements'


function ShowCountryScreen({ route, navigation }) {


  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const { itemId, otherParam } = route.params;

  const Item = ({ name }) => (
  <View style={styles.item}>
  </View>
  );

  const myRequest = new Request(`http://api.geonames.org/searchJSON?q=${itemId}&orderby=population&fuzzy=1&cities=cities5000&maxRows=100&username=weknowit`)

  React.useEffect(() => {
    fetch(myRequest)
      .then((response) => response.json())
      .then((json) => setData(json.geonames))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  return (
    <SafeAreaView style={styles.container}>
    <View style={{alignItems: 'center'} }>
      <View style={styles.space2} />
          <Text h2 >{itemId}</Text>
      <View style={styles.space2} />
      </View>
       {isLoading ? <ActivityIndicator/> : (
      <FlatList
      data={data}
      renderItem={({ item, index }) => (
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => navigation.push('ShowPopulation', {itemId: item.toponymName})}
          keyExtractor={({ adminCode1 }, index) => adminCode1}>
          <View style={styles.item}>
          <Text style={styles.title}>{item.toponymName}</Text>
          </View>
        </TouchableHighlight>
      )}
      />
    )}
    </SafeAreaView>
  );
}
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
