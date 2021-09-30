import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: false,
    },
    reducers: {
        changeType: (state, action) => {
            state.value = action.payload
        },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload
        // },
    },
})

export const { changeType } = counterSlice.actions

export default counterSlice.reducer