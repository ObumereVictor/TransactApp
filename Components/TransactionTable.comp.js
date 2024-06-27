import React from 'react';
import {useGlobalContext} from '../utils';
import {View, StyleSheet, Text, ScrollView} from 'react-native';

var moment = require('moment');

const TransactionTable = () => {
  const {transactionData} = useGlobalContext();

  return (
    <View style={styles.transactionTable}>
      <ScrollView>
        {/* {console.log(transactionData)} */}
        {transactionData.map((data, index) => {
          let {createdAt: date, name, amount, selectType} = data;
          // date = moment().format('DD MM YYYY');
          // date = moment().format('LLLL');
          const t = new Date(date);
          if (!selectType) {
            return null;
          }

          return (
            <View style={styles.newItemCon} key={index}>
              <View style={[styles.date, {backgroundColor: 'whitesmoke'}]}>
                <Text>{t.toLocaleDateString()}</Text>
              </View>
              <View
                style={[
                  styles.type,
                  {
                    backgroundColor: `${
                      selectType === 'Credit' ? 'lightgreen' : 'red'
                    }`,
                  },
                ]}>
                <Text>{selectType}</Text>
              </View>
              <View style={styles.name}>
                <Text>{name ? name : '-'}</Text>
              </View>
              <View style={styles.amount}>
                <Text>{amount}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    alignItems: 'center',
  },
  transactionTable: {
    // backgroundColor: 'lightgrey',
    height: '90%',
    width: '100%',
    gap: 4,
  },
  newItemCon: {
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: 'yellow',
    // height: 40,
    // justifyContent: 'space-between',
  },
  name: {
    backgroundColor: 'yellow',
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
export default TransactionTable;
