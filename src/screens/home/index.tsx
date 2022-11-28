import React, { useEffect } from "react";
import { ScrollView, ActivityIndicator } from "react-native";
import Animated, { ZoomIn, ZoomOut, Layout } from "react-native-reanimated";
import { useSelector, useDispatch } from "react-redux";

import { HomeHeader } from "../../components/HomeHeader";
import ListItem from "../../components/ListItem";
import { Paginator } from "../../components/Paginator";
import { Container, Content } from "../../global/styles";
import { AppThunkDispatch, RootState } from "../../store";
import {
  addToFavorite,
  lastPage,
  loadCatsList,
  nextPage,
} from "../../store/reducers/cats";
import { Cat } from "../../types/Cats";
import { HomeProps } from "../../types/StackRoutesProps";

export default function Home({ navigation }: HomeProps) {
  const dispatch = useDispatch<AppThunkDispatch>();
  const { paginatedCats, loadingCats, page } = useSelector(
    (state: RootState) => state.userList
  );

  useEffect(() => {
    dispatch(loadCatsList());
  }, []);

  const handleFavorite = (cat: Cat) => {
    dispatch(addToFavorite(cat));
  };

  const handleLastPage = () => {
    dispatch(lastPage());
  };

  const handlenextPage = () => {
    dispatch(nextPage());
  };

  const handleNavigateToFavorites = () => {
    navigation.navigate("favorites");
  };

  return (
    <Container>
      {loadingCats ? (
        <ActivityIndicator color="grey" size="large" />
      ) : (
        <Content>
          <HomeHeader goTo={handleNavigateToFavorites} />
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
            {paginatedCats.map((item) => {
              return (
                <Animated.View
                  key={item.id}
                  // entering={ZoomIn.delay(300)}
                  // exiting={ZoomOut.delay(30)}
                  // layout={Layout.delay(200)}
                  entering={ZoomIn.delay(400)}
                  exiting={ZoomOut.delay(200)}
                  layout={Layout.delay(200)}
                >
                  <ListItem cat={item} action={() => handleFavorite(item)} />
                </Animated.View>
              );
            })}
          </ScrollView>
          <Paginator
            lestPage={() => handleLastPage()}
            nextPage={() => handlenextPage()}
            page={page}
          />
        </Content>
      )}
    </Container>
  );
}
