import React ,{ useState }  from 'react';
import {TouchableOpacity, View, Text, TextInput, Image, StyleSheet} from 'react-native';

const DaftarPemesanan = ({navigation}) => {
    return(
      <View style={{flex:1, backgroundColor:'#FFFFFF'}}>
        <View style = {{flex: 1}}>
          <Text style={{
            color:'white',
            fontsize:'24',
            fontWeight:'bold',
            justifyContent:'center'
          }}
          >Daftar Pemesanan</Text>
        </View>
          <View style={{
            width:350,
            height:250,
            backgroundColor:'white',
            borderWidth:2,
            margin:20
          }}>
          <View>
            <Text style={{fontSize:30, fontWeight:'bold', color:'black', paddingBottom:15, textAlign:'center'}}> Kapalzy
            </Text>
            <Text style={{paddingBottom:10}}> KUOTA TERSEDIA (10000)
            </Text>
          <Text style={{paddingBottom:10}}>
            Rincian Tiket
          </Text>
          </View>
          <View style ={{width:350, height:120, backgroundColor:'white'}}>
            <View style ={{width:250, height:100, backgroundColor:'#FFFFFF', justifyContent:'center'}}>
              <Text>TEST</Text>
            </View>
          </View>
        </View>
      </View>
    )
}

export default DaftarPemesanan;
