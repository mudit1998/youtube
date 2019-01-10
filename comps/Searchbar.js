import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

class Searchbar extends Component {
  state = { term: '' };
  render() {
    return (
      <View style={styles.containerStyle}>
        <TextInput
          style={styles.searchTextStyle}
          onChangeText={term => {
            this.setState({ term }); //{term}===term:term
          }}
          value={this.state.term}
        />
        <Button
          buttonStyle={styles.buttonStyle}
          title={this.props.loading ? 'loading..' : 'search'}
          onPress={() => this.props.onPressSearch(this.state.term)}
        />
      </View>
    );
  }
}
const styles = {
  containerStyle: {
    flexDirection: 'row',
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10
  },
  searchTextStyle: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#000000'
  },
  buttonStyle: {
    height: 30,
    marginBottom: 8
  }
};
export default Searchbar;
