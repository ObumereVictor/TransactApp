import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TransactionTable, TotalTransaction} from '../Components';

const TransactionsPage = () => {
  return (
    <View style={{gap: 10, height: '100%'}}>
      <View style={[styles.header]}>
        <View style={[styles.date]}>
          <Text>Date</Text>
        </View>
        <View style={[styles.type]}>
          <Text>Type</Text>
        </View>
        <View style={[styles.item]}>
          <Text>Item</Text>
        </View>
        <View style={[styles.amount]}>
          <Text>Amount</Text>
        </View>
      </View>
      <TransactionTable />
      <TotalTransaction />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  item: {
    // backgroundColor: 'yellow',
    alignItems: 'center',
    width: '20%',
    borderBlockColor: 'black',
    borderWidth: 1,
  },
  type: {
    width: '20%',
    alignItems: 'center',
    borderBlockColor: 'black',
    borderWidth: 1,
  },
  amount: {
    flex: 1,
    alignItems: 'center',
    borderBlockColor: 'black',
    borderWidth: 1,
  },
  date: {
    borderBlockColor: 'black',
    borderWidth: 1,
    paddingRight: 2,
    paddingLeft: 2,
    width: '21%',
  },
});

export default TransactionsPage;
