import { useMemo } from 'react';

import Wallets from '../config/Wallets';
import { NetworkType } from '../enums/NetworkType';
import { GetStarknetWallet, MetaMask } from '../wallets';
import { WalletHandler } from '../wallets/wallet-handler';

// const configMap: any = {
//     [NetworkType.L1 as any]: {
//         wallets: Wallets.L1,
//         registry: {
//             metamask: MetaMask
//         }
//     },
//     [NetworkType.L2 as any]: {
//         wallets: Wallets.L2,
//         registry: {
//             gsw: GetStarknetWallet
//         }
//     }
// };

const configMapEth: any = {
    wallets: Wallets.L1,
    registry: {
        metamask: MetaMask
    }
}

const configMapStark: any = {
    wallets: Wallets.L2,
    registry: {
        gsw: GetStarknetWallet
    }

}
const networkTreatment = (network: any) => {
    if (network.name === "Ethereum") {
        return (configMapEth)
    }
    if (network.name === "StarkNet") {
        return (configMapStark)
    }
}
export const useWalletHandlerProvider = (network: any) => {
    return useMemo(() => {
        const { wallets, registry } = networkTreatment(network)

        return wallets
            .map((walletConfig: any) => {
                const { id } = walletConfig;
                const WalletHandler = registry[id];
                if (WalletHandler) {
                    return new WalletHandler(walletConfig);;
                }
                return null;
            })
            .filter((walletHandler: any) => walletHandler instanceof WalletHandler);
    }, [network]);
};
