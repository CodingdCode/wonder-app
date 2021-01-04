import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

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
      containerStyle={{ height: 50, width: 200, alignSelf: 'center' }}
      style={{ backgroundColor: '#fafafa' }}
      itemStyle={{
        justifyContent: 'center',
      }}
      dropDownStyle={{
        alignSelf: 'center',
        justifyContent: 'center',
      }}
      onChangeItem={(item) => setValues(item.value)}
    />
  );
};

export default DropdownHeaderMenu;
