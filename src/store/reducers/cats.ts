/* eslint-disable consistent-return */
/* eslint-disable no-async-promise-executor */
/* eslint-disable no-promise-executor-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Alert } from "react-native";

import { api } from "../../api";
import { Cat } from "../../types/Cats";

export type CatReducer = {
  cats: Cat[];
  favoriteCats: Cat[];
  loadingCats: boolean;
};

const initialState: CatReducer = {
  cats: [],
  favoriteCats: [],
  loadingCats: false,
};

export const loadCatsList = createAsyncThunk("get-all-cats", async (data) => {
  try {
    const response = await api.get<Cat[]>("/breeds");
    return response.data;
  } catch (err) {
    return console.log(err);
  }
});

const catList = createSlice({
  name: "cat_list",
  initialState,
  reducers: {
    addToFavorite(state, { payload }: PayloadAction<Cat>) {
      const catExixsts = state.favoriteCats.find(
        (item) => item.id === payload.id
      );
      if (catExixsts) {
        return Alert.alert(
          `A gato ${payload.name} já esta em sua lista de favoritos`
        );
      }
      state.favoriteCats = [...state.favoriteCats, payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCatsList.pending, (state) => {
      state.loadingCats = true;
    });
    builder.addCase(loadCatsList.fulfilled, (state, action) => {
      state.cats = action.payload as Cat[];
      // state.cats.pop();
      state.loadingCats = false;
    });
    builder.addCase(loadCatsList.rejected, (state, action) => {
      Alert.alert(
        "Houve um erro",
        "Não foi possível carregar os dados de sua aplicação"
      );
      state.loadingCats = false;
    });
  },
});

export const { addToFavorite } = catList.actions;
export default catList.reducer;
