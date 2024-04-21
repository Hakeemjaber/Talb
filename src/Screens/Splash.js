import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import ScreenNames from '../../routes/ScreenNames'

const Splash = props => {
  const navigatoToHome = () => {
    setTimeout(() => {
      props.navigation.replace(ScreenNames.home);
    }, 2500);
  };
  //   props.navigation.navigate(ScreenNames.home);
  // };

  useEffect(() => {
    navigatoToHome();
  }, []);
  
  return (
    // <View style={{flex:1}}>
    //   <Button title="Home" onPress={navigatoToHome}/>
    // </View>
    <View>
      <Text>App</Text>
    </View>
  );
};

export default Splash

const styles = StyleSheet.create({})