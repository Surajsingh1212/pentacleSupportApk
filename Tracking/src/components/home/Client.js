import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../utils/CustomHeader';


const Client = ({ navigation }) => {
    const Navigation = useNavigation();
    const handleAlertsDetails = () => {
        Navigation.navigate('ViewClient')
    }
    const handleAddClient=()=>{
        navigation.navigate('AddClient')
    }
    return (
        <View className="w-full bg-cyan-400 h-screen">
            <CustomHeader title="Alert" navigation={navigation} notificationCount={1} />
            <View className="flex justify-center items-center my-3 mt-5">
                <View className="flex flex-row align-middle justify-between w-[90%] pb-2">
                    <View className="">
                        <Text className=" font-bold sm:text-3xl md:text-3xl text-2xl text-white text-center ">All Clients</Text>
                    </View>
                    <View className="">
                        <Text className=" font-bold sm:text-3xl md:text-3xl text-2xl text-white text-center "><Button onPress={handleAddClient} title='Add Client'  /></Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                <TouchableOpacity onPress={handleAlertsDetails}>
                    <View className="flex justify-center items-center">
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex-row justify-between">
                                <View className="flex-row space-x-2 space-y-2 w-2/3">
                                    <View className="border rounded-full p-1 border-cyan-500 my-auto">
                                        <Image source={require("../../assets/avatar/user.png")} className="rounded-full sm:h-16 sm:w-16 md:h-16 md:w-16 h-12 w-12" />
                                    </View>
                                    <View className="flex">
                                        <Text className="text-cyan-500 sm:text-xl md:text-xl text-md  font-bold ">NAME : SURAJ SINGH</Text>
                                        <Text className="sm:text-xl md:text-xl text-md font-semibold text-green-500">GST NO : 43DF546KKF</Text>
                                    </View>
                                </View>
                              
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleAlertsDetails} className="mt-5">
                    <View className="flex justify-center items-center">
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex-row justify-between">
                                <View className="flex-row space-x-3 space-y-2 w-2/3">
                                    <View className="border rounded-full p-1 border-cyan-500 my-auto">
                                        <Image source={require("../../assets/avatar/user.png")} className="rounded-full sm:h-16 sm:w-16 md:h-16 md:w-16 h-12 w-12" />
                                    </View>
                                    <View className="flex">
                                        <Text className="text-cyan-500 sm:text-xl md:text-xl text-md  font-bold ">NAME : SURAJ SINGH</Text>
                                        <Text className="sm:text-xl md:text-xl text-md font-semibold text-green-500">GST NO : 43DF546KKF</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleAlertsDetails} className="mt-5">
                    <View className="flex justify-center items-center">
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex-row justify-between">
                                <View className="flex-row space-x-3 space-y-2 w-2/3">
                                    <View className="border rounded-full p-1 border-cyan-500 my-auto">
                                        <Image source={require("../../assets/avatar/user.png")} className="rounded-full sm:h-16 sm:w-16 md:h-16 md:w-16 h-12 w-12" />
                                    </View>
                                    <View className="flex">
                                        <Text className="text-cyan-500 sm:text-xl md:text-xl text-md  font-bold ">NAME : SURAJ SINGH</Text>
                                        <Text className="sm:text-xl md:text-xl text-md font-semibold text-green-500">GST NO : 43DF546KKF</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleAlertsDetails} className="mt-5">
                    <View className="flex justify-center items-center">
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex-row justify-between">
                                <View className="flex-row space-x-3 space-y-2 w-2/3">
                                    <View className="border rounded-full p-1 border-cyan-500 my-auto">
                                        <Image source={require("../../assets/avatar/user.png")} className="rounded-full sm:h-16 sm:w-16 md:h-16 md:w-16 h-12 w-12" />
                                    </View>
                                    <View className="flex">
                                        <Text className="text-cyan-500 sm:text-xl md:text-xl text-md  font-bold ">NAME : SURAJ SINGH</Text>
                                        <Text className="sm:text-xl md:text-xl text-md font-semibold text-green-500">GST NO : 43DF546KKF</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleAlertsDetails} className="mt-5">
                    <View className="flex justify-center items-center">
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex-row justify-between">
                                <View className="flex-row space-x-3 space-y-2 w-2/3">
                                    <View className="border rounded-full p-1 border-cyan-500 my-auto">
                                        <Image source={require("../../assets/avatar/user.png")} className="rounded-full sm:h-16 sm:w-16 md:h-16 md:w-16 h-12 w-12" />
                                    </View>
                                    <View className="flex">
                                        <Text className="text-cyan-500 sm:text-xl md:text-xl text-md  font-bold ">NAME : SURAJ SINGH</Text>
                                        <Text className="sm:text-xl md:text-xl text-md font-semibold text-green-500">GST NO : 43DF546KKF</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleAlertsDetails} className="mt-5 mb-5">
                    <View className="flex justify-center items-center">
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex-row justify-between">
                                <View className="flex-row space-x-3 space-y-2 w-2/3">
                                    <View className="border rounded-full p-1 border-cyan-500 my-auto">
                                        <Image source={require("../../assets/avatar/user.png")} className="rounded-full sm:h-16 sm:w-16 md:h-16 md:w-16 h-12 w-12" />
                                    </View>
                                    <View className="flex">
                                        <Text className="text-cyan-500 sm:text-xl md:text-xl text-md  font-bold ">NAME : SURAJ SINGH</Text>
                                        <Text className="sm:text-xl md:text-xl text-md font-semibold text-green-500">GST NO : 43DF546KKF</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

export default Client;