import React from 'react';
import { View, Text, ScrollView,TouchableOpacity } from 'react-native';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomHeader from '../utils/CustomHeader';
import { useNavigation } from '@react-navigation/native';

const Home = ({ navigation }) => {
    const Navigation = useNavigation()   
    const handleViewAssignTicket=()=>{
        Navigation.navigate('ViewTicket')
    }
    const handleGenerateTicket =()=>{
        Navigation.navigate('AddTicket')
      }
    return (
        <View className="w-full bg-[#c7c5c5] h-screen">
            <CustomHeader title="Home" navigation={navigation} notificationCount={5} />
            <ScrollView>
                <View className="flex justify-center items-center mt-5">
                    <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                        <View className=" flex flex-row align-middle justify-between gap-3">
                            <View className="bg-[#f43439] flex items-center justify-center py-auto w-[10%] rounded-xl">
                                <Text className="text-cyan-50 text-xl font-bold text-center py-auto">
                                    <Icon2 name="archive-check-outline" size={30} />
                                </Text>
                            </View>
                            <View className="w-[90%] font-bold text-xl">
                                <Text className="text-black text-2xl font-bold">OPEN TICKET</Text>
                                <Text className="text-md text-slate-500">00</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View className="flex justify-center items-center mt-5">
                    <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                        <View className=" flex flex-row align-middle justify-between gap-3">
                            <View className="bg-[#f43439] flex items-center justify-center py-auto w-[10%] rounded-xl">
                                <Text className="text-cyan-50 text-xl font-bold text-center py-auto">
                                    <Icon2 name="alert" size={30} />
                                </Text>
                            </View>
                            <View className="w-[90%] font-bold text-xl">
                                <Text className="text-black text-2xl font-bold">CLOSED TICKET</Text>
                                <Text className="text-md text-slate-500">00</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View className="flex justify-center items-center mt-5">
                    <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                    <TouchableOpacity onPress={handleViewAssignTicket}>
                        <View className=" flex flex-row align-middle justify-between gap-3">
                            <View className="bg-[#f43439] flex items-center justify-center py-auto w-[10%] rounded-xl">
                                <Text className="text-cyan-50 text-xl font-bold text-center py-auto">
                                    <Icon2 name="card-text" size={30} />
                                </Text>
                            </View>
                            <View className="w-[90%] font-bold text-xl">
                                <Text className="text-black text-2xl font-bold">VIEW ASSIGN TICKET</Text>
                                <Text className="text-md text-slate-500">00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    </View>
                </View>
                <View className="flex justify-center items-center mt-5">
                    <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                        <TouchableOpacity onPress={handleGenerateTicket}>
                        <View className=" flex flex-row align-middle justify-between gap-3">
                            <View className="bg-[#f43439] flex items-center justify-center py-auto w-[10%] rounded-xl">
                                <Text className="text-cyan-50 text-xl font-bold text-center py-auto">
                                    <Icon2 name="alert-plus" size={30} />
                                </Text>
                            </View>
                            <View className="w-[90%] font-bold text-xl">
                                <Text className="text-black text-2xl font-bold">GENERATE TICKET</Text>
                                <Text className="text-md text-slate-500">00</Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default Home;