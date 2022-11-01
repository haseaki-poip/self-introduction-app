import type { NextApiRequest, NextApiResponse } from "next";
import { ApolloServer, gql } from "apollo-server-micro";
import { PrismaClient, Prisma } from "@prisma/client";
type Context = {
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >;
};

const prisma = new PrismaClient();

const typeDefs = gql`
  type Introduction {
    id: ID!
    name: String!
    affiliation: String!
    introduction: String!
    hobby: String!
    img_url: String
    twitter_url: String
    Instagram_url: String
    github_url: String
    lng: Float!
    lat: Float!
  }

  type Query {
    introductions: [Introduction]!
  }
`;

const resolvers = {
  Query: {
    introductions: async (parent: undefined, args: {}, context: Context) => {
      return await context.prisma.introduction.findMany({
        where: {
          lat: {
            gte: 1,
            lt: 1,
          },
        },
      });
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
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
