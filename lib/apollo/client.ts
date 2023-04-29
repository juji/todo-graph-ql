import { InMemoryCache, ApolloClient } from '@apollo/client';


const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: '/api/graphql',
});

export default client