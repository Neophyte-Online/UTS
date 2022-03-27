import React ,{ useState } from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {MaterialCommunityIcons, FontAwesome5} from '@expo/vector-icons';

const PesananSaya = ({navigation}) => {

    return(
    <View>

        <Text style={{
            backgroundColor:'#311b92', 
            fontSize:26,
            fontWeight : 'bold',
            color:'#FFFFFF',
            textAlign:'center'
        }}>Pesanan Anda</Text>
        <View style={{
            width:300,
            height:150,
            borderWidth:1,
            alignSelf:'center',
            marginVertical:20
        }}>
        </View>
        <View style={{height: '10%', borderWidth: 1, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'flex-end'}}>
                <TouchableOpacity style={{height: '100%', width: '25%', borderWidth: 1, justifyContent:'center', alignItems:'center', color:'#1a237e'}}
                onPress={() => navigation.navigate('Beranda')}>
                    <FontAwesome5 name={"home"} size={40} />
                    <Text>Beranda</Text>
                </TouchableOpacity>
                <View style={{height: '100%', width: '25%', borderWidth: 1, justifyContent:'center', alignItems:'center', color:'#1a237e'}}>
                    <FontAwesome5 name={"book"} size={40} />
                    <Text>Pesanan Saya</Text>
                </View>
                <TouchableOpacity style={{height: '100%', width: '25%', borderWidth: 1, justifyContent:'center', alignItems:'center', color:'#1a237e'}}
                onPress={() => navigation.navigate('DaftarPembatalan')}>
                    <MaterialCommunityIcons name={"table-cancel"} size={40} />
                    <Text>Pembatalan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: '100%', width: '25%', borderWidth: 1, justifyContent:'center', alignItems:'center', color:'#1a237e'}}>
                    <FontAwesome5 name={"align-justify"} size={40} onPress={() => navigation.navigate('Lainnya')}/>
                    <Text>Lainnya</Text>
                </TouchableOpacity>
        </View>
    </View>
    )
}

export default PesananSaya;
