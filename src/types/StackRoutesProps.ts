import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type StackRoutesProps = {
  home: undefined;
  favorites: undefined;
};

export type HomeProps = NativeStackScreenProps<StackRoutesProps, "home">;
export type FavoritesProps = NativeStackScreenProps<
  StackRoutesProps,
  "favorites"
>;
