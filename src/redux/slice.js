import { createSlice } from "@reduxjs/toolkit";
export const topic  = createSlice({
    name:'quiz',
    initialState:{quizName:''},
    reducers:{
        setQuizName : (state,actions)=>{state.quizName = actions.payload}
    }
})
export const {setQuizName} = topic.actions
export default topic.reducer