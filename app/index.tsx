import { View, Text, SafeAreaView, Platform } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView style={Platform.OS == 'android' && {paddingTop: 40}} className='bg-red-500 '>
      <Text className='text-3xl text-center'>Home</Text>
    </SafeAreaView>
  )
}

export default Home;