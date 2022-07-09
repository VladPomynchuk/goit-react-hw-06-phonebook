import { Component } from 'react';
import GlobalStyle from './GlobalStyle';
import Phonebook from './Phonebook';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Phonebook />
        <ToastContainer theme="colored" />
      </>
    );
  }
}
