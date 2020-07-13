import React from 'react';
import { Helmet } from 'react-helmet';

// Pages
import Main from './pages/Main';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <>
            <Helmet>
                <title>Modelo</title>
                <meta
                    name="description"
                    content="Um modelo de site one page em React"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&amp;subset=devanagari,latin-ext"
                    rel="stylesheet"
                />
            </Helmet>
            <Main />
        </>
    );
}

export default App;
