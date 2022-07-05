import {useNavigation} from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {navigationNames} from '../../navigations/navigationNames';
import {useSelector, useDispatch} from 'react-redux';
import Markdown from 'react-native-markdown-display';
import {BackIcon, ShareIcon} from '../../utils/icons';
import {markdownStyles, styles} from './style';
import {Linking} from 'react-native';
import {getDaysDiff} from '../../utils';
import { Actions } from '../../../action';

export default Detail = ({route}) => {
  const navigation = useNavigation();
  const {launches} = useSelector(state => state.launches);
  const dispatch = useDispatch();

  const {itemId} = route.params;

  const hit = launches.hits.find(h => h.id === itemId);

  useEffect(() => {
    dispatch(Actions.readHit(itemId));
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={{padding: 5}}
          onPress={() => navigation.navigate(navigationNames.home)}>
          <BackIcon />
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 5}}>
          <ShareIcon />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View>
          <View style={styles.titleBody}>
            <View style={styles.tags}>
              {hit.company.tags.map(tag => (
                <View key={tag} style={styles.tag}>
                  <Text style={styles.tagText}>{tag.toUpperCase()}</Text>
                </View>
              ))}
            </View>
            <Text style={styles.title}>{hit.title}</Text>
            <View style={styles.titleFooter}>
              <Text
                style={styles.link}
                onPress={() => Linking.openURL(hit.company.url)}>
                {hit.company.url}
              </Text>
              <Text style={styles.itemDesc}>{`#${hit.id} • ${getDaysDiff(
                hit.created_at,
              )} hours ago • ${hit.total_vote_count} votes`}</Text>
            </View>
          </View>
          <View style={{padding: 24}}>
            <Markdown style={markdownStyles}>{hit.body}</Markdown>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
