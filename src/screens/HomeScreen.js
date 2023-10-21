import { View, Text, Button, TextInput, TouchableOpacity, SafeAreaView, Alert } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MaterialIcons } from '@expo/vector-icons';
import { addPost, deletePost, updatePost } from '../redux/slices/blogSlice'

const HomeScreen = ({ navigation }) => {

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")


  const dispatch = useDispatch();

  const handleAddPost = (title, author) => {
    console.log(title, author)
    if (title == "" || author == "") {
      console.log("geçerli değerler giriniz")
    } else {
      dispatch(addPost({ title: title, author: author, id: Math.floor(Math.random() * (1000 - 0 + 1)) + 0 }))
      Alert.alert("Öğe eklendi!!")
    }
  }




  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <TextInput placeholder='Author' value={author} onChangeText={(text) => setAuthor(text)} style={{ padding: 10, height: '50', width: '80%', borderWidth: .4, marginVertical: 5 }}></TextInput>
        <TextInput placeholder='Title' value={title} onChangeText={(text) => setTitle(text)} style={{ padding: 10, height: '50', width: '80%', borderWidth: .4, marginVertical: 5 }}></TextInput>
      </View>
      <View style={{ width: '80%', alignSelf: 'center' }}>
        <Button onPress={() => handleAddPost(title, author)} title='ADD' color={'gray'} ></Button>
      </View>
      <View style={{ position: 'absolute', top: 30, alignSelf: 'flex-end', right: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate("List")}>
          <MaterialIcons name="list-alt" size={34} color="gray" />
        </TouchableOpacity>
      </View>
    </View>

  )
}

export default HomeScreen