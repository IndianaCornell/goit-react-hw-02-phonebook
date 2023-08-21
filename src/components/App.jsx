import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Card } from './Card.styled';

import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    return (
      <Layout>
        <Card></Card>
        <GlobalStyle />
      </Layout>
    );
  }
}
