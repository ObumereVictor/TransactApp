import {View, Text, StyleSheet} from 'react-native';
import {useGlobalContext} from '../utils';

const TotalTransaction = () => {
  const {total} = useGlobalContext();
  // console.log(total);
  // return;
  return (
    <View style={[styles.totaltrans]}>
      <View
        style={[
          styles.transaction,
          {backgroundColor: 'green', flexGrow: 1, paddingLeft: 10},
        ]}>
        <Text style={styles.text}>Credit</Text>
      </View>
      <View
        style={[styles.transaction, {backgroundColor: 'green', flexGrow: 1}]}>
        <Text style={styles.text}>{total.creditTotal}</Text>
      </View>
      <View style={[styles.transaction, {flexGrow: 1, paddingLeft: 10}]}>
        <Text style={styles.text}>Debit</Text>
      </View>
      <View style={[styles.transaction, {flexGrow: 1}]}>
        <Text style={styles.text}>{total.debitTotal}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  totaltrans: {
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: '5%',
  },
  transaction: {
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TotalTransaction;
