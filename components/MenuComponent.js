import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import alberto from './images/alberto.png';
import {DISHES} from '../shared/dishes';
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }

  static navigationOptions = {
    title: 'Menu',
  };

  render() {
    const renderMenuItem = ({item, index}) => {
      return (
        <ListItem
          key={index}
          title={item.name}
          subtitle={item.description}
          hideChevron={false}
          leftAvatar={{source: alberto}}
          onPress={() => navigate('DishDetail', {dishId: item.id})}
        />
      );
    };
    const {navigate} = this.props.navigation;
    return (
      <FlatList
        data={this.state.dishes}
        renderItem={renderMenuItem}
        keyExtractor={(item) => {
          item.id.toString();
        }}
      />
    );
  }
}

export default Menu;
