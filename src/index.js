import React from 'react';
import ReactDOM  from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './app/store';
import './index.css'
import ToggleColorMode from './utils/ToggleColorMode';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <Provider store={store}>
    <ToggleColorMode >
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </ToggleColorMode>
  </Provider>
);