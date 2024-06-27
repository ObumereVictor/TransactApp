import React, {createContext, useContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContext = createContext();
const todoKey = 'Todos';
const transactionKey = 'Transactions';

const initialState = {
  items: [
    {label: 'Credit', value: 'Credit'},
    {label: 'Debit', value: 'Debit'},
  ],
  itemName: '',
  itemAmount: '',
};

const fetchData = async key => {
  try {
    let value = await AsyncStorage.getItem(key);
    console.log(value);
    if (value) {
      const jsonValue = JSON.parse(value);
      return jsonValue;
    }
  } catch (e) {
    // error reading value
  }
  return null;
};

const AppProvider = ({children}) => {
  const [selectType, setSelectType] = useState('Credit');
  const [amount, setAmount] = useState('');
  const [name, setName] = useState(initialState.itemName);
  let [transactionData, setTransactionData] = useState(['']);
  let [todosData, setTodosData] = useState(['']);
  const [total, setTotal] = useState({
    creditTotal: 0,
    debitTotal: 0,
  });
  const [todo, setTodo] = useState('');

  useEffect(() => {
    const getToDoData = async () => {
      const data = await fetchData(todoKey);
      if (data) {
        setTodosData(data);
      }
    };
    const getTransData = async () => {
      const data = await fetchData(transactionKey);
      if (data) {
        // console.log(data);
        setTransactionData(data);
      }
    };
    getTransData();
    // getToDoData();
    AsyncStorage.clear();
  }, []);

  useEffect(() => {
    storeToDoData(todoKey, JSON.stringify(todosData));
  }, [todosData.length]);

  useEffect(() => {
    calculateTotals();
    storeTransactionData(transactionKey, transactionData);
  }, [transactionData.length]);

  const transactionSubmit = () => {
    if ((!name && selectType === 'Debit') || !amount || !selectType) {
      Alert.alert('No fields', 'Enter the required Fields');
      return;
    }
    if (amount < 1) {
      Alert.alert('Amount Error', 'Amount is small');
      return;
    }
    const transactionDetails = {
      selectType,
      amount,
      name,
      createdAt: Date.now(),
    };

    transactionData.push(transactionDetails);

    console.log(transactionData);
    setTransactionData(transactionData);
    setAmount();
    setName('');
  };

  const calculateTotals = () => {
    let total = 0;
    const tempData = transactionData;
    let creditTotal = tempData.filter(data => data.selectType === 'Credit');
    creditTotal = creditTotal.map(data => Number(data.amount));
    creditTotal = creditTotal.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      total,
    );

    let debitTotal = tempData.filter(data => data.selectType === 'Debit');
    debitTotal = debitTotal.map(data => Number(data.amount));
    debitTotal = debitTotal.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      total,
    );

    const totalTransaction = {creditTotal, debitTotal};
    setTotal(totalTransaction);
  };

  const todoSubmit = () => {
    if (!todo) {
      Alert.alert('No Todo Inputs', 'Input your todo');
      return;
    }
    todosData.push(todo);
    setTodosData(todosData);
    setTodo('');
  };

  const deleteTodo = index => {
    const todos = todosData.filter((todo, i) => i !== index);
    setTodosData(todos);
  };

  const storeToDoData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // saving error
    }
  };

  const storeTransactionData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);

      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const clearData = async () => {
    await AsyncStorage.clear();
    setTransactionData(['']);
    setTodosData(['']);
    setTotal({
      creditTotal: 0,
      debitTotal: 0,
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...initialState,
        selectType,
        setSelectType,
        transactionSubmit,
        setAmount,
        amount,
        setName,
        name,
        transactionData,
        total,
        todo,
        setTodo,
        todoSubmit,
        todosData,
        deleteTodo,
        clearData,
      }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppProvider, useGlobalContext};
