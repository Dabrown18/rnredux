import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ShowCases from './containers/ShowCases';

export default class DummyApp extends Component {

  state = {
    cases: [],
    visibilityFilter: 'SHOW_ALL_CASES'
  }

  render() {
    return (
      <View>
        <ShowCases />
        <View>

        </View>
      </View>
    )
  }
}