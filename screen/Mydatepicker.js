import React, {useState, Component} from 'react';
import {DataPiker} from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useState} from 'react';
import {View, Button, Platform, Text} from 'react-native';

const Mydatepicker = () => {
    

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'android');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
    
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      
      <Text style={{fontSize: 25}} >{}</Text>
      <View>
        <Button onPress={showDatepicker} title="Selecciona la fecha" />
      </View>
      <Text style={{fontSize: 25}} >{}</Text>
      <View>
        <Button onPress={showTimepicker} title="Selecciona la hora" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          display="spinner"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default Mydatepicker;