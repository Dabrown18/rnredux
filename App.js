import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DummyApp from './src/DummyApp'
import store from './src/store';
import { Provider } from 'react-redux'
import VisibleFilter from './src/containers/visibleContainer';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <DummyApp />
        <View>
          <VisibleFilter />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
