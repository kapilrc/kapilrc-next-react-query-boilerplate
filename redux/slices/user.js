import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    currentUser: null,
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = state.users.find((user) => user.id == action.payload);
    },
  },
});

export const getState = (state) => state.user;
export const actions = userSlice.actions;

export default userSlice;
