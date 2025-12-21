
import { createSlice } from "@reduxjs/toolkit";

export const categorypageSlide = createSlice({
    name: "categorypageSlide",
    initialState: {
        categoryPageStates: {
            eventType: "nocost",
            showCreate: false,
            showSettings: false,
            showShare: false
        }
    },
    reducers: {
        setEventType: (state, action) => {
            state.categoryPageStates.eventType = action.payload
        },
        setShowCreate: (state, action) => {
            state.categoryPageStates.showCreate = action.payload
        },
        setShowSettings: (state, action) => {
            state.categoryPageStates.showSettings = action.payload
        },
        setShowShare: (state, action) => {
            state.categoryPageStates.showShare = action.payload
        }
    }
})

export const { setEventType, setShowCreate, setShowSettings, setShowShare } = categorypageSlide.actions
export default categorypageSlide.reducer