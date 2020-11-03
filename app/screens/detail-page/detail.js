import React from 'react';
import {View, SafeAreaView, ScrollView, Image, Text} from 'react-native';

import Styles from './detail.styles';

export default function Detail({route}) {
  const {item} = route.params;

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView style={Styles.scrollView}>
        <View style={Styles.view}>
          <Text>KELMPOK XX</Text>
          <View style={Styles.view1}>
            <Image source={{uri: item.avatar}} style={Styles.image} />
          </View>
          <View style={Styles.view2}>
            <Text style={Styles.text}>{`${item.first_name} ${
              item.last_name
            }`}</Text>
            <Text style={Styles.text}>{item.email}</Text>
            <Text style={Styles.text}>Anggota Kelompok</Text>
            <Text style={Styles.text}>Anggota 1</Text>
            <Text style={Styles.text}>Anggota 2</Text>
            <Text style={Styles.text}>Anggota 3</Text>
            <Text style={Styles.text}>Anggota 4</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
