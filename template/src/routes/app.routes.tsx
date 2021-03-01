import {createStackNavigator} from '@react-navigation/stack';
import React, {FC} from 'react';

import Home from '!/screens/Home';
import Info from '!/screens/Info';

const App = createStackNavigator();

const AppRoutes: FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#312e38',
        },
      }}>
      <App.Screen name="Home" component={Home} />
      <App.Screen name="Info" component={Info} />
    </App.Navigator>
  );
};

export default AppRoutes;
