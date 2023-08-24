import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GlobalStyles from '~/components/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import store from './stores/index.ts';
import THEME from './app/theme.ts';
import { SnackbarProvider } from 'notistack';
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={THEME}>
            <SnackbarProvider style={{ fontSize: 12 }}>
                <BrowserRouter>
                    <GlobalStyles>
                        <Provider store={store}>
                            <App />
                        </Provider>
                    </GlobalStyles>
                </BrowserRouter>
            </SnackbarProvider>
        </ThemeProvider>
    </React.StrictMode>,
);
