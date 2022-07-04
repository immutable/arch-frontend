import { useMemo } from 'react';

import Wallets from '../config/Wallets';
import { ActionType } from '../enums/ActionType';
import { GetStarknetWallet, MetaMask } from '../wallets';

const SUPPORTED_L1_HANDLERS_REGISTRY = {
    metamask: MetaMask
};

const SUPPORTED_L2_HANDLERS_REGISTRY = {
    gsw: GetStarknetWallet
};

export const useWalletHandlerProvider = (actionType = ActionType.TRANSFER_TO_L2) => {
    return useMemo(() => {
        const walletsConfig = actionType === ActionType.TRANSFER_TO_L2 ? Wallets.L1 : Wallets.L2;
        const registry: any =
            actionType === ActionType.TRANSFER_TO_L2
                ? SUPPORTED_L1_HANDLERS_REGISTRY
                : SUPPORTED_L2_HANDLERS_REGISTRY;
        const handlers: any = [];
        walletsConfig.forEach(walletConfig => {
            const { id } = walletConfig;
            const WalletHandler = registry[id];
            if (WalletHandler) {
                handlers.push(new WalletHandler(walletConfig));
            }
        });
        return handlers;
    }, [actionType]);
};