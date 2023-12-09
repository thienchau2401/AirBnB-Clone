import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { reviewServ } from "../../services/reviewServices";

const initialState = {
  arrReview: [],
  average: 0.0,
};

export const getReviewByRoomIdApi = createAsyncThunk(
  "room/getReviewByRoomIdApi",
  async (roomId, thunkAPI) => {
    console.log(thunkAPI);
    const res = await reviewServ.getReviewByRoomId(roomId);
    console.log(res);
    return res.data.content;
  }
);

export const calAverageReview = (argReview) => {
  let floatAverage = 0.0;
  for (let i = 0; i < argReview.length; i++) {
    floatAverage += argReview[i].saoBinhLuan;
  }
  return Math.ceil(floatAverage / argReview.length);
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReviewByRoomIdApi.fulfilled, (state, action) => {
      console.log(current(state));
      console.log(action);
      state.arrReview = action.payload;
      state.average = calAverageReview(state.arrReview);
    });
  },
});

export const {} = reviewSlice.actions;

export default reviewSlice.reducer;
