import React from 'react';
import { View, Text, Image, ScrollView, Button } from 'react-native';
import Fields from '../common/Fields';
import CustomHeader from '../utils/CustomHeader';


const ChangePassword = ({navigation}) => {
    return (
      <View className="flex-1">
         <CustomHeader title="CreateJob" navigation={navigation} notificationCount={3}/>
        <View className="flex flex-1 justify-center items-center bg-[#c7c5c5]">
        <View className="relative flex justify-center items-center z-40">
          <Image
            source={require("../../assets/avatar/user2.png")}
            className="sm:h-28 md:h-28 sm:w-28 md:w-28 h-24 w-24 rounded-full absolute bottom-[-50] left-150  shadow-3xl"
          />
        </View>
        <View className="bg-slate-50 shadow-xl w-[90%] rounded-3xl h-[80%] pb-8 pt-10 sm:pb-8 sm:pt-8 md:pb-8 md:pt-8">
          <ScrollView>
            <View className="px-10 w-full">
              <Text className="text-lg text-slate-700">Old Password *</Text>
              <View className=" w-full">
                <Fields placeholder="*********"/>
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">New Password *</Text>
              <View>
                <Fields placeholder="***********"/>
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Confirm Password *</Text>
              <View>
                <Fields placeholder="*********"/>
              </View>
            </View>
            <View className="px-10">
              <View className="rounded-xl mt-4 w-100">
                <Button title="Update Now "  color="#f43439"/>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      </View>
    );
}

export default ChangePassword;