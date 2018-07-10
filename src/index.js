import App from './components/App/App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
    uri: 'https://mpjk0plp9.lp.gql.zone/graphql',
});

const WrappedApp = (
    <BrowserRouter>
        <ApolloProvider client={client}>
                <App />
        </ApolloProvider>
    </BrowserRouter>
);

ReactDOM.render(WrappedApp, document.getElementById('root'));
