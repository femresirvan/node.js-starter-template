const mongoose = require('mongoose');

async function main() {
  await mongoose.connect(process.env.MONGODB_CONN_STRING);
}

main().catch((err) => console.log(err));
