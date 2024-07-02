import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useCart } from './CartContext';

import dress1 from './assets/dress1.png';
import dress2 from './assets/dress2.png';
import dress3 from './assets/dress3.png';
import dress4 from './assets/dress4.png';
import dress5 from './assets/dress5.png';
import dress6 from './assets/dress6.png';
import dress7 from './assets/dress7.png';
import addIcon from './assets/add.png';
import removeIcon from './assets/remove.png';
import Logo from './assets/Logo.png';

const items = [
  { id: 1, title: 'Office Wear', description: 'reversible angora cardigan', price: '$120', image: dress1 },
  { id: 2, title: 'Black', description: 'reversible angora cardigan', price: '$120', image: dress2 },
  { id: 3, title: 'Church Wear', description: 'reversible angora cardigan', price: '$120', image: dress3 },
  { id: 4, title: 'Lamerei', description: 'reversible angora cardigan', price: '$120', image: dress4 },
  { id: 5, title: '21WN', description: 'reversible angora cardigan', price: '$120', image: dress5 },
  { id: 6, title: 'Lopo', description: 'reversible angora cardigan', price: '$120', image: dress6 },
  { id: 7, title: '21WN', description: 'reversible angora cardigan', price: '$120', image: dress7 },
  { id: 8, title: 'lame', description: 'reversible angora cardigan', price: '$120', image: dress3 },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="bars" size={24} color="#4D4D4D" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
        <Image source={Logo} style={styles.logoTitle} />
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton} >
            <FontAwesome name="search" size={24} color="#4D4D4D" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Checkout')}>
            <FontAwesome name="shopping-cart" size={24} color="#4D4D4D" />
            {cart.length > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>{cart.length}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.storyRow}>
        <Text style={styles.storyText}>OUR STORY</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.roundIconButton}>
            <FontAwesome name="list" size={20} color="#4D4D4D" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundIconButton}>
            <FontAwesome name="filter" size={20} color="#FC8966" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.itemsContainer}>
        {items.map(item => (
          <View key={item.id} style={styles.item}>
            <Image source={item.image} style={styles.itemImage} />
            
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
            <View style={styles.iconRow}>
              <TouchableOpacity style={styles.actionButton} onPress={() => addToCart(item)}>
                <Image source={addIcon} style={styles.actionIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton} onPress={() => removeFromCart(item)}>
                <Image source={removeIcon} style={styles.actionIcon} />
              </TouchableOpacity>
            </View>
          </View>
          
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  titleContainer: {
    alignItems: 'center',
  },
  logoTitle: {
    marginLeft: 30,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginHorizontal: 8,
  },
  cartBadge: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontSize: 12,
  },
  storyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  storyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4D4D4D',
  },
  roundIconButton: {
    marginHorizontal: 8,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EFEEEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 8,
  },
  item: {
    width: '45%',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 1,
  },
  itemImage: {
    width: '100%',
    height: 220,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 8,
  marginTop: -38,
  },
  actionButton: {
    marginHorizontal: 4,
  },
  actionIcon: {
    width: 24,
    height: 24,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 8,
  },
  itemDescription: {
    fontSize: 12,
    color: '#888',
    marginHorizontal: 8,
  },
  itemPrice: {
    fontSize: 16,
    color: '#FC8966',
    margin: 8,
  },
});

export default HomeScreen;
