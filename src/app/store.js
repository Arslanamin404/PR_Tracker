import { configureStore } from "@reduxjs/toolkit";
import recordReducer from "../features/Records/recordSlices"
import storage from "redux-persist/lib/storage"
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
    key: "records",
    storage,
}


const persistedReducer = persistReducer(persistConfig, recordReducer)

export const store = configureStore({
    reducer: {
        records: persistedReducer,
    }
})

export const persist = persistStore(store)