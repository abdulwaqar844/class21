import React from 'react';
import './App.css';
import client from "./Config/gql_config";
import { ApolloProvider } from '@apollo/client';
import Students from "./Config/Components/Student"
function App() {
  return (
    <ApolloProvider client={client}>
      <Students />
    </ApolloProvider>
  );
}

export default App;
