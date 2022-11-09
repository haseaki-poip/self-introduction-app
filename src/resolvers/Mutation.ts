import type { Context, SendIntroductionType } from "../types/type";

export const Mutation = {
  addIntroduction: async (
    parent: undefined,
    { input }: { input: SendIntroductionType },
    context: Context
  ) => {
    const newIntroduction = await context.prisma.introduction.create({
      data: input,
    });

    return newIntroduction;
  },
};
