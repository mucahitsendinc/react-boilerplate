import { configureStore } from "@reduxjs/toolkit";

import authReducer from './Auth'
import siteReducer from './Site'
export default configureStore({
  reducer: {auth:authReducer,site:siteReducer}
})