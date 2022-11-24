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
  paginatedCats: Cat[];
  favoriteCats: Cat[];
  loadingCats: boolean;
  quantity: number;
  page: number;
  startSize: number;
  endSize: number;
};

const initialState: CatReducer = {
  cats: [],
  paginatedCats: [],
  favoriteCats: [],
  loadingCats: false,
  quantity: 0,
  page: 1,
  startSize: 0,
  endSize: 10,
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
    nextPage(state) {
      const { page, cats, endSize, startSize } = state;
      if (page < Math.ceil(cats.length / 10)) {
        state.page += 1;
        state.paginatedCats = cats.slice(startSize + 10, endSize + 10);
        state.endSize += 10;
        state.startSize += 10;
      }
    },
    lastPage(state) {
      const { page, cats, endSize, startSize } = state;
      if (page > 1) {
        state.page -= 1;
        state.paginatedCats = cats.slice(startSize - 10, endSize - 10);
        state.endSize -= 10;
        state.startSize -= 10;
      }
    },
    addToFavorite(state, { payload }: PayloadAction<Cat>) {
      const { cats, startSize, endSize } = state;
      const catExixsts = state.favoriteCats.find(
        (item) => item.id === payload.id
      );
      if (catExixsts) {
        return Alert.alert(
          `A gato ${payload.name} já esta em sua lista de favoritos`
        );
      }
      state.favoriteCats = [...state.favoriteCats, payload];
      const filterCats = state.cats.filter((item) => item.id !== payload.id);
      state.paginatedCats = filterCats.slice(startSize, endSize);
      state.cats = filterCats;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCatsList.pending, (state) => {
      state.loadingCats = true;
    });
    builder.addCase(loadCatsList.fulfilled, (state, action) => {
      const { startSize, endSize } = state;
      const receiveCats = action.payload as Cat[];
      state.cats = receiveCats;
      state.quantity = receiveCats.length;
      state.paginatedCats = receiveCats.slice(startSize, endSize);

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

export const { addToFavorite, lastPage, nextPage } = catList.actions;
export default catList.reducer;
