function problem(): Record<string, any> {
  return { id: 1, name: 'Cool' };
}

module.exports = {
  Query: {
    problems: (_: any, __: any, ctx: any) => ctx.db.problems(),
    problem: () => problem(),
  },
};
