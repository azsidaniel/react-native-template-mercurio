import React, {FC} from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

const Info: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Info here!</Text>
    </View>
  );
};

export default Info;
