const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function signup (_, args, ctx, info) {
  const password = await bcrypt.hash(args.password, 10);
  const user = await ctx.db.mutation.createUser({
    data: {
      ...args, password
    }
  });

  const token = jwt.sign({userId: user.id})
}

module.exports = {
  signup
}