import { Alert, Image, StyleSheet, Text, FlatList, StatusBar, TouchableOpacity, View } from 'react-native'
import CategoryItem from '../Components/CategoryItem'
import React, { useContext } from 'react';
import ScreenNames from '../../routes/ScreenNames';
import { Screen } from 'react-native-screens';
import Images from '../assets/images';
import { servi, stores } from '../res/datad';
import sizes from '../res/sizes';

const ProductScreen = props => {
    const { data } = props.route.params;
    const { Img } = data;


    // const text = data.Text
    const renderStores = ({item}) => {
        console.log("hello ::");
        return (
            <View style={styles.itemContainer}>
                <View style={styles.conpro}>
                    <Text >{item.text}</Text> 
                </View>
            </View>
        )
    }


    const goBack = () => {
        props.navigation.goBack();
    };



    return (

        <View style={styles.container}>
            <View style={styles.header} >
                <TouchableOpacity style={styles.btn} onPress={goBack}>
                    <Image style={styles.Image} source={Images.left()} />
                </TouchableOpacity>
                <Text style={styles.tt}>
                    {data.Text}
                </Text>

            </View>

            <FlatList
                data={servi}
                renderItem={renderStores}
                numColumns={2}
            />

            <FlatList
                data={stores}
                renderItem={renderStores}
                contentContainerStyle={{ justifyContent: 'space-around', alignItems: 'center', padding: 10 }}
                numColumns={2}
            />

            {/* <Image style={styles.header} source={Img || ''} />
            <Text style={styles.title}>{text}</Text> */}
            {/* <CategoryItem {...data} /> */}

            {/* <TouchableOpacity style={styles.btn} onPress={onBuyPress}>
          <Text style={styles.btnTxt}>Buy</Text>
        </TouchableOpacity> */}

            {/* <TouchableOpacity style={styles.btn} onPress={navigateToCart}>
          <Text style={styles.btnTxt}>Cart</Text>
        </TouchableOpacity> */}
        </View>
    )
}

export default ProductScreen

const styles = StyleSheet.create({
    container: {
        width:'100%'
        // flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
    },
    header: {
        height: 50,
        width: '100%',
        backgroundColor: 'green',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between'
        // position:'absolute',
        // top:0
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 15,
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTxt: {
        fontSize: 30,
        color: '#ffff',
    },
    Image: {
        width: 40,
        height: 30,

    },
    tt: {
        fontSize: 22,
        alignSelf: 'center',
        marginLeft: 155,

    },
    conpro: {
        width: sizes.screenWidth * 0.45,
        height: 100,
        backgroundColor: 'red',
        marginBottom: 10 
    },
    itemContainer:{
        width:'45%'
    }
})