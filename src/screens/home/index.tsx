import React, { useEffect, useState, useRef } from "react";
import {
  View,
  ActivityIndicator,
  Text,
  Dimensions,
  FlatList,
  LayoutAnimation,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useSelector, useDispatch } from "react-redux";

import ListItem from "../../components/ListItem";
import { Container } from "../../global/styles";
import { AppThunkDispatch, RootState } from "../../store";
import { addToFavorite, loadCatsList } from "../../store/reducers/cats";
import { Cat } from "../../types/Cats";

const Home = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const [current, setCurrent] = useState(0);
  const isCarrousel = useRef();
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

  const [data, setData] = useState([
    { id: 1, name: "1" },
    { id: 1, name: "1" },
    { id: 3, name: "1" },
    { id: 3, name: "1" },
    { id: 3, name: "1" },
    { id: 3, name: "1" },
    { id: 3, name: "1" },
    { id: 3, name: "1" },
  ]);

  const layoutAnimConfig = {
    duration: 300,
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
    },
    delete: {
      duration: 100,
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity,
    },
  };

  const handleFavorite = (cat: Cat) => {
    // dispatch(addToFavorite(cat));
    LayoutAnimation.configureNext(layoutAnimConfig);
  };

  return (
    <Container>
      {loadingCats ? (
        <ActivityIndicator color="black" size="large" />
      ) : (
        // <View style={{ height: 500, width: "100%" }}>
        //   <Carousel
        //     onSnapToItem={(index) => setCurrent(index)}
        //     contentContainerStyle={{ marginTop: 100 }}
        //     loop
        //     autoplay
        //     ref={isCarrousel}
        //     autoplayDelay={3000}
        //     autoplayInterval={3000}
        //     alwaysBounceHorizontal
        //     layout="default"
        //     data={cats}
        //     renderItem={({ item }) => <ListItem cat={item} />}
        //     sliderWidth={width}
        //     itemWidth={300}
        //   />

        //   {/* <Pagination
        //     dotsLength={cats.length}
        //     activeDotIndex={current}
        //     carouselRef={isCarrousel}
        //     dotStyle={{
        //       width: 10,
        //       height: 10,
        //       borderRadiu: 10,
        //       // marginHorizontal: 2,
        //       backgroundColor: "#ccc",
        //     }}
        //   /> */}
        // </View>

        <FlatList
          horizontal
          scrollEventThrottle={16}
          bounces={false}
          contentContainerStyle={{
            paddingHorizontal: 16,
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          ItemSeparatorComponent={() => <View style={{ marginRight: 10 }} />}
          data={cats}
          keyExtractor={(item, index) => String(index) + item}
          renderItem={({ item, index }) => (
            <ListItem
              index={index}
              action={() => handleFavorite(item)}
              cat={item}
            />
          )}
        />
      )}
    </Container>
  );
};

export default Home;
