import React from 'react';
import { View, Text, Image } from 'react-native';
import CustomHeader from '../utils/CustomHeader';


const ViewActivity = ({navigation}) => {
    return (
      <View className="w-full bg-[#c7c5c5] h-screen">
            <CustomHeader title="AlertDetails" navigation={navigation} notificationCount={2}/>
            <View className="flex justify-center items-center mt-3">
                <View className="flex flex-row align-middle justify-between w-[90%] pb-2">
                    <View className="">
                        <Text className=" font-bold text-3xl text-white text-center ">Activity Details  </Text>
                    </View>
                </View>
            </View>
            <View className=" items-center ">
                <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl h-fit">
                    <View className="mt-5 px-5">
                        <Text className="text-2xl font-bold text-[#f43439] mb-2">S.No : 1</Text>
                        <Text className="text-xl font-bold text-[#f43439] mb-2">Case No : 2404232097</Text>
                        <Text className="text-xl font-bold text-[#f43439] mb-2">Client Name : Dizital Dreams</Text>
                        <Text className="text-xl text-[#f43439] mb-2 font-bold">Service Person : Prateek Tripathi</Text>
                        <Text className="text-xl text-[#f43439] mb-2 font-bold">Created Date : Apr 23 2024 11:32AM</Text>
                        <Text className="text-xl text-[#f43439] mb-2 font-bold">Assigned By : Self</Text>
                        <Text className="text-xl text-[#f43439] mb-2 font-bold">Priority : P1 - Urgent</Text>
                        <Text className="text-xl text-[#f43439] mb-2 font-bold">Remarks : NA</Text>
                        <Text className="text-xl text-[#f43439] mb-2 font-bold">Product Name : </Text>
                        <Text className="text-xl text-[#f43439] mb-2 font-bold">Add Activity : </Text>
                        <Text className="text-xl text-[#f43439] mb-2 font-bold">Status : Close</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default ViewActivity;