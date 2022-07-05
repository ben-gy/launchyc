import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {navigationNames} from '../../navigations/navigationNames';
import {useSelector, useDispatch} from 'react-redux';
import {Actions} from '../../../action';
import Header from '../../components/header';
import {styles} from './style';
import {getDaysDiff} from '../../utils';

export default Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {filters, launches, inTraffic, readHits} = useSelector(
    state => state.launches,
  );

  useEffect(() => {
    dispatch(Actions.getAllLaunches());
  }, []);

  const onRefresh = () => {
    dispatch(Actions.getAllLaunches());
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={inTraffic} onRefresh={onRefresh} />
        }>
        <View>
          {launches &&
            launches.hits &&
            launches.hits.map(hit => (
              <TouchableOpacity
                key={hit.id}
                onPress={() =>
                  navigation.navigate(navigationNames.detail, {itemId: hit.id})
                }>
                <View style={styles.itemContainer}>
                  <Text
                    style={{
                      ...styles.itemTitle,
                      color: readHits.includes(hit.id)
                        ? '#0000004D'
                        : '#000000',
                    }}>
                    {hit.title}
                  </Text>
                  <View>
                    <Text style={styles.itemDesc}>{`#${hit.id} • ${getDaysDiff(
                      hit.created_at,
                    )} hours ago • ${hit.company.batch} • ${
                      hit.total_vote_count
                    } votes`}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
