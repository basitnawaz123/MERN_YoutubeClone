import {
  LIST_SINGLE_VIDEO,
  LIST_VIDEOS,
  SET_VIDEOS,
} from "../constants/videoConstants";

export const ListVideos = () => {
  return {
    type: LIST_VIDEOS,
  };
};

export const SetVideos = (videos) => {
  return {
    type: SET_VIDEOS,
    payload: videos,
  };
};

export const ListSingleVideo = (video) => {
  return {
    type: LIST_SINGLE_VIDEO,
    payload: video,
  };
};
