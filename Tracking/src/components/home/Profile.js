import React from 'react';
import { View, Text, Image } from 'react-native';
import Fields from '../common/Fields';
import CustomHeader from '../utils/CustomHeader';

const Profile = ({ navigation }) => {
  return (
    <View className="flex-1">
      <CustomHeader title="Profile" navigation={navigation} notificationCount={4} />
      <View className="flex flex-1 justify-center items-center bg-cyan-500">
        <View className="relative flex justify-center items-center z-40">
          <Image
            source={require("../../assets/avatar/avatar.jpg")}
            className="sm:h-28 md:h-28 sm:w-28 md:w-28 h-24 w-24 rounded-full absolute bottom-[-50] left-150  shadow-3xl"
          />
        </View>
        <View className="bg-slate-50 shadow-xl w-[90%] rounded-3xl pb-8 pt-10 sm:pb-8 sm:pt-8 md:pb-8 md:pt-8 ">
          <View className="px-10 w-full">
            <Text className="text-lg text-slate-700">Full Name*</Text>
            <View className=" w-full">
              <Fields placeholder="Suraj Singh" />
            </View>
          </View>
          <View className="px-10">
            <Text className="text-lg text-slate-700">Email Address*</Text>
            <View>
              <Fields placeholder="demo@gmail.com" />
            </View>
          </View>
          <View className="px-10">
            <Text className="text-lg text-slate-700">Password*</Text>
            <View>
              <Fields placeholder="*********" />
            </View>
          </View>
          <View className="px-10">
            <Text className="text-lg text-slate-700">Mobile Number*</Text>
            <View>
              <Fields placeholder="+9123232332" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
