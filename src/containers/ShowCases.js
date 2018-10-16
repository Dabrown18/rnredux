import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'

class ShowCases extends Component {

  state = {
    text: ''
  }

  onFindCase = (text) => {
    // redux store
    this.props.dispatch({ 
      type: SET_FILTER,
      text: text
    })
    this.setState({text: ''})
  }

  render() {
    return (
      <View style={{ flexDirection: 'row', marginHorizontal: 20, paddingTop: 100}}>
        <TextInput 
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder="Find a case"
          style={{ borderWidth: 1, borderColor: '#f2f2e1', backgroundColor: '#eaeaea', height: 50, flex: 1, padding: 5 }}
        />
        <TouchableOpacity 
          onPress={this.onFindCase(this.state.text)}
        >
          <View style={{ height: 50, backgroundColor: "#eaeaea", alignItems: "center", justifyContent: "center"}}>
            <Ionicons name="md-add" size={30} style={{ color: "#de9595", padding: 10 }}/>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
export default connect()(ShowCases);

