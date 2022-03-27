import {
  LIST_SINGLE_VIDEO,
  LIST_VIDEOS,
  SET_VIDEOS,
  LIST_LIKED_VIDEOS,
  SET_LIKED_VIDEOS,
  DELETE_VIDEO,
  SET_MY_VIDEOS,
  SET_SAVED_VIDEOS,
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

export const SetMyVideos = (videos) => {
  return {
    type: SET_MY_VIDEOS,
    payload: videos,
  };
};

export const ListSingleVideo = (video) => {
  return {
    type: LIST_SINGLE_VIDEO,
    payload: video,
  };
};

export const DeleteVideo = (id) => {
  return {
    type: DELETE_VIDEO,
    payload: id,
  };
};
export const SetLikedVideos = (likedVideos) => {
  return {
    type: SET_LIKED_VIDEOS,
    payload: likedVideos,
  };
};
export const ListLikedVideos = (likedVideos) => {
  return {
    type: LIST_LIKED_VIDEOS,
    payload: likedVideos,
  };
};

export const SetSavedVideos = (savedVideos) => {
  return {
    type: SET_SAVED_VIDEOS,
    payload: savedVideos,
  };
};