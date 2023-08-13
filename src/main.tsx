import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GlobalStyles from '~/components/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyles>
                <App />
            </GlobalStyles>
        </BrowserRouter>
    </React.StrictMode>,
);
