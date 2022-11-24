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
  offset: number;
};

const initialState: CatReducer = {
  cats: [],
  paginatedCats: [],
  favoriteCats: [],
  loadingCats: false,
  quantity: 0,
  page: 1,
  offset: 0,
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
      const { page, quantity, cats, offset } = state;
      console.log(quantity);
      // state.page += 1;
      // state.paginatedCats = state.cats.slice(10, 20);

      // if (page < quantity) {
      //   state.page += 1;
      //   state.offset += 10;
      // }
    },
    lastPage(state) {
      // state.page -= 1;
      const { page, cats, offset } = state;
      if (page > 0) {
        state.page -= 1;
        state.paginatedCats = cats.slice(offset, offset - 10);
        state.offset -= 10;
      }
    },
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
      const filterCats = state.cats.filter((item) => item.id !== payload.id);
      state.cats = filterCats;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCatsList.pending, (state) => {
      state.loadingCats = true;
    });
    builder.addCase(loadCatsList.fulfilled, (state, action) => {
      const { cats, offset } = state;
      const receiveCats = action.payload as Cat[];
      state.cats = receiveCats;
      state.quantity = receiveCats.length;
      state.paginatedCats = receiveCats.slice(offset, offset + 10);
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
