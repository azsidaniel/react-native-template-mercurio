import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import {StatusBar, View} from 'react-native';

import AuthRoutes from './routes';

const App: FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <View style={{backgroundColor: '#312e38', flex: 1}}>
        <AuthRoutes />
      </View>
    </NavigationContainer>
  );
};

export default App;
