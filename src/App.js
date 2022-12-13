import React, { Component } from 'react';
import Search from './components/search/search';
import './App.css';
import { MuiThemeProvider } from 'material-ui/styles';
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Search />
        </div>
      </MuiThemeProvider>
    )
  }
}
export default App;
