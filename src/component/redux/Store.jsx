import {configureStore} from '@reduxjs/toolkit'
import TodoReducer from './TodoSlice'


const Store = configureStore({

    reducer:{
        todos:TodoReducer
    }
})

export default Store