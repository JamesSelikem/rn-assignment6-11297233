import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCart } from './CartContext';
import { FontAwesome } from '@expo/vector-icons';

import removeIcon from './assets/remove-x.png';
import Logo from './assets/Logo.png';

const CheckoutScreen = () => {
  const { cart, removeFromCart } = useCart();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.header}>
         <View style={styles.titleContainer}>
         <Image source={Logo} style={styles.logoTitle} />
         </View>
        </View>
      
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
              <TouchableOpacity onPress={() => removeFromCart(item)}>
                <Image source={removeIcon} style={styles.actionIcon} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  titleContainer: {
    alignItems: 'center',
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  
  title2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    flexDirection: 'row',
    paddingTop: 25,
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 1,
  },
  itemImage: {
    width: 100,
    height: 120,
  },
  itemDetails: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: '#FC8966',
  },
  actionIcon: {
    width: 18,
    height: 18,
    marginLeft: 180,
  },
});

export default CheckoutScreen;
