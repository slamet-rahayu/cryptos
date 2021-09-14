import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

export default function Container({children}) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'white',
  },
});
