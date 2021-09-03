import { configureStore } from '@reduxjs/toolkit'
import changeStateType from './shopLogic'

export const store = configureStore({
    reducer: {
        counter: changeStateType,
    },
})