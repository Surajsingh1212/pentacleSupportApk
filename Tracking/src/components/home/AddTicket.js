import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Button } from 'react-native';
import Fields from '../common/Fields';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import CustomHeader from '../utils/CustomHeader';

const data = [
  { label: 'Category1', value: '1' },
  { label: 'Category2', value: '2' },
  { label: 'Category3', value: '3' },
  { label: 'Category4', value: '4' },
  { label: 'Category5', value: '5' },
  { label: 'Category6', value: '6' },
  { label: 'Category7', value: '7' },
  { label: 'Category8', value: '8' },
];


const AddTicket = ({ navigation }) => {
  const Navigation = useNavigation()
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const handleCreateTicket = () => {
    Navigation.navigate('ViewTicket')
  }
  return (
    <View className="flex-1">
      <CustomHeader title="CreateJob" navigation={navigation} notificationCount={3} />
      <View className="flex flex-1 justify-center items-center bg-cyan-500">
        <View className="relative flex justify-center items-center z-40">
          <Image
            source={require("../../assets/alerts/alerts.png")}
            className="sm:h-28 md:h-28 sm:w-28 md:w-28 h-24 w-24 rounded-full absolute bottom-[-50] left-150  shadow-3xl"
          />
        </View>
        <View className="bg-slate-50 shadow-xl w-[90%] rounded-3xl h-[80%] pb-8 pt-10 sm:pb-8 sm:pt-8 md:pb-8 md:pt-8">
          <ScrollView>
            <View className="px-10 w-full">
              <Text className="text-lg text-slate-700">Case Categories*</Text>
              <View className=" w-full">
                <Dropdown
                  className={`h-14 bg-white rounded-xl px-2 py-4 my-2 ${isFocus ? 'border-cyan-500' : ''}`}
                  placeholderClassName="text-base"
                  selectedTextClassName="text-base"
                  inputSearchClassName="h-10 text-base"
                  iconClassName="w-5 h-5"
                  data={data}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? 'Select item' : '...'}
                  searchPlaceholder="Search..."
                  value={value}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={(item) => {
                    setValue(item.value);
                    setIsFocus(false);
                  }}
                />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Client Name*</Text>
              <View>
                <Fields placeholder="demo@gmail.com" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Reported By*</Text>
              <View>
                <Fields placeholder="Suraj Singh" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Contact Person Name*</Text>
              <View>
                <Fields placeholder="+9123232332" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Subject*</Text>
              <View>
                <Fields placeholder="+9123232332" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Remarks*</Text>
              <View>
                <Fields placeholder="+9123232332" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Payment Mode*</Text>
              <View>
                <Fields placeholder="+9123232332" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Priority*</Text>
              <View>
                <Fields placeholder="+9123232332" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Product Category*</Text>
              <View>
                <Dropdown
                  className={`h-14 bg-white rounded-xl px-2 py-4 my-2 ${isFocus ? 'border-cyan-500' : ''}`}
                  placeholderClassName="text-base"
                  selectedTextClassName="text-base"
                  inputSearchClassName="h-10 text-base"
                  iconClassName="w-5 h-5"
                  data={data}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? 'Select item' : '...'}
                  searchPlaceholder="Search..."
                  value={value}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={(item) => {
                    setValue(item.value);
                    setIsFocus(false);
                  }}
                />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Sub Product Category*</Text>
              <View>
                <Dropdown
                  className={`h-14 bg-white rounded-xl px-2 py-4 my-2 ${isFocus ? 'border-cyan-500' : ''}`}
                  placeholderClassName="text-base"
                  selectedTextClassName="text-base"
                  inputSearchClassName="h-10 text-base"
                  iconClassName="w-5 h-5"
                  data={data}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? 'Select item' : '...'}
                  searchPlaceholder="Search..."
                  value={value}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={(item) => {
                    setValue(item.value);
                    setIsFocus(false);
                  }}
                />
              </View>
            </View>
            <View className="px-10">
              <View className="rounded-xl mt-4 w-100">
                <Button title="Create Now" onPress={handleCreateTicket} />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

export default AddTicket;