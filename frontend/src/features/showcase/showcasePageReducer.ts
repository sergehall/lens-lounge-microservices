import { combineReducers } from '@reduxjs/toolkit';

import profileReducer from './profile/profileSlice';
import userBlogsReducer from './user-blogs/userBlogsSlice';

// Create showcasePageReducer by combining small reducers
const showcasePageReducer = combineReducers({
  profile: profileReducer,
  userBlogs: userBlogsReducer,
});

export default showcasePageReducer;
