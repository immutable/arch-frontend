import { getStarknet } from 'get-starknet';

export class GetStarknetWallet {
    config: any;

    constructor(config: any) {
        this.config = config;
    }

    isInstalled() {
        const version = (window as any).starknet?.version;
        return version && version !== 'uninstalled';
    }

    install() {
        return getStarknet().enable({ showModal: true });
    }
}