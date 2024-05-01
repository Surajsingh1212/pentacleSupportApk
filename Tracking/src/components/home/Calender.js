import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker'

const CalendarModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const minDate = new Date(); // Today's date
  const maxDate = new Date(2025, 11, 30);

  const formatDate = (date) => {
    if (!date) return 'DD/MM/YYYY';
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleShowModal = () => {
    setModalVisible(true);
  };

  const handleHideModal = () => {
    setModalVisible(false);
  };

  const modalStyles = {
    container: {
      backgroundColor: "#FFFFFF",
      marginTop: 10,
      with:100,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      padding: 20,
      width: 300,
    },
    button: {
      backgroundColor: '#673AB7',
      borderRadius: 8,
      padding: 10,
      marginTop: 20,
    },
    buttonText: {
      color: '#FFFFFF',
      textAlign: 'center',
    },
  };

  return (
    <View style={modalStyles.modalContainer}>
      {/* Modal */}
      {modalVisible && (
        <View style={modalStyles.modalContainer}>
          <View style={modalStyles.modalContent}>
            <View style={modalStyles.container}>
            <CalendarPicker
              startFromMonday={true}
              allowRangeSelection={true}
              minDate={minDate}
              maxDate={maxDate}
              todayBackgroundColor="#f2e6ff"
              selectedDayColor="#7300e6"
              selectedDayTextColor="#FFFFFF"
              onDateChange={(date, type) => {
                type === 'END_DATE' ? setSelectedEndDate(date) : setSelectedStartDate(date);
              }}
            />
            </View>
            <Text style={{ textAlign: 'center', marginTop: 10 }}>
              SELECTED START DATE: {formatDate(selectedStartDate)}
            </Text>
            <Text style={{ textAlign: 'center', marginTop: 5 }}>
              SELECTED END DATE: {formatDate(selectedEndDate)}
            </Text>
            <Pressable style={modalStyles.button} onPress={handleHideModal}>
              <Text style={modalStyles.buttonText}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      )}

      {/* Button to Show Modal */}
      {!modalVisible && (
        <Pressable style={modalStyles.button} onPress={handleShowModal}>
          <Text style={modalStyles.buttonText}>Show Modal</Text>
        </Pressable>
      )}
    </View>
  );
};

export default CalendarModal;
