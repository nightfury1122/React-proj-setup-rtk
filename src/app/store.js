import { configureStore } from '@reduxjs/toolkit'
import {cakeReducer} from '../app/features/cake/cakeSlice'
import {icecreamReducer} from '../app/features/iceCream/iceCreamSlice'
import {userReducer} from '../app/features/user/userSlice'
const reduxLogger = require('redux-logger')

//Logger middleware implemented to get a better understanding of using middleware with rtk

// Create logger is stored in a constant
const logger = reduxLogger.createLogger()

// ConfigureStore() accepts an object as argument
const store = configureStore({
    reducer: {
        // add all reducers that we made in slices here
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer
    },
    //*******************Logger implementation commented for now ***********************/
    // In rtk a middleware is passed after the reducer in the configureStore() method
    // The middleware accepts a function as its argument

    // middleware:(getDefaultMiddleware)=>

    // The below step for logger is done because the ConfigureStore function has some middleware by default that it sets up Automatically
    // So we just append the default middleware with the logger middleware.

    // getDefaultMiddleware().concat(logger)
    //*********************************************************************************/
})

export default store