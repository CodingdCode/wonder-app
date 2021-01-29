import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { COLORS } from '../styles/theme';

const DropdownHeaderMenu = () => {
  const [value, setValues] = useState('all');

  return (
    <DropDownPicker
      items={[
        {
          label: 'ALL',
          value: 'all',
        },
        {
          label: 'BARISTA',
          value: 'barista',
        },
        {
          label: 'BARBER',
          value: 'barber',
        },
        {
          label: 'CHEF',
          value: 'chef',
        },
        {
          label: 'BARTENDER',
          value: 'bartender',
        },
      ]}
      defaultValue={value}
      containerStyle={{
        height: 40,
        width: 200,
        alignSelf: 'center',
        fontWeight: '900',
      }}
      style={{
        backgroundColor: 'transparent',
        fontWeight: '900',
        // borderColor: 'transparent',
      }}
      itemStyle={{
        justifyContent: 'center',
        fontWeight: '900',
      }}
      dropDownStyle={{
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        fontWeight: '900',
      }}
      onChangeItem={(item) => setValues(item.value)}
    />
  );
};

export default DropdownHeaderMenu;
