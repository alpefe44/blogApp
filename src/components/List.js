import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { deletePost } from '../redux/slices/blogSlice';

const List = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.blog.items)

  const handleDeletePost = (index) => {
    dispatch(deletePost(index))
    console.log(index)
  }

  return (
    <View>
      {
        data.map((item, index) => {
          return (
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', borderWidth: 3, borderColor: 'gray', borderLeftWidth: 0, borderRightWidth: 0, marginVertical: 15, padding: 5 }} key={item.id} onPress={() => navigation.navigate("Detail", {
              id: item.id,
              title: item.title,
              author: item.author
            })}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', padding: 3, borderBottomWidth: 3 }}>{item.author}</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', padding: 3 }}>{item.title}</Text>

              <View style={{ position: 'absolute', alignSelf: 'center', right: 10 }}>
                <TouchableOpacity onPress={() => handleDeletePost(index)}>
                  <Feather name="trash" size={24} color="black" />
                </TouchableOpacity>
              </View>

            </TouchableOpacity>
          )
        })
      }
    </View >
  )
}

export default List