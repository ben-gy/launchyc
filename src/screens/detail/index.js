import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {navigationNames} from '../../navigations/navigationNames';

export default Detail = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Detail screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(navigationNames.home)}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};
