import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import dress1 from './assets/dress1.png';
import dress2 from './assets/dress2.png';
import dress3 from './assets/dress3.png';
import dress4 from './assets/dress4.png';
import dress5 from './assets/dress5.png';
import dress6 from './assets/dress6.png';
import addIcon from './assets/add.png';
import removeIcon from './assets/remove.png';  

const items = [
  { id: 1, title: 'Office Wear', description: 'reversible angora cardigan', price: '$120', image: dress1 },
  { id: 2, title: 'Black', description: 'reversible angora cardigan', price: '$120', image: dress2 },
  { id: 3, title: 'Church Wear', description: 'reversible angora cardigan', price: '$120', image: dress3 },
  { id: 4, title: 'Lamerei', description: 'reversible angora cardigan', price: '$120', image: dress4 },
  { id: 5, title: '21WN', description: 'reversible angora cardigan', price: '$120', image: dress5 },
  { id: 6, title: 'Lopo', description: 'reversible angora cardigan', price: '$120', image: dress6 },
];

const HomeScreen = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter(cartItem => cartItem.id !== item.id));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="bars" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Open</Text>
          <Text style={styles.subtitle}>Fashion</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="search" size={24} color="black" />
          </TouchableOpacity>
          <View>
            <TouchableOpacity style={styles.iconButton}>
              <FontAwesome name="shopping-cart" size={24} color="black" />
              {cart.length > 0 && (
                <View style={styles.cartBadge}>
                  <Text style={styles.cartBadgeText}>{cart.length}</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.storyRow}>
        <Text style={styles.storyText}>Our Story</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.roundIconButton}>
            <FontAwesome name="list" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundIconButton}>
            <FontAwesome name="filter" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.itemsContainer}>
        {items.map(item => (
          <View key={item.id} style={styles.item}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.iconRow}>
              <TouchableOpacity style={styles.actionButton} onPress={() => addToCart(item)}>
                <Image source={addIcon} style={styles.actionIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton} onPress={() => removeFromCart(item)}>
                <Image source={removeIcon} style={styles.actionIcon} />
              </TouchableOpacity>
            </View>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
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
  title: {
    fontSize: 20,
    fontFamily: 'Pacifico_400Regular',
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'Pacifico_400Regular',
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
  },
  roundIconButton: {
    marginHorizontal: 8,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ddd',
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
    borderWidth: 1,
    borderColor: '#ddd',
    position: 'relative',
  },
  itemImage: {
    width: '100%',
    height: 200,
  },
  iconRow: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    flexDirection: 'row',
  },
  actionButton: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 4,
    marginLeft: 4,
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
    fontSize: 14,
    color: '#888',
    marginHorizontal: 8,
  },
  itemPrice: {
    fontSize: 16,
    color: '#f00',
    margin: 8,
  },
});

export default HomeScreen;
