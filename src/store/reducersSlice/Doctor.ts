import { getInitialServices } from "../../constants/index";
import { Service } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: boolean;
}
interface ServicesState {
  services: Service[];
}

const initialState = { value: false } satisfies CounterState as CounterState;
const initialServicesState: ServicesState = {
  services: getInitialServices(),
};

//Currently Not using..........
export const doctorSlice = createSlice({
  name: "doctorSlice",
  initialState,
  reducers: {
    toggleModel(state, action: PayloadAction<boolean>) {
      state.value = action.payload;
    },
  },
});

export const servicesSlice = createSlice({
  name: "serveicesSlice",
  initialState: initialServicesState,
  reducers: {
    addServices(state, action: PayloadAction<Service>) {
      state.services.push(action.payload);
    },
  },
});

export const { toggleModel } = doctorSlice.actions;
export const { addServices } = servicesSlice.actions;
