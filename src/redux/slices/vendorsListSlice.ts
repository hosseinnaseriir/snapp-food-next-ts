import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getVendorsList } from "api/services/index";
import { QueryType } from "@types";

export const fetchVendorsListAction = createAsyncThunk(
  "vendorsList/fetchByQuery",
  async (query: QueryType) => {
    const response = await getVendorsList(query);
    return response.data.data.finalResult as Array<{}>;
  }
);

interface vendorsListSliceState {
  pending: false;
  rejected: {};
  vendorsList: [];
}

export const vendorsListSlice = createSlice<any, any, string>({
  name: "vendorsList",
  initialState: {
    pending: false,
    rejected: { status: false, message: "" },
    vendorsList: [],
  } as vendorsListSliceState,
  extraReducers: {
    [fetchVendorsListAction.pending as any]: (state: vendorsListSliceState) => {
      return { ...state, pending: true };
    },
    [fetchVendorsListAction.rejected as any]: (state: vendorsListSliceState, action: any) => {
      return {
        ...state,
        rejected: {
          status: true,
          message: action.error.message,
        },
        pending: false,
      };
    },
    [fetchVendorsListAction.fulfilled as any]: (state: vendorsListSliceState, action: any) => {
      return {
        ...state,
        pending: false,
        vendorsList: [...state.vendorsList, ...action.payload],
      };
    },
  },
} as any);

export default vendorsListSlice.reducer;
