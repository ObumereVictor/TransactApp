import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import {useGlobalContext} from '../utils';

const ToDoForm = () => {
  const {todo, setTodo, todoSubmit} = useGlobalContext();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize: 17, color: '#fff', fontWeight: 'bold'}}>
          To Do Form
        </Text>
      </View>
      {/* <View style={[styles.input]}> */}
      <TextInput
        style={[styles.input]}
        keyboardType="default"
        placeholder="To Do"
        value={todo}
        onChangeText={value => setTodo(value)}
      />
      {/* </View> */}
      <Pressable style={styles.submitBtn} onPress={() => todoSubmit()}>
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    // height: 50,
    backgroundColor: 'grey',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  container: {
    backgroundColor: 'lightgrey',

    alignItems: 'center',
    marginTop: 20,
    gap: 10,
    width: '90%',
    borderRadius: 20,
    textAlign: 'center',
    paddingBottom: 20,
  },
  input: {
    flexGrow: 1,
    backgroundColor: 'white',
    width: '95%',
    height: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,

    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  submitBtn: {
    backgroundColor: 'lightgreen',
    width: '95%',
    alignItems: 'center',
    padding: 4,
    borderRadius: 10,
  },
});

export default ToDoForm;
