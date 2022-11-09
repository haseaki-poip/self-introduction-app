import type { NextApiRequest, NextApiResponse } from "next";
import { ApolloServer } from "apollo-server-micro";
import { PrismaClient, Prisma } from "@prisma/client";
import { typeDefs } from "../../src/schema";
import { Query } from "../../src/resolvers/Query";
import { Mutation } from "../../src/resolvers/Mutation";

const prisma = new PrismaClient();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
  },
  context: {
    prisma,
  },
});

const startServer = apolloServer.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // CORSの設定
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://studio.apollographql.com"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql", // graphqlのエンドポイント
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
