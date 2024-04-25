import React from 'react';
import { TextInput } from 'react-native';


const Fields = (props) => {
    return (
        <TextInput placeholderTextColor="rgb(148 163 184)" className="rounded-xl py-4 bg-white ps-5 placeholder:text-slate-700 text-slate-900 px-2 my-2  w-[100%] placeholder:text-lg placeholder:px-4"{...props}></TextInput>
    );
}

export default Fields;