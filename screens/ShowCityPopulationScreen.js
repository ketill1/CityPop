import * as React from 'react';
import {
ActivityIndicator,
StyleSheet,
View,
FlatList,
SafeAreaView,
TouchableOpacity,
Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ListItem, Icon, Text } from 'react-native-elements'



function ShowCityPopulationScreen({ route, navigation }) {
  /* 2. Get the param */
  const [isLoading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const { itemId, otherParam } = route.params;

    const myRequest = new Request(`http://api.geonames.org/searchJSON?q=${itemId}&fuzzy=1&isNameRequired=true&cities=cities5000&maxRows=1&username=weknowit`)

    React.useEffect(() => {
      fetch(myRequest)
        .then((response) => response.json())
        .then((json) => setData(json.geonames))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    return (
      <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <View style={styles.space2} />
          <Text h2 >{itemId}</Text>
        <View style={styles.space2} />
      </View>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            ListHeaderComponent={
              <View>
                <Text style={styles.title}>POPULATION</Text>
              </View>
            }
            data={data}
            keyExtractor={({ adminCode1 }, index) => adminCode1}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.title}>{item.population}</Text>
              </View>
            )}
          />
        )}
      </SafeAreaView>
    );
  }
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
