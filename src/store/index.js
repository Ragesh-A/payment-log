import { configureStore } from "@reduxjs/toolkit";
import user from './features/userAccounts'

const store = configureStore({
  reducer: {
    'user': user
  }
})

export default store