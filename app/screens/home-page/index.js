import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  ToastAndroid,
  Text,
} from 'react-native';

import Styles from './index.styles';
import * as Api from '../../services/api';

export default function Index({navigation}) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    Api.getUserData()
      .then(res => setUserData(res))
      .catch(err => alert(err.message));
  }, []);

  const onPressCardView = item => {
    ToastAndroid.showWithGravity(
      item.first_name,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
    navigation.navigate('Detail Page', {item});
  };

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView style={Styles.scrollView}>
        <Text>KELOMPOK XX</Text>
        {userData.map(item => (
          <TouchableOpacity
            key={item.id}
            style={Styles.cardView}
            onPress={() => onPressCardView(item)}>
            <View style={Styles.cardView1}>
              <Image source={{uri: item.avatar}} style={Styles.image} />
            </View>
            <View style={Styles.cardView2}>
              <Text style={Styles.text}>{`${item.first_name} ${
                item.last_name
              }`}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
