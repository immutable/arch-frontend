import { createContext } from 'react';

import { initialState } from './wallets-reducer';

export const WalletsContext = createContext({
  ...initialState,
  accountHash: '',
  connectL1Wallet: (Config: any) => { },
  connectL2Wallet: (Config: any) => { },
  connectWallet: (Config: any) => { },
  resetWallet: () => { },
  resetL1Wallet: () => { },
  resetL2Wallet: () => { },
  swapWallets: () => { }
});
