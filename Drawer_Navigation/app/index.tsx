import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'

const index = () => {

  const navigation = useNavigation()

  const onOpen = () => {
    navigation.dispatch(DrawerActions.openDrawer())
  }
  return (
    <View>
      <Text>This Is Home Screen</Text>
      <Button title='Open' onPress={onOpen}></Button>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})