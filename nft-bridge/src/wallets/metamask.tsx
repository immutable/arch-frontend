import MetaMaskOnboarding from "@metamask/onboarding";

export class MetaMask {
	config: any;
	onboarding: any;
	constructor(config: any) {
		this.config = config;
		if (typeof window !== "undefined")
			this.onboarding = new MetaMaskOnboarding();
	}

	isInstalled() {
		return Boolean(
			(window as any).ethereum && (window as any).ethereum.isMetaMask
		);
	}

	install() {
		return this.onboarding.startOnboarding();
	}
}
