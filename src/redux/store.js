import {configureStore} from '@reduxjs/toolkit'
import quizReducer from './features/questionSlice'
export const store=configureStore(
    {
        reducer:{
            quiz:quizReducer
        }
    }
)