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
  renderEmpty = () => <Empty text="No hay sugerencias :C"/>
  itemSeparator = () => <Separator />
  render(){
    const list = [
      {
        title:'Discolo',
        key:'1'
      },
      {
        title:'Olimpica',
        key:'2'
      },
      {
        title:'Portal del prado',
        key:'3'
      },
    ]
    return (
      <Layout title='Recomendado para ti' >
        <FlatList
          data={list}
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
