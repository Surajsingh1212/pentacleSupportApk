import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

const CalendarModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
    const handleShowModal = ()=>{
        setModalVisible(true);
    }
    const handleHideModal=()=>{
        setModalVisible(false)
    }
  return (
    <View className="flex flex-1 justify-center items-center h-screen">
      {modalVisible && (
        <View className="fixed inset-0 z-50 flex justify-center items-center bg-opacity-50 shadow-xl" >
          <View className="bg-white rounded-xl p-8 w-80">
            <View>
                <CalendarModal/>
            </View>
            <Pressable
              className="bg-blue-500 rounded-md px-4 py-2 text-white text-center"
              onPress={handleHideModal}>
              <Text className="text-white">Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      )}

      {!modalVisible && (

      <Pressable
        className="bg-purple-500 rounded-md px-4 py-2 text-white text-center z-10"
        onPress={handleShowModal}>
        <Text className="text-white">Show Modal</Text>
      </Pressable>
      )}
    </View>
  );
};

export default CalendarModal;
