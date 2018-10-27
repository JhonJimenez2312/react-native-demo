import React, {Component} from 'react';
import {
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';

class SuggestionList extends Component {
  renderItem = ({item}) => {
    return(
      <Suggestion {...item}/>
    )
  }
  keyExtractor= (item) => item.id.toString()
  renderEmpty = () => <Empty text="No hay sugerencias :C"/>
  itemSeparator = () => <Separator />

  render(){
    return (
      <Layout title='Recomendado para ti' >
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>

    )
  }
}
const styles = StyleSheet.create({

})
export default SuggestionList
