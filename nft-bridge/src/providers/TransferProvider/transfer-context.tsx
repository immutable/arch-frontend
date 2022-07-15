import { createContext } from 'react';

import { NetworkType } from '../../enums/NetworkType';
import { initialState } from './transfer-reducer';

export const TransferContext = createContext({
  ...initialState,
  setAmount: (amount: any) => amount,
  selectToken: (symbol: any) => symbol,
  setActionType: (actionType: any) => actionType,
  setBridgeIsFull: (bridgeIsFull: any) => bridgeIsFull,
  isL1: false,
  isL2: false,
  fromNetwork: NetworkType.L1,
  toNetwork: NetworkType.L2,
  amount: 0
});
