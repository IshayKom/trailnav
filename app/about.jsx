import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const about = () => {
  return (
    <ThemedView style={styles.Container}>
      <Text style={styles.title}>About Page</Text>

      <Link href="/" style={styles.link}><ThemedText>Go Back Home</ThemedText></Link>
    </ThemedView>
  )
}

export default about

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