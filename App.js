import React, { Component } from 'react';
import { View } from 'react-native';
import YTSearch from 'youtube-api-search';
import Searchbar from './comps/Searchbar';
import AppHeader from './comps/AppHeader';
import VideoList from './comps/VideoList';

const API_KEY = 'AIzaSyD2x2Q21dbyXTwBwdfbUd5oaXLgv7PQp9U';

export default class App extends Component {
  state = {
    loading: false,
    videos: []
  };
  onPressSearch = term => {
    this.searchYT(term);
  };
  searchYT = term => {
    this.setState({ loading: true });
    YTSearch({ key: API_KEY, term }, videos => {
      //console.log(videos);
      this.setState({ loading: false, videos }); //this videos is nowplaced in the array
    });
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <AppHeader headerText=" simple youtube search " />
        <Searchbar loading={this.state.loading} onPressSearch={this.onPressSearch} />
        <VideoList videos={this.state.videos} />
      </View>
    );
  }
}
