import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Incrementanddecrementinsolana } from "../target/types/incrementanddecrementinsolana";

describe('Counter Program', () => {

  const provider = anchor.Provider.local();
  const connection = provider.connection;
  const program = anchor.workspace.CounterProgram;
 
  
  let counterAccount;

  it('Initializes a counter account', async () => {

    const [counterPublicKey] = await anchor.web3.PublicKey.findProgramAddress(
      [Buffer.from('counter')], pg.PROGRAM_ID
    );

    await program.methods.create({
      accounts: {
        counter: counterPublicKey,
        authority: provider.wallet.publicKey,
        
      }
    });

    counterAccount = await program.account.counter.fetch(counterPublicKey);

    assert.ok(counterAccount.count.toString() == 0);
  });

  it('Increments the counter', async () => {
    
    await program.methods.increment({
      accounts: {
       counter:counterAccount.publicKey,
      }
    });

    counterAccount = await program.account.counter.fetch(counterAccount.publicKey);

    assert.ok(counterAccount.count.toString() == 1); 
  });


 it('Decrements the counter', async () => {
    
    await program.methods.decrement({
      accounts: {
        counter: counterAccount.publicKey,
      }
    });

    counterAccount = await program.account.counter.fetch(counterAccount.publicKey);

    assert.ok(counterAccount.count.toString() == 1); 
  });

});