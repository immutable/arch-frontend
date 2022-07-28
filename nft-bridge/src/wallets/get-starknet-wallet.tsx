import { getStarknet } from 'get-starknet';
import { WalletHandler } from "./wallet-handler";
export class GetStarknetWallet extends WalletHandler {
    constructor(config: any) {
        super(config)
    }

    isInstalled() {
        const version = (window as any).starknet?.version;
        return version && version !== 'uninstalled';
    }

    install() {
        return getStarknet().enable({ showModal: true });
    }
}