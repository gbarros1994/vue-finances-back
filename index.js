const { prisma }= require('./generated/prisma-client');

async function main() {

  await prisma.createUser({
    name: 'Gerson',
    email: 'gersonalifer@hotmail.com',
    password: '123'
  })

  const users = await prisma.users();

  console.log(users);
}

main().catch(e => console.error(e))