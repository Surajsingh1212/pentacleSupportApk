
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useState } from 'react';
import Home from '../home/Home';
import Profile from '../home/Profile';
import DrawerContent from './DrawerContent'
import Client from '../home/Client';
import ViewClient from '../home/ViewClient';
import AddClient from '../home/AddClient';
import AddTicket from '../home/AddTicket';
import ViewTicket from '../home/ViewTicket';
  
const Drawer = createDrawerNavigator();

const DrawerNavigator=()=>{
  const [activeScreen,setActiveScreen] =useState('Home')
  return (
    <Drawer.Navigator drawerContent={(props)=><DrawerContent  {...props} activeScreen={activeScreen} setActiveScreen={setActiveScreen}/>}>
      <Drawer.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Drawer.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
      <Drawer.Screen name="Client" component={Client} options={{headerShown:false}}/>
      <Drawer.Screen name="ViewClient" component={ViewClient} options={{headerShown:false}}/>
      <Drawer.Screen name="AddClient" component={AddClient} options={{headerShown:false}}/>
      <Drawer.Screen name="AddTicket" component={AddTicket} options={{headerShown:false}}/>
      <Drawer.Screen name="ViewTicket" component={ViewTicket} options={{headerShown:false}}/>
    </Drawer.Navigator>
  );
}
export default DrawerNavigator