import React, {Component} from 'react';
import {FlatList, View, TouchableOpacity, Image, Text} from 'react-native';
import camera from '../assets/camera.png';
import api from '../services/Api';

export default class Feed extends Component {
  state = {
    feed: [],
  };

  async componentDidMount() {
    this.HeaderConfig();

    const response = await api.get('getposts');
    this.setState({feed: response.data});
  }

  handleLike = (id) => {
    api.post(`/like/${id}`);
  };

  HeaderConfig() {
    this.props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => this.props.navigation.navigate('New')}>
          <Image style={{marginRight: 20}} source={camera} />
        </TouchableOpacity>
      ),
      headerBackTitle: null,
    });
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.feed}
          keyExtractor={(post) => post._id}
          renderItem={({item}) => <Text> {item.author} </Text>}
        />
      </View>
    );
  }
}
