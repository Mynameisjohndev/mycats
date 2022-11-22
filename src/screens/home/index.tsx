import React, { useEffect } from "react";
import {
  View,
  ActivityIndicator,
  Text,
  Dimensions,
  FlatList,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import ListItem from "../../components/ListItem";
import { Container } from "../../global/styles";
import { AppThunkDispatch, RootState } from "../../store";
import { addToFavorite, loadCatsList } from "../../store/reducers/cats";

const Home = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const { cats, loadingCats } = useSelector(
    (state: RootState) => state.userList
  );

  useEffect(() => {
    dispatch(loadCatsList());
  }, []);

  const { width } = Dimensions.get("window");

  const da = ({ data, index }) => {
    console.log(index);
  };

  return (
    <Container>
      {loadingCats ? (
        <ActivityIndicator color="black" size="large" />
      ) : (
        <FlatList
          horizontal
          scrollEventThrottle={16}
          bounces={false}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          ItemSeparatorComponent={() => <View style={{ marginRight: 10 }} />}
          data={cats}
          keyExtractor={(item, index) => String(index) + item}
          renderItem={({ item }) => <ListItem cat={item} />}
        />
      )}
    </Container>
  );
};

export default Home;
