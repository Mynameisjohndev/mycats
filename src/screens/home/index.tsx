import React, { useEffect } from "react";
import { View, ActivityIndicator, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import ListItem from "../../components/ListItem";
import { Paginator } from "../../components/Paginator";
import { Container, Content } from "../../global/styles";
import { AppThunkDispatch, RootState } from "../../store";
import {
  addToFavorite,
  loadCatsList,
  lastPage,
  nextPage,
} from "../../store/reducers/cats";
import { Cat } from "../../types/Cats";

const Home = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const { paginatedCats, loadingCats, page, startSize, endSize, quantity } =
    useSelector((state: RootState) => state.userList);

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

  useEffect(() => {
    console.log(startSize, endSize, quantity);
  }, [startSize]);

  return (
    <Container>
      {loadingCats ? (
        <ActivityIndicator color="black" size="large" />
      ) : (
        <Content>
          <FlatList
            horizontal
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            style={{
              height: 550,
              flexGrow: 0,
            }}
            contentContainerStyle={{
              paddingHorizontal: 16,
              justifyContent: "center",
              alignItems: "center",
            }}
            ItemSeparatorComponent={() => <View style={{ marginRight: 10 }} />}
            data={paginatedCats}
            keyExtractor={(item, index) => String(index) + item}
            renderItem={({ item, index }) => (
              <ListItem
                index={index}
                action={() => handleFavorite(item)}
                cat={item}
              />
            )}
          />
          <Paginator
            lestPage={() => handleLastPage()}
            nextPage={() => handlenextPage()}
            page={page}
          />
        </Content>
      )}
    </Container>
  );
};

export default Home;
