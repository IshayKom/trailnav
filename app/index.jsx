import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {Link, link} from 'expo-router'

// Themed Components
import ThemedView from '../components/ThemedView'

const Home = () => {
  return (
    <ThemedView style={styles.Container}>
      <Text style={styles.title}>Navigation App</Text>
      <Text>Welcome to TrailNav!</Text>
      
      <Link href="/about" styles={styles.link}>About Page</Link>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10
    },
    img: {
        marginBottom: 10
    },
    link: {
        marginVertical: 20,
        borderBottomWidth: 1,
        color: 'blue'
    }
})