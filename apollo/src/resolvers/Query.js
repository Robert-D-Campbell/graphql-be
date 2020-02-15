// @ts-check

// Queries must be defined to return fields of the same type
// See the Query field in the type definitions for examples

/**
 * @param {{ where: import('../generated/prisma-client').UserWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const user = async (_, args, context) => {
  console.log("Query.user.args: %j", args);

  const user = await context.prisma.user(args.where);

  console.log("Query.user: %j", user);

  return user;
};

/**
 * @param {{ where: import('../generated/prisma-client').UserWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const users = async (_, args, context) => {
  console.log("Query.user.args: %j", args);

  const user = await context.prisma.users(args);

  console.log("Query.user: %j", user);

  return user;
};

/**
 * @param {{ where: import('../generated/prisma-client').ProfileWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const profiles = async (_, args, context) => {
  console.log("Query.profile.args: %j", args);

  const profile = await context.prisma.profiles(args);

  console.log("Query.profile: %j", profile);

  return user;
};

module.exports = {
  user,
  users,
  profiles
};
