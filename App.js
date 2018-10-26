  import React, { Component } from 'react';
  import {
    Text,
  } from 'react-native';
 //http://paletton.com/#uid=13L0u0k8M9W6ImB8ch0fP8xlC7i
  import Home from './src/screens/containers/home';
  import Header from './src/sections/components/header';
  import SuggestionList from './src/videos/containers/suggestion-list';

  type Props = {};
  export default class App extends Component<Props> {
    render() {
      return(
        <Home>
          <Header/>
          <Text>buscador</Text>
          <Text>categorías</Text>
          <Text>sugerencias</Text>
          <SuggestionList/>
        </Home>
      );
    }
  }
