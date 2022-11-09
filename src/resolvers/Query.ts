import type { Context } from "../types/type";

const lng_lat_threshold = 0.00035; // 同じ範囲とみなす経度・緯度の差
const nowDate = new Date();
const date_threshold = new Date(nowDate.setHours(nowDate.getHours() - 12)); // 12時間前まで

export const Query = {
  Introductions: async (
    parent: undefined,
    args: { lat: number; lng: number },
    context: Context
  ) => {
    return await context.prisma.introduction.findMany({
      where: {
        AND: {
          lat: {
            lte: args.lat + lng_lat_threshold,
            gte: args.lat - lng_lat_threshold,
          },
          lng: {
            lte: args.lng + lng_lat_threshold,
            gte: args.lng - lng_lat_threshold,
          },
          createdAt: {
            gt: date_threshold,
          },
        },
      },
    });
  },

  Introduction: async (
    parent: undefined,
    { id }: { id: number },
    context: Context
  ) => {
    return await context.prisma.introduction.findUnique({
      where: {
        id,
      },
    });
  },
};
