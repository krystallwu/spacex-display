import React, { ReactNode } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://spacex-production.up.railway.app/',
    cache: new InMemoryCache(),
  });
  

type ApolloWrapperProps = {
  children: ReactNode;
};

export const ApolloWrapper = ({ children }: ApolloWrapperProps) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
