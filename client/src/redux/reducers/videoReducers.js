import {
  DELETE_VIDEO,
  LIST_LIKED_VIDEOS,
  LIST_SINGLE_VIDEO,
  LIST_VIDEOS,
  SET_LIKED_VIDEOS,
  SET_MY_VIDEOS,
  SET_VIDEOS,
} from "../constants/videoConstants";

const intialState = {
  videos: [],
  myVideos: [],
  liked: [],
};

export const videosReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case SET_VIDEOS:
      return { ...state, videos: payload };
    case SET_MY_VIDEOS:
      return { ...state, myVideos: payload };
    case DELETE_VIDEO:
      return {
        ...state,
        myVideos: state.myVideos.filter((item) => item._id !== payload),
      };
    default:
      return state;
  }
};

export const singleVideoReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case LIST_SINGLE_VIDEO:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const likedVideosReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SET_LIKED_VIDEOS:
      return { ...state, liked: payload };
    case LIST_LIKED_VIDEOS:
      return { ...state, ...payload };
    default:
      return state;
  }
};
