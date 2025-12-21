import { createSlice } from "@reduxjs/toolkit";


const contenderpageSlide = createSlice({
    name: "contenderPageStates",
    initialState: {
        contenderStates: {
            showCreate: false,
            showEdit: false,
            editContenderId: 0,
            showMetrics: false
        }
    },
    reducers: {
        setShowCreate: (state,action) => {
            state.contenderStates.showCreate = action.payload 
        },
        setShowEdit: (state,action) => {
            state.contenderStates.showEdit = action.payload
        },
        setEditContenderId: (state, action) => {
            state.contenderStates.editContenderId = action.payload
        },
        setShowMetrics: (state,action) => {
            state.contenderStates.showMetrics = action.payload
        }
    }
})


export const { setShowCreate, setShowEdit, setEditContenderId, setShowMetrics } = contenderpageSlide.actions

export default contenderpageSlide.reducer