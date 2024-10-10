import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    records: [],
    searchQuery: "",
}

const recordSlice = createSlice({
    name: "records",
    initialState,
    reducers: {
        addRecord: (sate, action) => {
            const record = {
                id: nanoid(),
                exercise: action.payload.exercise,
                weight: action.payload.weight,
                date: action.payload.date
            }
            sate.records.push(record)
        },
        deleteRecord: (state, action) => {
            state.records = state.records.filter((record) =>
                record.id !== action.payload
            )
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload
        }
    }
})

export const { addRecord, deleteRecord,setSearchQuery } = recordSlice.actions

export default recordSlice.reducer