# Arch - NFT Bridge Frontend Requirements

## Rationale

_Why are we doing this discovery?_

This document is to outline the key requirements of the frontend interface of the Arch NFT Bridge.
It is being done to ensure that the Arch Frontend enabled users of the bridge to execute the workflows necessary to sucessfully bridge their assets.

## Key takeaways

_Summary of key takeaways, learnings and principles from the discovery work_

There are two key users of the Arch Frontend:

**Project owners**, who wish to register their contracts with the bridge.
**Token Holders**, who wish to deposit and withdraw their NFTs between L1 and L2.

Some Project Owners will also be Token Holders, however, their are significantly less Project Owners than Token Holders, so the initial design will have less emphasis on Project Owners and will be focused around the flows required for Token Holders.

The registration process which Project owners must undergo is currently centralized as there is no easy technical design to trustlessly prove that a user is the L1 and L2 contract owner of a particular NFT project without significantly impacting UX. Furthermore, many NFT contracts do no have `owner` defined in the contract, and as such, off-chain verification is required. For this, a temporary measure is to provide a link to Immutable X's Discord, where project owners can reach out to Immutable X to verify they own the project.

## User stories

_Outcome is a set of user stories (and personas) for us to start designing around once we’re aligned on the recommendation._
Priorities are defined using the [MoSCoW ](https://en.wikipedia.org/wiki/MoSCoW_method) method

Priority Definitions
|Priority| Definition |
|--|--|
| P1 | Must Have |
| P2 | Should Have |
| P3 | Could Have |
| P4 | Won't Have |

| ID    | User Story                                                                                                                                                 | Priority |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| US_18 | As a token holder, I wish to be able to switch between using testnet and mainnet                                                                           | P1       |
| US_02 | As a token holder, I wish to check if my NFT has been registered with the Bridge Registry                                                                  | P1       |
| US_06 | As a token holder, I wish to connect my Ethereum Wallet using Metamask so that I can sign L1 transactions such as 'deposit'                                | P1       |
| US_08 | As a token holder, I wish to connect my StarkNet Wallet using ArgentX and Braavos, so that I can sign StarkNet withdrawal transactions                     | P1       |
| US_09 | As a token holder I wish to enter the contract address, tokenId and L2 recipient address of the NFT I wish to deposit from L1                              | P1       |
| US_13 | As a token holder, I wish to check if my NFT on L2 can be bridged back to L1 so that I do not attempt to bridge an L2 NFT which will fail during bridging  | P1       |
| US_14 | As a token holder, I wish to enter my L2 Token Address, L2 Token Ids and L1 Recipient so that I can initate withdrawal of my NFTs from L2                  | P1       |
| US_16 | As a token holder, I wish to execute withdraw on L1 so that I get ownership of the NFTs I withdrew from L2, completing the withdrawal process              | P1       |
| US_17 | As a token holder, I want a link to Github and Etherscan/Voyager for the bridge contracts so that I can self verify its trustworthiness                    | P1       |
| US_07 | As a token holder, I wish to connect Ethereum Wallet using WalletConnect, so that I can sign L1 transactions such as 'deposit' with my non-Metamask wallet | P3       |
| US_11 | As a token holder, I wish to initiate cancel deposit so that I begin torecover my asset if my deposit fails                                                | P3       |
| US_12 | As a token holder, I wish to complete cancel deposit so that I can recover my asset if my deposit fails                                                    | P3       |
| US_01 | As a project owner, I wish to register my L1 and L2 contracts with the Bridge Registry, so that token holders can begin to bridge their assets.            | P4       |
| US_04 | As a token holder, I wish to view my L1 assets on the Arch Frontend so that I can decide which assets I want to deposit                                    | P4       |
| US_05 | As a token holder, I wish to view my L2 assets on the Arch Frontend so that I can decide which assets I want to withdraw                                   | P4       |
| US_15 | As a token holder, I wish to know when my NFTs bridged from L2 to L1 are ready to be withdrawn on L1                                                       | P4       |
| US_10 | As a token holder I wish to be informed of the status of my deposit so that I know the state of my assets                                                  | P4       |

## Reasoning

Many of the priorities for the User Stories are self explanatory, for example, deposits and withdrawals is integral to the bridge workflows.
US_04 and US_5 are set to P4 due to the significant increase in technical scope.
User flows which are expected to occur infrequently are also deprioritised, for example, US_11 and US_12.
