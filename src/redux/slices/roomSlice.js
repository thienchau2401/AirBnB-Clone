import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { roomServ } from "../../services/roomServices";

const initialState = {
  argRoom: {},
};

export const getRoomInfoApi = createAsyncThunk(
  "room/getRoomInfoApi",
  async (roomId, thunkAPI) => {
    console.log(thunkAPI);
    const res = await roomServ.getRoomInfo(roomId);
    console.log(res);
    return res.data.content;
  }
);

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRoomInfoApi.fulfilled, (state, action) => {
      console.log(current(state));
      console.log(action);
      state.argRoom = action.payload;
    });
  },
});

export const {} = roomSlice.actions;

export default roomSlice.reducer;
