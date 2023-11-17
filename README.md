# Increment-and-decrement-in-solana

# Anchor Program Deployment Guide for Solana Blockchain

## Overview

This README explains the process of building, testing, and deploying an Anchor program to the Solana blockchain. Anchor is a framework designed for Solana, simplifying the development of Rust programs that seamlessly integrate with the blockchain.

## Requirements

Ensure the following prerequisites are met before proceeding:

- [Rust](https://www.rust-lang.org/tools/install) 1.56 or later installed
- [Solana Tool Suite](https://docs.solana.com/cli/install-solana-cli-tools)
- [Anchor Framework](https://project-serum.github.io/anchor/getting-started/installation.html)

## Building the Program

To build the program, execute the following command:

```bash
anchor build
```

This command will generate a program keypair file under `target/deploy`.

## Testing

Run unit tests with the following command:

```bash
anchor test
```

## Deploying to Devnet

To deploy the program to Solana devnet, follow these steps:

1. Update the deployment keypair path in `Anchor.toml`.
2. Set Solana to use devnet:

```bash
solana config set --url devnet
```

3. Deploy the program:

```bash
anchor deploy
```

This will build, deploy, and initialize the program on devnet.

## Using the Program

Refer to `tests/anchor-counter.js` for an example usage of the deployed program. To execute the integration test, run:

```bash
anchor test
```

### Author Information:


[Siva Sankar Reddy Vattigunta](https://github.com/sivasankarreddyvattigunta)

### License:

**License**
[License](https://github.com/sivasankarreddyvattigunta/Minting_Nfts_by_creating_custom_candymachine_UI_in_solana/blob/main/LICENSE)
