const { prisma } = require("../apollo/src/generated/prisma-client");
var faker = require("faker");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function main() {
  // Generate a bunch of random users
  for (var i = 0; i < 100; i++) {
    await prisma.createUser({});
    await prisma.createProfile({
      email: "testing email",
      username: "testing username",
      firstName: "testing firstName",
      lastName: "testing lastName",
      bio: "testing bio",
      city: "testing city",
      state: "testing state",
      phoneNumber: "testing phoneNumber"
    });
  }
}

main().catch(e => console.error(e));
