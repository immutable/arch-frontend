import { createContext } from 'react';

import { initialState } from './wallets-reducer';

export const WalletsContext = createContext({
  ...initialState,
  accountHash: '',
});
