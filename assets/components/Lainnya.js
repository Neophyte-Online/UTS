import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons,  FontAwesome5, Ionicons, Fontisto, Zocial} from '@expo/vector-icons';

const Lainnya = ({navigation}) => {
    return (
    <View>
      <View style={styles.container}>
        <View style={{width:'100%', height:'50%', flexDirection:'row', borderWidth:1}}>
          <View style={{width:'50%', height:'100%', backgroundColor:'white', borderWidth:1}}>
             <View style={styles.icon}>
               <FontAwesome5 name={"search"} size={40} />
               <Text style={styles.littletext}>Cek Pemesanan</Text>
              </View>
          </View>
          <View style={{width:'50%', height:'100%', backgroundColor:'white',borderWidth:1}}>
          <View style={styles.icon}>
               <Ionicons name={"ios-people"} size={40} />
               <Text style={styles.littletext}>Profil</Text>
              </View>
          </View>
        </View>
        <View style={{width:'100%', height:'50%', flexDirection:'row',borderWidth:1}}>
        <View style={{width:'50%', height:'100%', backgroundColor:'white', borderWidth:1}}>
        <View style={styles.icon}>
               <Ionicons name={"call"} size={40} />
               <Text style={styles.littletext}>Hubungi Kami</Text>
              </View>
          </View>
          <View style={{width:'50%', height:'100%', backgroundColor:'white', borderWidth:1}}>
          <View style={styles.icon}>
               <Fontisto name={"history"} size={40} />
               <Text style={styles.littletext}>Riwayat Pemesanan</Text>
              </View>
          </View>
        </View>
    </View>
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
                <TouchableOpacity style={{height: '100%', width: '25%', borderWidth: 1, justifyContent:'center', alignItems:'center', color:'#1a237e'}}
                    onPress={() => navigation.navigate('DaftarPembatalan')}>
                    <MaterialCommunityIcons name={"table-cancel"} size={40} />
                    <Text>Pembatalan</Text>
                </TouchableOpacity>
                <View style={{height: '100%', width: '25%', borderWidth: 1, justifyContent:'center', alignItems:'center', color:'#1a237e'}}>
                    <FontAwesome5 name={"align-justify"} size={40} />
                    <Text>Lainnya</Text>
                </View>
      </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    
    background:{
        flex:1,
        alignItems: 'center',
        borderWidth: 1
    },
    container: {
      height:'75%',
      alignItems: 'center',
      paddingVertical:20,
      justifyContent: 'center',
      padding: 24,
    },
    littletext: {
      fontSize:9,
      fontWeight:'bold',
      marginTop: 3
    },
    icon: {
      height: '100%', 
      width: '100%',  
      justifyContent:'center', 
      alignItems:'center', 
      color:'#1a237e'
    }
  });

  export default Lainnya;