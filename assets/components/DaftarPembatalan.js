import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import {MaterialCommunityIcons, FontAwesome5} from '@expo/vector-icons';

const DaftarPembatalan = ({navigation}) => {
  return (
  <View>
      <Text style={{
          flex:0.2, 
          backgroundColor:'#311b92', 
          fontSize:26,
          fontWeight : 'bold',
          color:'#FFFFFF',
          textAlign:'center'}}>
          Daftar Pembatalan
      </Text>
    <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,}}>
      <Text style={{margin: 24,
        marginTop: 0,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'}}>
       There is no activity in this page
      </Text>
      <Image 
      style={{width:256,height:256}}
      source={require('../images/Ticket.png')} />
    </View>
    <Text >Copyright @2022 // Bintang Yosafat Putra // 119140185</Text>
    <View style={{height: '10%', borderWidth: 1, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'flex-end'}}>
                <TouchableOpacity style={{height: '100%', width: '25%', borderWidth: 1, justifyContent:'center', alignItems:'center', color:'#1a237e',}}>
                    <FontAwesome5 name={"home"} size={40} onPress={() => navigation.navigate('Beranda')}/>
                    <Text>Beranda</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: '100%', width: '25%', borderWidth: 1, justifyContent:'center', alignItems:'center', color:'#1a237e'}}
                onPress={() => navigation.navigate('PesananSaya')}>
                    <FontAwesome5 name={"book"} size={40} />
                    <Text>Pesanan Saya</Text>
                </TouchableOpacity>
                <View style={{height: '100%', width: '25%', borderWidth: 1, justifyContent:'center', alignItems:'center', color:'#1a237e'}}>
                    <MaterialCommunityIcons name={"table-cancel"} size={40} />
                    <Text>Pembatalan</Text>
                </View>
                <TouchableOpacity style={{height: '100%', width: '25%', borderWidth: 1, justifyContent:'center', alignItems:'center', color:'#1a237e'}}>
                    <FontAwesome5 name={"align-justify"} size={40} onPress={() => navigation.navigate('Lainnya')}/>
                    <Text>Lainnya</Text>
                </TouchableOpacity>
    </View>
</View>
  )
}

export default DaftarPembatalan;
