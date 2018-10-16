import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CaseList = ({cases}) => {
  return (
    <View>
      {cases.map((ca) => <Text style={{ fontSize: 24 }} key={ca.id.toString}>{ca.text}</Text>)}
    </View>
  )
}

export default CaseList;