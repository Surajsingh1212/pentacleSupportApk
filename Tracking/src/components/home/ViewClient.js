import React from 'react';
import { View, Text, Image } from 'react-native';
import CustomHeader from '../utils/CustomHeader';


const ViewClient = ({navigation}) => {
    return (
      <View className="w-full bg-cyan-400 h-screen">
            <CustomHeader title="AlertDetails" navigation={navigation} notificationCount={2}/>
            <View className="flex justify-center items-center mt-3">
                <View className="flex flex-row align-middle justify-between w-[90%] pb-2">
                    <View className="">
                        <Text className=" font-bold text-3xl text-white text-center ">Client Details </Text>
                    </View>
                </View>
            </View>
            <View className=" items-center ">
                <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl h-fit">
                    <View className="flex justify-center items-center text-center ">
                        <Image source={require('../../assets/notification/alert.png')} className="h-72 w-72" />
                    </View>
                    <View className="mt-5 px-5">
                        <Text className="text-2xl font-bold text-cyan-600 mb-2 ">Client Name : Roko Safredi</Text>
                        <Text className="text-xl font-bold text-cyan-600 mb-2 ">Parent Name : Vol Roko</Text>
                        <Text className="text-xl font-bold text-cyan-600 mb-2">State : UP</Text>
                        <Text className="text-xl text-gray-700 ">Website : www.demo.com</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default ViewClient;