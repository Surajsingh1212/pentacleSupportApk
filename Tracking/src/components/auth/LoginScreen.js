import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';;
import Fields from '../common/Fields';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation()
    const handleForgotPress=()=>{
        navigation.navigate('Forgot')
    }
    const handleLoginPress=()=>{
        navigation.navigate('Home')
    }
    return (
        <View className="w-full  bg-cyan-400">
            <Text className=" font-bold text-6xl my-24 text-white text-center ">
                LOGIN HERE
            </Text>
            <View className="bg-slate-50 w-screen rounded-tl-[150] h-[710] pt-[150] items-center">
                <Text className="text-3xl font-bold text-cyan-400">WELCOME BACK </Text>
                <Text className="text-lg mb-14">Login to your account </Text>
                <View className="w-[80%] shadow-sm">
                <Fields placeholder="Enter Your Email " keyboardType={"email-address"} />
                </View>
                <View className="w-[80%] shadow-sm">
                <Fields placeholder="Password" secureTextEntry={true} />
                </View>

                <TouchableOpacity className='bg-cyan-400 rounded-xl items-center w-[80%] mt-4'>
                    <Text className="text-[#ffffff] text-xl font-bold w-[80%] rounded-xl py-4 text-center" onPress={handleLoginPress}>
                        Login Now
                    </Text>
                </TouchableOpacity>
                <Text className="text-xl text-right text-cyan-400 mt-2" onPress={handleForgotPress}>Forgot Password ?</Text>
            </View>
        </View>
    )
}

export default LoginScreen