import { combineReducers } from "redux";
import {
  videosReducer,
  singleVideoReducer,
  likedVideosReducer,
} from "./videoReducers";
import { authReducer } from "./authReducers";

const reducers = combineReducers({
  allVideos: videosReducer,
  myVideos: videosReducer,
  singleVideo: singleVideoReducer,
  likedVideos: likedVideosReducer,
  auth: authReducer,
});

export default reducers;
