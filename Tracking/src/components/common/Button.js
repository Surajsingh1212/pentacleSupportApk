import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


const Button = ({btnLable}) => {
    return (
           <TouchableOpacity className='bg-cyan-400 rounded-xl items-center w-[80%] ' >
           <Text className='text-[#ffffff] text-3xl font-bold '>
           {btnLable}
           </Text>
           </TouchableOpacity>
    );
}

export default Button;