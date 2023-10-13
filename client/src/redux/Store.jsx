import {configureStore} from '@reduxjs/toolkit'
import UserSlice from './UserSlice';


const Store = configureStore({
    reducer : {
        users: UserSlice
    }
})

export default Store;