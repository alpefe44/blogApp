import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'
import { updatePost } from '../redux/slices/blogSlice';

const DetailScreen = ({ route, navigation }) => {

  const dispatch = useDispatch();

  const { id, author, title } = route.params;

  const [name, setName] = useState(author)
  const [tit, setTitle] = useState(title)

  const handleUpdatePost = (index, author, title) => {
    dispatch(updatePost({ id: index, author, title }))
    navigation.navigate("List")
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ width: '100%', padding: 5, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput placeholder='Author' value={name} onChangeText={(text) => setName(text)} style={{ padding: 15, height: '50', width: '80%', borderWidth: 1, marginVertical: 10, borderRadius: 10, fontWeight: 'bold' }}></TextInput>
        <TextInput placeholder='Title' value={tit} onChangeText={(text) => setTitle(text)} style={{ padding: 15, height: '50', width: '80%', borderWidth: 1, borderRadius: 10, fontWeight: 'bold', marginVertical: 10 }}></TextInput>
      </View>
      <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => handleUpdatePost(id, name, tit)}>
        <MaterialIcons name="update" size={34} color="black" />
      </TouchableOpacity>
    </View>
  )
}

export default DetailScreen