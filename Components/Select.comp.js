import React, {useState} from 'react';
import {View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {useGlobalContext} from '../utils';

const SelectComPonent = props => {
  const {setSelectType, items} = useGlobalContext();

  return (
    <View style={props.style}>
      <RNPickerSelect
        useNativeAndroidPickerStyle={false}
        // style={}
        placeholder={{}}
        style={{
          inputAndroid: {
            height: 40,
            backgroundColor: 'transparent',
            // fontSize: 16,
            paddingHorizontal: 10,
            paddingVertical: 8,
            // borderWidth: 0.5,
            borderColor: 'purple',
            borderRadius: 8,
            color: 'black',
            // paddingRight: 30,
            fontWeight: 'bold',
          },
          iconContainer: {
            top: 5,
            right: 20,
          },
          inputIOS: {
            fontSize: 16,
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 4,
            color: 'black',
            paddingRight: 30,
          },
          chevronActive: true,
        }}
        onValueChange={value => {
          if (value === 'null') {
            setSelectType(null);
            return;
          } else {
            setSelectType(value);
          }
        }}
        items={items}></RNPickerSelect>
    </View>
  );
};

export default SelectComPonent;
