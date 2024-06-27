import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Platform,
} from 'react-native';
import {SelectComPonent} from '.';
import {useGlobalContext} from '../utils';

const IandO = () => {
  const {selectType, transactionSubmit, amount, setAmount, setName, name} =
    useGlobalContext();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize: 17, color: '#fff', fontWeight: 'bold'}}>
          Transaction
        </Text>
      </View>

      <SelectComPonent style={styles.select} />
      <TextInput
        style={[styles.input]}
        keyboardType="numeric"
        placeholder="Amount"
        returnKeyType="done"
        value={amount}
        onChangeText={value => setAmount(value)}
      />

      {selectType === 'Debit' && (
        <TextInput
          keyboardType="default"
          placeholder="Description"
          style={[styles.input]}
          value={name}
          onChangeText={value => setName(value)}
        />
      )}

      <Pressable style={styles.submitBtn} onPress={() => transactionSubmit()}>
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    height: 'fit-content',
    alignItems: 'center',
    marginTop: 5,
    gap: 5,
    width: '90%',
    borderRadius: 20,
    textAlign: 'center',
    paddingBottom: 20,
  },
  header: {
    height: 30,
    backgroundColor: 'grey',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  input: {
    // flexGrow: 1,

    backgroundColor: 'white',
    width: '95%',
    height: 35,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  select: {
    // flexGrow: 1,
    width: '95%',
    // height: 30,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    alignContent: 'center',
  },
  submitBtn: {
    backgroundColor: 'lightgreen',
    width: '95%',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
  },
});

export default IandO;
