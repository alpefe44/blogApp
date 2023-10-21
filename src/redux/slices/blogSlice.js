import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  items: [],
}

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.items.push(action.payload);
      console.log(state.items, "state items")
    },
    deletePost: (state, action) => {
      state.items.splice(action.payload, 1)
    },
    updatePost: (state, action) => {
      const { id, author, title } = action.payload
      const item = state.items.findIndex((item) => item.id === id)
      if (item !== -1) {
        state.items[item].author = author;
        state.items[item].title = title;
      }
      console.log(id, "id", title, "title", author, "author")
    }
  }
})


export const { addPost, deletePost, updatePost } = blogSlice.actions;

export default blogSlice.reducer;