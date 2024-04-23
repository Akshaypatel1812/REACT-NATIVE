import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Card = ({Theme}) => {
  const product = {
    title: 'Study Lamp',
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.5,
  };

  return (
    <View style={Theme ? styles.darkCard:styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={Theme ? styles.darkTitle : styles.title}>{product.title}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="md-star" size={20} color="#ffd700" />
          <Ionicons name="md-star" size={20} color="#ffd700" />
          <Ionicons name="md-star" size={20} color="#ffd700" />
          <Ionicons name="md-star" size={20} color="#ffd700" />
          <Ionicons name="md-star-half" size={20} color="#ffd700" />
          <Text style={Theme ? styles.darkratingText : styles.ratingText}>(4.5)</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.buyNowButton]}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.addToCartButton]}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  darkCard:{
    backgroundColor: '#3d3c39',
    color:"white",
    borderRadius: 10,
    padding: 20,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  darkTitle:{
    color:"white",
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 16,
  },

  darkratingText: {
    marginLeft: 5,
    fontSize: 16,
    color:"white"
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buyNowButton: {
    backgroundColor: '#1e90ff',
    marginRight: 10,
  },
  addToCartButton: {
    backgroundColor: '#32cd32',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default Card;
