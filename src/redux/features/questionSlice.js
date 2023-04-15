import {createSlice} from '@reduxjs/toolkit'

const initialState={
    quizName:localStorage.getItem("quizName")?JSON.parse(localStorage.getItem("quizName")):"",
    questions:localStorage.getItem("questions")?JSON.parse(localStorage.getItem("questions")):[],
    time:localStorage.getItem("time")?JSON.parse(localStorage.getItem("time")):""
}

const quizSlice=createSlice({
    name:"quiz",
    initialState,
    reducers:{
        addQuizName(state,action){
            localStorage.setItem("quizName",JSON.stringify(action.payload))
        },
        addQuizQuestions(state,action){
          localStorage.setItem("questions",JSON.stringify( [...state.questions,action.payload]))
        }
    }
})

export const {addQuizName,addQuizQuestions}=quizSlice.actions
export default quizSlice.reducer