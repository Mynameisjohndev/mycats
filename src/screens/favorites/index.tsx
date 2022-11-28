import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Animated, { Layout, ZoomIn, ZoomOut } from "react-native-reanimated";
import { useSelector, useDispatch } from "react-redux";

import { FavoriteHeader } from "../../components/FavoriteHeader";
import ListItem from "../../components/ListItem";
import { Paginator } from "../../components/Paginator";
import { Container, Content } from "../../global/styles";
import { AppThunkDispatch, RootState } from "../../store";
import {
  lastPageFavorites,
  nextPageFavorites,
} from "../../store/reducers/cats";
import { FavoritesProps } from "../../types/StackRoutesProps";

const Favorites = ({ navigation, route }: FavoritesProps) => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const { paginatedFavoritCats, favoritePage } = useSelector(
    (state: RootState) => state.userList
  );

  const handleLastPage = () => {
    dispatch(lastPageFavorites());
  };

  const handlenextPage = () => {
    dispatch(nextPageFavorites());
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Content>
        <FavoriteHeader goTo={handleGoBack} />
        <ScrollView
          style={{ flexGrow: 0 }}
          contentContainerStyle={{
            paddingHorizontal: 16,
            justifyContent: "center",
            alignItems: "center",
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {paginatedFavoritCats.map((item, index) => {
            return (
              <Animated.View
                key={item.id}
                entering={ZoomIn.delay(300)}
                exiting={ZoomOut.delay(30)}
                layout={Layout.delay(200)}
              >
                <ListItem cat={item} action={() => null} />
              </Animated.View>
            );
          })}
        </ScrollView>
        <Paginator
          lestPage={handleLastPage}
          nextPage={handlenextPage}
          page={favoritePage}
        />
      </Content>
    </Container>
  );
};

export { Favorites };
