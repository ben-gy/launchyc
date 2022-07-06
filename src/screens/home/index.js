import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
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
import Modal from 'react-native-modal';
import tags from '../../../api_data/tags.json';

export default Home = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {filters, launches, inTraffic, readHits} = useSelector(
    state => state.launches,
  );

  useEffect(() => {
    dispatch(
      Actions.getAllLaunches(
        filters.length > 0
          ? {facetFilters: [`company.tags: ${filters[0]}`]}
          : null,
      ),
    );
  }, [filters]);

  const onRefresh = () => {
    dispatch(
      Actions.getAllLaunches(
        filters.length > 0
          ? {facetFilters: [`company.tags: ${filters[0]}`]}
          : null,
      ),
    );
  };

  const clearFilter = () => {
    dispatch(Actions.clearFilter());
    setIsFilterVisible(false);
  };

  const applyFilter = tag => {
    dispatch(Actions.applyFilter(tag));
    setIsFilterVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header setIsFilterVisible={setIsFilterVisible} />
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

      <Modal
        isVisible={isFilterVisible}
        onBackdropPress={() => setIsFilterVisible(false)}
        onBackButtonPress={() => setIsFilterVisible(false)}
        onSwipeComplete={() => setIsFilterVisible(false)}
        swipeDirection="down"
        style={styles.modal}>
        <View style={styles.modalContainer}>
          <View style={styles.tagsContainer}>
            {Object.entries(tags).map(([tag, number]) => {
              if (number > 2)
                // show only tag that has 3+ items
                return (
                  <TouchableOpacity
                    key={tag}
                    style={{
                      ...styles.tag,
                      backgroundColor: filters.includes(tag)
                        ? '#F26522'
                        : '#DFDFDF',
                    }}
                    onPress={() => applyFilter(tag)}>
                    <Text
                      style={{
                        ...styles.tagText,
                        color: filters.includes(tag) ? 'white' : 'black',
                      }}>
                      {tag}
                    </Text>
                  </TouchableOpacity>
                );
            })}
          </View>
          <TouchableOpacity style={styles.clear} onPress={() => clearFilter()}>
            <Text style={styles.clearText}>CLEAR FILTERS</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
