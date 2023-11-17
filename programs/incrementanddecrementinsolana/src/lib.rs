use anchor_lang::prelude::*;
declare_id!("HaH9VjcLcu4WNb6fcfSFxLRhk43Vm5aJZsvVCo21uKRj");
#[program]
pub mod counter_program {

  use super::*;

  pub fn create(ctx: Context<Create>) -> Result<()> {
    let counter = &mut ctx.accounts.counter;
    counter.count = 0; 
    msg!("creating ..");
    Ok(())
  }

  pub fn increment(ctx: Context<Increment>) -> Result<()> {
    let counter = &mut ctx.accounts.counter;
    msg!("incrementing the number");
    counter.count += 1;
    Ok(())
  }
  
  pub fn decrement(ctx: Context<Decrement>) -> Result<()> {
    let counter = &mut ctx.accounts.counter;
    counter.count -= 1;
    msg!("decrement the number");
    Ok(())
  }

} 

#[derive(Accounts)]
pub struct Decrement<'info> {
  #[account(mut)]
  pub counter: Account<'info, Counter>  
}

#[derive(Accounts)]
pub struct Create<'info> {
  #[account(init, payer = user, space = 8 + 8)]
  pub counter: Account<'info, Counter>,
  #[account(mut)]
  pub user: Signer<'info>,
  pub system_program: Program <'info, System>,
}

#[derive(Accounts)]
pub struct Increment<'info> {
  #[account(mut)]  
  pub counter: Account<'info, Counter>,
}

#[account]
pub struct Counter {
  pub count: u64,
}