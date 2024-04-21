import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CategoryItem from '../Components/CategoryItem'
import { circle } from '../res/Data'

const Home = () => {
  // const navigatoToburger = () => {
  //   props.navigation.navigate(ScreenNames.Burger);
  // };


  const renderitem = () => {
    const itemComponent = circle.map(circle => {
      return (
        <CategoryItem Text={circle.Text} img={circle.img}/>
      );
    });

    return itemComponent;
  }

    return (
      <ScrollView horizontal={true}>
      {/* <View style={styles.container}> */}
        {renderitem()}
      {/* </View> */}
      </ScrollView>
    )
  
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  container2: {

    width: 385,
    height: 68,
    flexDirection: 'row',
  },
  View1: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // View2: {
  //   flex: 1,
  //   backgroundColor: 'yellow',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  View3: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  View4: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 10,
    color: 'black',
    fontSize: 35,
    alignItems: 'center',
    justifyContent: 'center',

  },
  item: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },

})