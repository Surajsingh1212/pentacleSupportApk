import React from 'react';
import { View, Text, Image, ScrollView, Button } from 'react-native';
import Fields from '../common/Fields';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../utils/CustomHeader';


const AddClient = ({navigation}) => {
    const Navigation = useNavigation()
    const handleCreateClient=()=>{
        Navigation.navigate('Client')
    }
    return (
      <View className="flex-1">
         <CustomHeader title="CreateJob" navigation={navigation} notificationCount={3}/>
        <View className="flex flex-1 justify-center items-center bg-cyan-500">
        <View className="relative flex justify-center items-center z-40">
          <Image
            source={require("../../assets/avatar/user2.png")}
            className="sm:h-28 md:h-28 sm:w-28 md:w-28 h-24 w-24 rounded-full absolute bottom-[-50] left-150  shadow-3xl"
          />
        </View>
        <View className="bg-slate-50 shadow-xl w-[90%] rounded-3xl h-[80%] pb-8 pt-10 sm:pb-8 sm:pt-8 md:pb-8 md:pt-8">
          <ScrollView>
            <View className="px-10 w-full">
              <Text className="text-lg text-slate-700">Sale Person*</Text>
              <View className=" w-full">
                <Fields placeholder="Suraj Singh" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Client Name*</Text>
              <View>
                <Fields placeholder="demo@gmail.com" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Parent Name*</Text>
              <View>
                <Fields placeholder="Example1" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">State*</Text>
              <View>
                <Fields placeholder="Uttar Pradesh" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Website*</Text>
              <View>
                <Fields placeholder="www.demo.com" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Pincode*</Text>
              <View>
                <Fields placeholder="226007" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Email*</Text>
              <View>
                <Fields placeholder="demo@gmail.com" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Income Tax No*</Text>
              <View>
                <Fields placeholder="123232332" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Country*</Text>
              <View>
                <Fields placeholder="IN" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Mobile Number*</Text>
              <View>
                <Fields placeholder="+9123232332" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">GST Number*</Text>
              <View>
                <Fields placeholder="123232332" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Address 1*</Text>
              <View>
                <Fields placeholder="Lucknow" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Address 2*</Text>
              <View>
                <Fields placeholder="VibhutiKhand" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Address 3*</Text>
              <View>
                <Fields placeholder="D77"/>
              </View>
            </View>
            <View className="px-10">
              <View className="rounded-xl mt-4 w-100">
                <Button title="Create Now" onPress={handleCreateClient}/>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      </View>
    );
}

export default AddClient;