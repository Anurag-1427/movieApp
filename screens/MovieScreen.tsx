import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {styles} from '../theme';

var {width, height} = Dimensions.get('window');

const MovieScreen = () => {
  const {params: item} = useRoute();
  useEffect(() => {
    // call the movie detail api
  }, [item]);
  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 20, marginTop: 20}}
      className="flex-1 bg-neutral-900">
      {/* back button and movie poster */}
      <View className="w-full">
        <SafeAreaView
          //   className="absolute z-20 w-full flex-row justify-between items-center px-4"
          className="w-full flex-row justify-between items-center px-4"
          //   style={{borderWidth: 1, borderColor: 'white'}}
        >
          <TouchableOpacity
            style={styles.background}
            className="rounded-xl p-1">
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

export default MovieScreen;
