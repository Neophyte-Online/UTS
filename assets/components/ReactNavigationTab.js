import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function BerandaScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Beranda Apps</Text>
    </View>
  );
}

function PesananSayaScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Halaman Pesananan</Text>
    </View>
  );
}

function PembatalanScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Halaman Pembatalan</Text>
    </View>
  );
}

function LainnyaScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pop Up Screen Lainnya</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Beranda" component={BerandaScreen} />
      <Tab.Screen name="Pesanan Saya" component={PesananSayaScreen} />
      <Tab.Screen name="Pembatalan" component={PembatalanScreen} />
      <Tab.Screen name="Lainnya" component={LainnyaScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
