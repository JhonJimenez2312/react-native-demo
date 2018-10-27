  import React, { Component } from 'react';
  import {
    Text,
  } from 'react-native';
 //http://paletton.com/#uid=13L0u0k8M9W6ImB8ch0fP8xlC7i
  import Home from './src/screens/containers/home';
  import Header from './src/sections/components/header';
  import SuggestionList from './src/videos/containers/suggestion-list';
  import CategoryList from './src/videos/containers/category-list';
  import API from './utils/api';

  type Props = {};
  export default class App extends Component<Props> {

  state = {
      suggestionList:[],
      categoryList:[],
    }

  async componentDidMount(){
    const movies = await  API.getSuggestion(10);
    const categories = await  API.getMovies();
    console.log(movies);
    console.log(categories);

    this.setState({
      suggestionList:movies,
      categoriesList:categories,
    })

  }
    render() {
      return(
        <Home>
          <Header/>
          <Text>buscador</Text>
          <Text>categorías</Text>
          <Text>sugerencias</Text>
          <CategoryList
            list={this.state.categoriesList}
          />
          <SuggestionList
            list={this.state.suggestionList}
          />

        </Home>
      );
    }
  }
