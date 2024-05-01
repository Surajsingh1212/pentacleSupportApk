import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import menuItems from "./menuItems";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const DrawerContent = (props) => {
  const [activeScreen, setActiveScreen ] = useState('Home');
  return (
    <View  className="flex-1">
       <View className="pt-10 px-5 bg-[#f43439] rounded-b-3xl">
          <View className="flex flex-row items-center mb-5">
            <Image source={require('../../assets/avatar/avatar.jpg')} className="shadow-lg" style={{ width: 60, height: 60, borderRadius: 30 }} />
            <View className="ml-4">
              <Text className="text-lg font-bold  text-slate-100 shadow-lg">Suraj Singh</Text>
              <Text className="text-base text-slate-200 shadow-lg">text@gmail.com</Text>
            </View>
          </View>
        </View>
      <DrawerContentScrollView {...props}>
       
        <View className="mb-5 p-3">
          {menuItems.map((item,index)=>(
             <Text key={index} className={`py-3 px-3  shadow-2xl rounded-lg text-lg  ${activeScreen === item.screen ? 'bg-[#f43439] text-white' : 'bg-transparent text-gray-600'}`}
             onPress={() => { setActiveScreen(item.screen); props.navigation.navigate(item.screen) }}>
             <View className="transform translate-y-1">
               <Icon name={item.icon} color={activeScreen === item.screen ? '#ffffff' : 'rgb(75 85 99)'} size={25} />
             </View> {item.label}
           </Text>
          ))}
        </View>
      </DrawerContentScrollView>
      <View className=" px-3 py-2">
        <Text className="bg-[#f43439] py-3 px-3 text-white shadow-2xl rounded-lg text-xl text-center" onPress={() => { }}>Logout <Icon name="logout" className="" size={30} /></Text>
      </View>
    </View>
  );
}

export default DrawerContent;
