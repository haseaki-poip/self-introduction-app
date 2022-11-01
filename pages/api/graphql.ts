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

const lng_lat_threshold = 0.00035; // 同じ範囲とみなす経度・緯度の差
const nowDate = new Date();
const date_threshold = new Date(nowDate.setHours(nowDate.getHours() - 12)); // 12時間前まで

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
    getIntroductions(lng: Float!, lat: Float!): [Introduction]!
  }
`;

const resolvers = {
  Query: {
    getIntroductions: async (
      parent: undefined,
      args: { lat: number },
      context: Context
    ) => {
      return await context.prisma.introduction.findMany({
        where: {
          AND: {
            lat: {
              lte: args.lat + lng_lat_threshold,
              gte: args.lat - lng_lat_threshold,
            },
            createdAt: {
              gt: date_threshold,
            },
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
