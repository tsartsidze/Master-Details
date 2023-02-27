import { createSlice } from "@reduxjs/toolkit";

const data = {
  usersData: [],
};

const usersDataSlice = createSlice({
  name: "data",
  initialState: data,
  reducers: {
    pushDataUsers(state, action) {
      state.usersData = action.payload;
    },
    deleteUser(state, action) {
      const deleteUser = state.usersData.filter(
        (user) => user.id !== action.payload
      );
      state.usersData = deleteUser;
    },
    addUser(state, action) {
      state.usersData.unshift(action.payload);
    },
    editUser(state, action) {
      const editUser = state.usersData.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      state.usersData = editUser;
    },
  },
});

export const usersDataActions = usersDataSlice.actions;
export default usersDataSlice.reducer;
