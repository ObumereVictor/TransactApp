import {
  TextInput,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';
import {IandO, ToDoForm} from '../Components';
import {useGlobalContext} from '../utils';

const HomePage = () => {
  const {clearData} = useGlobalContext();
  return (
    <View style={styles.home}>
      <IandO />
      <ToDoForm />

      <Pressable onPress={clearData} style={styles.clear}>
        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
          Clear Data
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    alignItems: 'center',
    height: '100%',
  },
  // displayScreen: {
  //   backgroundColor: 'red',
  //   height: 300,
  //   width: '100%',
  // },
  // toDoTable: {
  //   margin: 10,
  //   gap: 10,
  // },
  // todosContainer: {
  //   borderColor: 'black',
  //   borderWidth: 1,
  //   width: '100%',
  //   alignItems: 'center',
  //   backgroundColor: 'white',
  //   padding: 10,
  // },

  clear: {
    position: 'absolute',
    bottom: 20,
    width: '80%',
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
  },
});
export default HomePage;
