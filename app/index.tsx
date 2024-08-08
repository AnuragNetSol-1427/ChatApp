import { View, Text, SafeAreaView, Platform, ActivityIndicator } from 'react-native'
import React from 'react'

const StartPage = () => {
  return (
    <SafeAreaView style={Platform.OS == 'android' && {paddingTop: 40}} className='flex-1 justify-center'>
      <ActivityIndicator size="large" color='gray' />
    </SafeAreaView>
  )
}

export default StartPage;