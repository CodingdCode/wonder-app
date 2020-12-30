import React from 'react';
import {} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const DropdownHeaderMenu = () => {
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
      defaultValue="all"
      containerStyle={{ height: 50, width: 100 }}
      style={{ backgroundColor: '#fafafa' }}
      itemStyle={{
        justifyContent: 'center',
      }}
      onChangeItem={(item) => console.log(item)}
    />
  );
};

export default DropdownHeaderMenu;
