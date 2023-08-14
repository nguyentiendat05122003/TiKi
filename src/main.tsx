import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GlobalStyles from '~/components/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/index.ts';
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyles>
                <Provider store={store}>
                    <App />
                </Provider>
            </GlobalStyles>
        </BrowserRouter>
    </React.StrictMode>,
);
