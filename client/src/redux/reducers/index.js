import { combineReducers } from "redux";
import { videosReducer, singleVideoReducer } from "./videoReducers";

const reducers = combineReducers({
  allVideos: videosReducer,
  singleVideo: singleVideoReducer,
});

export default reducers;
