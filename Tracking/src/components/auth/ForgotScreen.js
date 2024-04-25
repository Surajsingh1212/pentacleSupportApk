import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import Fields from '../common/Fields';
import { useNavigation } from '@react-navigation/native';


const ForgotScreen = () => {
    const navigation = useNavigation()
    const handleLoginPress=()=>{
        navigation.navigate('Login')
    }
    return (
        <View className="w-full bg-cyan-400 ">
            <Text className=" font-bold text-6xl my-24 text-white text-center ">
                FORGOT PASSWORD
            </Text>
            <View className="bg-slate-50 w-screen rounded-tl-[150] h-[710] pt-[150] items-center">
                <Text className="text-3xl font-bold text-cyan-400">FORGOT PASSWORD</Text>
                <Text className="text-lg mb-14">Lost your password </Text>
                <View className="w-[80%] shadow-lg">
                <Fields placeholder="Enter Your Email " keyboardType={"email-address"} />
                </View>
                <TouchableOpacity className='bg-cyan-400 rounded-xl items-center w-[80%] mt-4' onPress={handleLoginPress}>
                    <Text className="text-[#ffffff] text-xl font-bold w-[80%] rounded-xl py-4 text-center">
                        Recover Now 
                    </Text>
                </TouchableOpacity>
                <Text className="text-xl mt-3">
                You have an password ? <Text className="text-cyan-400" onPress={handleLoginPress}>Login Here</Text>
                </Text>
            </View>
        </View>
    )
}

export default ForgotScreen