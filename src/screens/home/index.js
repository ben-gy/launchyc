import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { navigationNames } from '../../navigations/navigationNames';
import { useSelector, useDispatch } from 'react-redux';
import { Actions } from '../../../action';

export default Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { filters, launches } = useSelector(state => state.launches);

  console.log('=== launches', launches)

  useEffect(() => {
    dispatch(Actions.getAllLaunches());
  }, []);

  return (
    <View>
      <Text>Home screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate(navigationNames.detail)}><Text>Go to Detail</Text></TouchableOpacity>
    </View>
  )
}
