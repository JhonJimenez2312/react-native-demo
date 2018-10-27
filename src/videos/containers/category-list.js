import React, {Component} from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';

class CategoryList extends Component {

  keyExtractor= (item) => item.id.toString()
  renderEmpty = () => <Empty text="No hay sugerencias :C"/>
  itemSeparator = () => <Separator />
  renderItem = ({item}) => {
    return(
      <Suggestion {...item}/>
    )
  }

  render(){
    return(
      <FlatList
        horizontal={true}
        keyExtractor={this.keyExtractor}
        data={this.props.list}
        ListEmptyComponent={this.renderEmpty}
        ItemSeparatorComponent={this.itemSeparator}
        renderItem={this.renderItem}
      />
    )
  }
}
export default CategoryList;
