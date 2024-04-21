import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ScreenNames from '../../routes/ScreenNames';
import { useNavigation } from '@react-navigation/native';

const CategoryItem = props => {
  // const hideImage = props.hideImage

  const navigation = useNavigation();

  const onItemPress = () => {
    const Ad = {
      Text: props.Text,
      img: props.img,
    };
    navigation.navigate(ScreenNames.product, { data: Ad });
  };

  return (
    <View style={styles.container} >

      <TouchableOpacity onPress={onItemPress}>

        <View style={styles.card} >
          <View style={styles.container1} >
            <Image style={styles.img} source={props.img} />
          </View>
          <View style={styles.txtcontainer} >
            <Text style={styles.txt}> {props.Text}</Text>
          </View>

        </View>
      </TouchableOpacity>
    </View>


  )
}

export default CategoryItem

const styles = StyleSheet.create({
  container: {

  },
  txt: {
    fontSize: 13,
    color: 'black',
  },
  card: {
    margin: 10,
    // justifyContent:'space-between',
    // borderWidth: 1,
    //  width:90,
    // height:90,
    // justifyContent: 'center',
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  container1: {
    // borderWidth:1,
    // width:'50%',
    // height:'50%',
    borderColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  txtContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 30,
    // alignItems: 'flex-start',
  }
})