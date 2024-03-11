import { configureStore } from "@reduxjs/toolkit";
import counterReduter from "./counter";
const store = configureStore({
    reducer: {
        counter: counterReduter
    }
})

export default store