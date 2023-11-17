const anchor = require("@coral-xyz/anchor");
module.exports = async function (provider) {
  anchor.setProvider(provider);
  console.log("My address:", pg.wallet.publicKey.toString());
  const balance = await pg.connection.getBalance(pg.wallet.publicKey);
  console.log(`My balance: ${balance / web3.LAMPORTS_PER_SOL} SOL`);
};
