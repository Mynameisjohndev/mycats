/* eslint-disable consistent-return */
/* eslint-disable no-async-promise-executor */
/* eslint-disable no-promise-executor-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Alert } from "react-native";

import { api } from "../../api";
import { Cat } from "../../types/Cats";

export type CatReducer = {
  cats: Cat[];
  paginatedCats: Cat[];
  favoriteCats: Cat[];
  paginatedFavoritCats: Cat[];
  loadingCats: boolean;
  page: number;
  startSize: number;
  endSize: number;
  favoritePage: number;
  favoriteStartSize: number;
  favoriteEndSize: number;
};

const initialState: CatReducer = {
  cats: [],
  paginatedCats: [],
  paginatedFavoritCats: [],
  favoriteCats: [],
  loadingCats: false,
  page: 1,
  startSize: 0,
  endSize: 10,
  favoritePage: 1,
  favoriteStartSize: 0,
  favoriteEndSize: 10,
};

type ActionPayload = {
  cats: Cat[];
  favorites: Cat[];
};

const loadCatsFromStorage = async () => {
  const response = await AsyncStorage.getItem("list_cats");
  if (response) {
    return JSON.parse(response);
  }
};
const loadFavoriteCatsFromStorage = async () => {
  const response = await AsyncStorage.getItem("favorites_cats");
  if (response) {
    return JSON.parse(response);
  }
};

export const loadCatsList = createAsyncThunk("get-all-cats", async (data) => {
  try {
    const receiveCatsStorage = await loadCatsFromStorage();
    const receiveFavoriteCatsStorage = await loadFavoriteCatsFromStorage();

    if (receiveCatsStorage) {
      return {
        cats: receiveCatsStorage,
        favorites: receiveFavoriteCatsStorage || [],
      };
    }

    const response = await api.get<Cat[]>("/breeds");
    await AsyncStorage.setItem("list_cats", JSON.stringify(response.data));
    return {
      cats: response.data,
      favorites: [],
    };
  } catch (err) {
    return console.log(err);
  }
});

const catList = createSlice({
  name: "cat_list",
  initialState,
  reducers: {
    nextPage(state) {
      const { page, startSize, endSize, cats } = state;
      if (page < Math.ceil(cats.length / 10)) {
        state.page += 1;
        state.paginatedCats = cats.slice(startSize + 10, endSize + 10);
        state.endSize += 10;
        state.startSize += 10;
      }
    },
    lastPage(state) {
      const { page, cats, startSize, endSize } = state;
      if (page > 1) {
        state.page -= 1;
        state.paginatedCats = cats.slice(startSize - 10, endSize - 10);
        state.endSize -= 10;
        state.startSize -= 10;
      }
    },
    nextPageFavorites(state) {
      const {
        favoritePage,
        favoriteCats,
        favoriteEndSize,
        favoriteStartSize,
        paginatedFavoritCats,
      } = state;
      if (favoritePage < Math.ceil(favoriteCats.length / 10)) {
        state.favoritePage += 1;
        state.paginatedFavoritCats = favoriteCats.slice(
          favoriteStartSize + 10,
          favoriteEndSize + 10
        );
        state.favoriteStartSize += 10;
        state.favoriteEndSize += 10;
      }
    },
    lastPageFavorites(state) {
      const { favoritePage, favoriteCats, favoriteStartSize, favoriteEndSize } =
        state;
      if (favoritePage > 1) {
        state.favoritePage -= 1;
        state.paginatedFavoritCats = favoriteCats.slice(
          favoriteStartSize - 10,
          favoriteEndSize - 10
        );
        state.favoriteStartSize -= 10;
        state.favoriteEndSize -= 10;
      }
    },
    addToFavorite(state, { payload }: PayloadAction<Cat>) {
      const { favoriteCats, favoriteEndSize, favoriteStartSize } = state;
      const catExixsts = state.favoriteCats.find(
        (item) => item.id === payload.id
      );

      if (catExixsts) {
        return Alert.alert(
          "Aconteceu um erro!",
          `O gato ${payload.name} já esta em sua lista de favoritos.`
        );
      }
      const newFavorites = [...state.favoriteCats, payload];
      state.favoriteCats = newFavorites;
      state.paginatedFavoritCats = state.favoriteCats.slice(
        favoriteStartSize,
        favoriteEndSize
      );
      AsyncStorage.setItem("favorites_cats", JSON.stringify(newFavorites));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCatsList.pending, (state) => {
      state.loadingCats = true;
    });

    builder.addCase(loadCatsList.fulfilled, (state, action) => {
      const { startSize, endSize, favoriteEndSize, favoriteStartSize } = state;
      const receiveCats = action.payload as ActionPayload;
      const { cats, favorites } = receiveCats;
      state.favoriteCats = favorites;
      state.paginatedFavoritCats = favorites.slice(
        favoriteStartSize,
        favoriteEndSize
      );

      state.cats = cats;
      state.paginatedCats = cats.slice(startSize, endSize);
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

export const {
  addToFavorite,
  lastPage,
  nextPage,
  lastPageFavorites,
  nextPageFavorites,
} = catList.actions;
export default catList.reducer;
