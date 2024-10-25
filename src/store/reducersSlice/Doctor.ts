import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: boolean
}

const initialState = { value: false } satisfies CounterState as CounterState

//Currently Not using..........
export const doctorSlice = createSlice({
  name: 'doctorSlice',
  initialState,
  reducers: {
    toggleModel(state,action:PayloadAction<boolean>){
        state.value = action.payload;
    }
  },
})

export const { toggleModel} = doctorSlice.actions