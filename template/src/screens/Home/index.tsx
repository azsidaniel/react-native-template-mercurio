import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';

const Home: FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Welcome to Mercurio React Native template!
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Info')}>
        <Text>Info</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
