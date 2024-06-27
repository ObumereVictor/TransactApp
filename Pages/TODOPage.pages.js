import React from 'react';
import {useGlobalContext} from '../utils';

import {Pressable, Text, View, StyleSheet, ScrollView} from 'react-native';

const TODOPage = () => {
  const {todosData, deleteTodo} = useGlobalContext();

  return todosData === undefined ? (
    <Text>Loadinggg...</Text>
  ) : (
    <ScrollView>
      <View style={styles.container}>
        {todosData.map((todo, index) => {
          if (!todo) {
            return null;
          }
          return (
            <View key={index} style={styles.todoCon}>
              <Text style={styles.todo}>{todo}</Text>
              <Pressable
                onPress={() => deleteTodo(index)}
                style={styles.delete}>
                <Text style={{color: 'red'}}>Delete</Text>
              </Pressable>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  todoCon: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    padding: 20,
    width: '100%',
  },
  todo: {
    fontSize: 18,
    width: '80%',
  },
  delete: {
    fontSize: 18,
    width: '20%',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    color: 'red',
  },
});

export default TODOPage;
