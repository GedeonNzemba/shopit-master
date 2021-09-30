import { configureStore } from '@reduxjs/toolkit'
import changeStateType from './shopLogic'

const store = configureStore({
    reducer: {
        counter: changeStateType,
    },
})

export default store