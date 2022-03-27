import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Beranda from './assets/components/Beranda';
import DaftarPemesanan from './assets/components/DaftarPemesanan';
import PesananSaya from './assets/components/PesananSaya';
import DaftarPembatalan from './assets/components/DaftarPembatalan';
import Lainnya from './assets/components/Lainnya';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Beranda"
        component={Beranda}
      />
      <Stack.Screen
        name="DaftarPemesanan"
        component={DaftarPemesanan}
      />
      <Stack.Screen
        name="PesananSaya"
        component={PesananSaya}
      />
      <Stack.Screen
        name="DaftarPembatalan"
        component={DaftarPembatalan}
      />
      <Stack.Screen
        name="Lainnya"
        component={Lainnya}
      />
    </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;