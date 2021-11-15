import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: false,
        validate: []
    },
    reducers: {
        changeType: (state, action) => {
            state.value = action.payload
        },
        formValidation: (state, action) => {
            state.validate = action.payload
        }
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload
        // },
    },
})

export const { changeType, formValidation } = counterSlice.actions

export default counterSlice.reducer