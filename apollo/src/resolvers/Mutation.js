// @ts-check

/**
 * @param {{ data: import('../generated/prisma-client').UserCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { import('../generated/prisma-client').UserPromise }
 */
const createUser = (_, args, context) => {
  console.log("createUser.args: %j", args);

  const user = context.prisma.createUser(args.data);

  return user;
};

/**
 * @param {{ data: import('../generated/prisma-client').ProfileCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { import('../generated/prisma-client').ProfilePromise }
 */
const createProfile = (_, args, context) => {
  console.log("createProfile.args: %j", args);

  const profile = context.prisma.createProfile(args.data);
  console.log("\n args.data", args.data, "\n");
  console.log(context.user);
  return profile;
};

/**
 * @param {{ data: import('../generated/prisma-client').ProfileUpdateInput, where: import('../generated/prisma-client').ProfileWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { import('../generated/prisma-client').ProfilePromise }
 */
const updateProfile = (_, args, context) => {
  console.log("updateProfile.args: %j", args);

  const profile = context.prisma.updateProfile(args);
  console.log("\n args.data", args.data, "\n");
  console.log(context.user);
  return profile;
};

/**
 * @param {{ where: import('../generated/prisma-client').ProfileWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { import('../generated/prisma-client').ProfilePromise }
 */
const deleteProfile = (_, args, context) => {
  console.log("deleteProfile.args: %j", args);

  const profile = context.prisma.deleteProfile(args.where);

  return profile;
};

module.exports = {
  createUser,
  createProfile,
  updateProfile,
  deleteProfile
};
