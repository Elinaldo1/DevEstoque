import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Style } from './styles';


interface LoadingMessage {
  message: string
}

export function LoadingComponent({message}: LoadingMessage) {
 return (

    <View style={Style.container}>

        <ActivityIndicator size="large"  color="#fff" />
        {message && <Text style = {Style.message} >{message}</Text> }

    </View>
  );
}

