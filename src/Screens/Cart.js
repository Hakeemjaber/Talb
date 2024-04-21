import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import CategoryItem from '../Components/CategoryItem';

const Cart = () => {
    const { Cart, setcart } = useContext{ Talbcontext };




    const renderCart = () => {
        return cart.map(CategoryItem => (
            <CategoryItem
                {...CategoryItem}
                hideImage={false}
            />
        ));

    };
    return (
        <View style = { styles.container}>
<ScrollView>{renderCart()}</ScrollView>

        </View>
    )

}
export default Cart

const styles = StyleSheet.create({})