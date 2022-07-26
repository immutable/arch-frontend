# Registering your project on ARCH

The Arch NFT Bridge requires Project Owners to register their project with the bridge. This is done for many reasons such as security. For example, what if someone registers a malicious contract on L2 with your NFT project? The last thing we want is token holders losing value to scams. On the goerli testnet environment, Project Owners can still register on the Arch Bridge without authentication ([see tutorial](https://youtu.be/MzmeVL0vZ0A))

For this reason, registering with the bridge currently requires proof of project ownership. Before beginning the authentication process, Project owners should be prepared with the following:

1. L1 Token Address (i.e. address of their deployed NFT on L1)
2. L2 Token Address (i.e. address of their deployed NFT on L2, [see example](https://github.com/rzmahmood/StarkNet-NFT-Template))

Once Project owners have these details, the authenticaton process can begin. Currently, social authentication is used, for which two forms of authentication must be provided. Examples include Discord, Twitter, Telegram and Website Domain Ownership.

The process can begin by messaging in the #starknet channel of the Immutable X Discord, after which a member of the Immutable X team will reach out via private messages. Immutable X members maintain discretion and may ask for further proof if the situation demands it.

Once sufficient authentication is provided, Immutable X will register your L1 and L2 Token Addresses on the deployed Bridge Registry, after which Token Holders can begin depositing NFTs to L2, thus completing the process.
