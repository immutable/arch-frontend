export class WalletHandler {
    config: any
    constructor(config: any) {
        this.config = config;
    }

    isInstalled() {
        return false;
    }

    install() { }
}