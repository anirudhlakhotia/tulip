import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4EAE6',
    borderRadius: 10,
    width: ITEM_WIDTH,
    padding: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    marginTop:10,
    textAlign: 'center',
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },

  body: {
    color: "#525252",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default CarouselCardItem