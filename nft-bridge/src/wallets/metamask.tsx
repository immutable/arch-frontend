import MetaMaskOnboarding from "@metamask/onboarding";
import { WalletHandler } from "./wallet-handler";

export class MetaMask extends WalletHandler {
	onboarding: any
	constructor(config: any) {
		super(config)
		if (typeof window !== "undefined")
			this.onboarding = new MetaMaskOnboarding();
	}

	isInstalled() {
		if (typeof window !== "undefined") {
			return Boolean(
				(window as any).ethereum && (window as any).ethereum.isMetaMask
			);
		}
		else {
			return (false)
		}
	}

	install() {
		if (typeof window !== "undefined") {
			return this.onboarding.startOnboarding();
		}
	}
}
