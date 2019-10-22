import { ApolloServer, gql } from 'apollo-server-express';
import { default as typeDefs } from './api/graphql/schemas';
import { resolvers } from './api/graphql/resolvers';
import { prisma } from '../generated/prisma-client';
import express from 'express';

require('dotenv').config();

const server = new ApolloServer({
  typeDefs,
  // tslint:disable-next-line: object-literal-sort-keys
  resolvers,
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  context: () => {
    return {
      db: prisma,
    };
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as any;

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
);
