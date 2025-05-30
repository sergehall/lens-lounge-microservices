import { combineReducers } from '@reduxjs/toolkit';

import chatReducer from './chat/chatSlice';
import contactListReducer from './contacts/contactListSlice';

const whisperPageReducer = combineReducers({
  chat: chatReducer,
  contactList: contactListReducer,
});

export default whisperPageReducer;
