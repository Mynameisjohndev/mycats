import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Favorites } from "../screens/favorites";
import Home from "../screens/home";
import themes from "../themes";
import { StackRoutesProps } from "../types/StackRoutesProps";

const StackRoutes = createNativeStackNavigator<StackRoutesProps>();

const Routes = () => {
  return (
    <StackRoutes.Navigator screenOptions={{ headerShown: false }}>
      <StackRoutes.Screen
        options={{ headerShown: false }}
        name="home"
        component={Home}
      />
      <StackRoutes.Screen
        options={{
          headerStyle: { backgroundColor: themes.COLORS.GREY },
        }}
        name="favorites"
        component={Favorites}
      />
    </StackRoutes.Navigator>
  );
};

export { Routes };
