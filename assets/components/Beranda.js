import React ,{ useState }  from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet, Picker} from 'react-native';
import { MaterialCommunityIcons,  FontAwesome5} from '@expo/vector-icons';
import IconKapal from '../images/boat.png'
import IconCalendar from '../images/calendar.png'
import IconJam from '../images/clock.png'
import IconPenumpang from '../images/passenger.png'


  const Beranda = ({navigation}) => {
    const [awal, onChangeAwal] = React.useState('');
    const [tujuan, onChangeTujuan] = React.useState('');
    const [layanan, onChangeLayanan] = React.useState('');
    const [tanggal, onChangeTanggal] = React.useState('');
    const [jam, onChangeJam] = React.useState('');
    const simpanData = () => {
        alert('Masukkan semua data yang dibutuhkan!')
      if (awal === '' || tujuan === '' || layanan === '' || tanggal === '' || jam === '') {
      } else if (awal == tujuan) {
          alert('Pelabuhan awal dan tujuan tidak boleh sama!')
      } else {
          navigation.navigate('Konfirmasi',{
              Awal : awal,
              Tujuan : tujuan,
              Layanan : layanan,
              Tanggal : tanggal,
              Jam : jam,
          })
      }
  }

  return(
      <View style={{flex: 1}}>
            <View style={styles.background}>
      <View>
        <Text style={{fontSize:30, fontWeight:'bold', color:'blue', paddingBottom:15}}> Kapalzy
        </Text>
        </View>
                <View style={styles.row}><
                    Text style={{textAlign: 'center'}}>Pelabuhan Awal</Text>
                    <View style={styles.rowDalem}>
                        <Image
                        style={styles.icon}
                        source = {IconKapal}
                        />
                        <Picker 
                        // 'style={styles.borderInput}'
                        selectedValue={awal}
                        onValueChange={(itemValue) =>
                        onChangeAwal(itemValue)
                        }>
                            <Picker.Item label="Pilih Pelabuhan Awal" value="" />
                            <Picker.Item label="Bakauheni" value="Bakauheni" />
                            <Picker.Item label="Merak" value="Merak" />
                        </Picker>
                    </View>
                </View>

                <View style={styles.row}><
                    Text style={{textAlign: 'center'}}>Pelabuhan Tujuan</Text>
                    <View style={styles.rowDalem}>
                        <Image
                        style={styles.icon}
                        source = {IconKapal}
                        />
                        <Picker 
                        // 'style={styles.borderInput}'
                        selectedValue={tujuan}
                        onValueChange={(itemValue) =>
                        onChangeTujuan(itemValue)
                        }>
                            <Picker.Item label="Pilih Pelabuhan Tujuan" value="" />
                            <Picker.Item label="Bakauheni" value="Bakauheni" />
                            <Picker.Item label="Merak" value="Merak" />
                        </Picker>
                    </View>
                </View>

                <View style={styles.row}><
                    Text style={{textAlign: 'center'}}>Kelas Layanan</Text>
                    <View style={styles.rowDalem}>
                        <Image
                        style={styles.icon}
                        source = {IconPenumpang}
                        />
                        <Picker 
                        // 'style={styles.borderInput}'
                        selectedValue={layanan}
                        onValueChange={(itemValue) =>
                        onChangeLayanan(itemValue)
                        }>
                            <Picker.Item label="Pilih Layanan" value="" />
                            <Picker.Item label="Reguler" value="Reguler" />
                            <Picker.Item label="Eksekutif" value="Eksekutif" />
                        </Picker>
                    </View>
                </View>

                <View style={styles.row}><
                    Text style={{textAlign: 'center'}}>Tanggal Masuk Pelabuhan</Text>
                    <View style={styles.rowDalem}>
                        <Image
                        style={styles.icon}
                        source = {IconCalendar}
                        />
                        <Picker 
                        // 'style={styles.borderInput}'
                        selectedValue={tanggal}
                        onValueChange={(itemValue) =>
                        onChangeTanggal(itemValue)
                        }>
                            <Picker.Item label="Pilih Tanggal Masuk" value="" />
                            <Picker.Item label="Minggu, 27 Maret 2022" value="Minggu, 27 Maret 2022" />
                            <Picker.Item label="Senin, 28 Maret 2022" value="Senin, 28 Maret 2022" />
                            <Picker.Item label="Selasa, 29 Maret 2022" value="Selasa, 29 Maret 2022" />
                            <Picker.Item label="Rabu, 30 Maret 2022" value="Rabu, 30 Maret 2022" />
                            <Picker.Item label="Kamis, 31 Maret 2022" value="Kamis, 31 Maret 2022" />
                        </Picker>
                    </View>
                </View>

                <View style={styles.row}>
                    <Text style={{textAlign: 'center'}}>Jam Masuk Pelabuhan</Text>
                    <View style={styles.rowDalem}>
                        <Image
                        style={styles.icon}
                        source = {IconJam}
                        />
                        <Picker 
                        // 'style={styles.borderInput}'
                        selectedValue={jam}
                        onValueChange={(itemValue) =>
                        onChangeJam(itemValue)
                        }>
                            <Picker.Item label="Pilih Jam Masuk" value="" />
                            <Picker.Item label="00:30" value="00:30" />
                            <Picker.Item label="01:45" value="01:45" />
                            <Picker.Item label="03.00" value="03.00" />
                            <Picker.Item label="04.15" value="04.15" />
                            <Picker.Item label="05.30" value="05.30" />
                            <Picker.Item label="06:45" value="06:45" />
                            <Picker.Item label="08.00" value="08.00" />
                            <Picker.Item label="09.15" value="09.15" />
                            <Picker.Item label="10.30" value="10.30" />
                            <Picker.Item label="11:45" value="11:45" />
                            <Picker.Item label="13.00" value="13.00" />
                            <Picker.Item label="14.15" value="14.15" />
                            <Picker.Item label="15.30" value="15.30" />
                            <Picker.Item label="16:45" value="16:45" />
                            <Picker.Item label="18.00" value="18.00" />
                            <Picker.Item label="19.15" value="19.15" />
                            <Picker.Item label="20.30" value="20.30" />
                            <Picker.Item label="21:45" value="21:45" />
                            <Picker.Item label="23.00" value="23.00" />
                        </Picker>
                    </View>
                </View>
                    
                <View style={{marginTop : "10%" , width : "80%"}}>
                <TouchableOpacity 
                style={{
                    borderWidth : 1,
                    height : 30,
                    width : "35%",
                    justifyContent : "center",
                    alignItem : "center",
                    borderRadius : 40 ,
                        backgroundColor : "#f57c00" , alignSelf : "center" , textAlign : "center"
                        }} onPress={() => navigation.navigate('DaftarPemesanan')}
                        >       
                            <Text style={{color : "white", alignSelf : "center"}}> BUAT TIKET </Text>
                        </TouchableOpacity>
                </View>
                
            </View> 
            <View style={{height: '10%', borderWidth: 1, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center'}}>
                <View style={{height: '100%', width: '25%', borderWidth: 1, justifyContent:'center', alignItems:'center', color:'#1a237e'}}>
                    <FontAwesome5 name={"home"} size={40} />
                    <Text>Beranda</Text>
                </View>
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
                <TouchableOpacity style={{height: '100%', width: '25%', borderWidth: 1, justifyContent:'center', alignItems:'center', color:'#1a237e'}}>
                    <FontAwesome5 name={"align-justify"} size={40} onPress={() => navigation.navigate('Lainnya')}/>
                    <Text>Lainnya</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  textinput:{
    height : 42 ,
    width : "50%",
    borderWidth : 1, 
    borderRadius : 10
  },
  container:{
    marginLeft : 50,
    flex: 1,
    justifyContent :"center" , 
    alignSelf : "center" , 
    alignContent : "center" , 
    alignItems : "left",
    borderWidth : 3,
    elevation : 2,
  },
  background:{
    // marginLeft : 100,
    flex: 1,
    marginHorizontal: '10%',
    marginTop: '10%',
    // borderWidth : 3,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor:'#b3e5fc',
  },
  subheading:{
    color:'#9e9e9e',
    alignSelf:'center'
  },
  icon:{
    width:25,
    height:25,
    marginLeft: 15
  },
  row: {
    height:70,
    width:250,
  },
  rowDalem: {
    borderWidth: 1, 
    flex: 1, 
    flexDirection: 'row', 
    borderRadius: 10, 
    alignItems: 'center',
  },
  textIcon: {
    marginLeft: 10, 
    borderRadius: 5, 
    flex: 1
  }

});


export default Beranda;