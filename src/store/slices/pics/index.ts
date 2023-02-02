import { createSlice } from "@reduxjs/toolkit";

import { IPicsState } from "./type";

import picsApi from "../../api/pics";

import { getRandomStartPage } from '../../../helpers/getRandomStartPage';


const initialState: IPicsState = {
    pics: [],
    startPage: getRandomStartPage(),
};

export const picsSlice = createSlice({
    name: "companies",
    initialState,
    reducers: {
        refreshPics: state => {
            state.pics = [];
            state.startPage = getRandomStartPage();
        }
    },
    extraReducers: builder => {
        builder
            .addMatcher(picsApi.endpoints.getStartPics.matchFulfilled, (state, {payload}) => {
                state.pics = payload;
            })
            .addMatcher(picsApi.endpoints.getMorePics.matchFulfilled, (state, {payload}) => {
                state.pics = [...state.pics, ...payload];
            });
    },
});

export const {refreshPics} = picsSlice.actions;

export default picsSlice.reducer;
