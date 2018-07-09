import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

const client = new ApolloClient({
    uri: 'https://mpjk0plp9.lp.gql.zone/graphql',
});

const WrappedApp = (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

ReactDOM.render(WrappedApp, document.getElementById('root'));