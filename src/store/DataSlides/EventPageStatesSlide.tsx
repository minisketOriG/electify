
import { createSlice } from "@reduxjs/toolkit";

export const eventpageSlide = createSlice({
    name: "eventpageSlie",
    initialState: {
        eventPageStates: {
            showCreate: false,
            showSettings: false,
            eventTiming: false,
            showShare: false
        }
    },
    reducers: {
        setShowCreate: (state, action) => {
            state.eventPageStates.showCreate = action.payload
        },
        setShowSettings: (state, action) => {
            state.eventPageStates.showSettings = action.payload
        },
        setSettingEventTiming: (state, action) => {
            state.eventPageStates.eventTiming = action.payload
        },
        setShowShare: (state, action) => {
            state.eventPageStates.showShare = action.payload
        }
    }
})

export const { setShowCreate, setShowSettings, setSettingEventTiming, setShowShare } = eventpageSlide.actions
export default eventpageSlide.reducer