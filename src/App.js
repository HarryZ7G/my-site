import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css'
// Pages
import LandingPage from './Pages/LandingPage'
import HomePage from './Pages/HomePage'
import Test from './Pages/Test'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#fafafa',
      paper: '#fff',
    },
    text: {
      primary: '#444444'
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Router>
            <Switch>
                <Route exact path="/" render={() => <HomePage />} />
                <Route exact path="/test" render={() => <Test />} />
            </Switch>
        </Router>
    </ThemeProvider>
  );
}

export default App;
