import {
  LIST_SINGLE_VIDEO,
  LIST_VIDEOS,
  SET_VIDEOS,
} from "../constants/videoConstants";

const intialState = {
  videos: [],
};

export const videosReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case SET_VIDEOS:
      return { ...state, videos: payload };
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
