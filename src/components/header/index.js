import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {FilterIcon, HeaderLogo} from '../../utils/icons';
import {styles} from './style';
import {useSelector, useDispatch} from 'react-redux';

export default Header = ({setIsFilterVisible}) => {
  const {filters} = useSelector(state => state.launches);

  return (
    <View style={styles.container}>
      <HeaderLogo />
      <Text style={styles.headerText}>Launch YC</Text>

      {filters.length > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{filters.length}</Text>
        </View>
      )}

      <TouchableOpacity style={{padding: 5}} onPress={() => setIsFilterVisible(true)}>
        <FilterIcon />
      </TouchableOpacity>
    </View>
  );
};
