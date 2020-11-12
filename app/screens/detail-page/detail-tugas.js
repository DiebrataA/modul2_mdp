import React from 'react';
import {View, SafeAreaView, ScrollView, Image, Text} from 'react-native';

import Styles from './detail.styles';

export default function Detail({route}) {
  const {item} = route.params;

  const anggota = [
    {
      id: 1,
      nama: 'Anggota 1',
    },
    {
      id: 2,
      nama: 'Anggota 2',
    },
    {
      id: 3,
      nama: 'Anggota 3',
    },
    {
      id: 4,
      nama: 'Anggota 4',
    },
  ];

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.cobaja} />
      <ScrollView style={Styles.scrollView}>
        <View style={Styles.view}>
          <View style={Styles.titleContainer}>
            <Text style={Styles.title}>KELOMPOK XYY</Text>
          </View>
          <View style={Styles.view1}>
            <Image source={{uri: item.avatar}} style={Styles.image} />
            <View style={Styles.nameView}>
              <Text style={Styles.nameText}>{`${item.first_name} ${
                item.last_name
              }`}</Text>
              <Text style={Styles.emailText}>{item.email}</Text>
            </View>
          </View>
          <View style={Styles.view2}>
            <View style={{marginBottom: 10}}>
              <Text style={Styles.text}>Anggota Kelompok</Text>
            </View>
            {anggota.map(nama => (
              <View key={nama.id} style={Styles.list}>
                <Text style={Styles.text}>{nama.nama}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
