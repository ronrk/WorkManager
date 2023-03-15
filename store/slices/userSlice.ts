import { IUser, Role } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

const initialState: { currentUser: IUser | null } = {
  currentUser: {
    name: 'owner',
    email: 'owner@owner.com',
    phoneNumer: '05255112233',
    role: Role.OWNER,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const selectUserValue = (state: RootState) => state.user;
export default userSlice.reducer;
