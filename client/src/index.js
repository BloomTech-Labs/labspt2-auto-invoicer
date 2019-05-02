import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

//Context API import
import { UserProvider, UserConsumer } from './contexts/UserContext';
import { CompanyProvider, CompanyConsumer } from './contexts/CompanyContext';

import GlobalState from './context/GlobalState';

import theme from './theme';

ReactDOM.render(
  <GlobalState>
    <UserProvider>
      <CompanyProvider>
        <Router>
          <UserConsumer>
            {({ fetchUser, userState }) => {
              return (
                <CompanyConsumer>
                  {({ fetchCompany }) => {
                    return (
                      <MuiThemeProvider theme={theme}>
                        <App
                          fetchUser={fetchUser}
                          fetchCompany={fetchCompany}
                          userId={userState._id}
                          companies={userState.companies}
                        />
                      </MuiThemeProvider>
                    );
                  }}
                </CompanyConsumer>
              );
            }}
          </UserConsumer>
        </Router>
      </CompanyProvider>
    </UserProvider>
  </GlobalState>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
