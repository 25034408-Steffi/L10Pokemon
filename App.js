import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, SectionList, TouchableOpacity, Alert, Image, Button} from 'react-native';
import pokemon from "./data/pokemon";
import {FontAwesome6} from "@expo/vector-icons";


const renderItem = ({ item}) => {
  return (
    <TouchableOpacity style={styles.card}
                      onPress={() => Alert.alert(`Pokemon ${item.name} Card${item.cardId}`)}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.name}</Text>
      <Image style={styles.image} source={{uri: item.picture}} />
    </TouchableOpacity>
  )
}


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Exercise 3</Text>
      <View style={styles.buttonContainer}>
        <Button title="ADD POKEMON" onPress={() => Alert.alert("Not implented")} />
      </View>

      <SectionList sections={pokemon}
                    renderItem={renderItem}
                    contentContainerStyle={{ padding: 15 }}
                    renderSectionHeader={({ section: { title, icon, headerColour, iconColour, textColour } }) => (
                      <View style={[styles.header, { backgroundColor: headerColour }]}>
                        <FontAwesome6 name={icon} size={25} color={iconColour} />
                        <Text style={[styles.textStyle, {color: textColour}]}>{title}</Text>
                      </View>
                      )}/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    padding: 15,
  },
  card: {
    borderWidth: 1,
    backgroundColor: 'lavender',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10
  },
  textStyle: {
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  image: {
    height: 300,
    width: 200,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
});
