
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { resolvers, typeDefs } from '@/lib/graphql'

const server = new ApolloServer({ resolvers, typeDefs });

export default startServerAndCreateNextHandler(server);
 