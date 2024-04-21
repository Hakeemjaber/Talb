import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MainNavigation from './routes/nav';
import TalbProvider from './store/TalbProvider';

const App = () => {

  return (
    <View style={styles.container}>
      <TalbProvider>
      <MainNavigation />
      </TalbProvider>
    </View>
  )
};

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  item: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'black',
    fontSize: 35,
    fontStyle: 'italic'
  },

})