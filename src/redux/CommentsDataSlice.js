import { createSlice } from "@reduxjs/toolkit";

const data = {
  commentsData: [],
  postsData: [],
};

const commentsDataSlice = createSlice({
  name: "comments",
  initialState: data,
  reducers: {
    pushDataComments(state, action) {
      state.commentsData = action.payload;
    },
    pushDataPosts(state, action) {
      state.postsData = action.payload;
    },
    addComment(state, action) {
      state.commentsData.unshift(action.payload);
    },
    deleteComment(state, action) {
      const deleteComment = state.commentsData.filter(
        (comment) => comment.id !== action.payload
      );
      state.commentsData = deleteComment;
    },
    editComment(state, action) {
      const editComment = state.commentsData.map((comment) =>
        comment.id === action.payload.id ? action.payload : comment
      );
      state.commentsData = editComment;
    },
  },
});

export const commentsDataActions = commentsDataSlice.actions;
export default commentsDataSlice.reducer;
