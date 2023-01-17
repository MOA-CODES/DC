import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

// no

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headderShown: false, 
        });

    }, [])

  return (
    <SafeAreaView>
      <Text className="text-red-500">

      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen