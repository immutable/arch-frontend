import { ChainType } from '../enums/ChainType';

export const env = process.env.NODE_ENV;
export const supportedTokens = process.env.REACT_APP_SUPPORTED_TOKENS?.split(',');
export const autoConnect = process.env.REACT_APP_AUTO_CONNECT === 'true';
export const supportedL1ChainId = Number(process.env.REACT_APP_SUPPORTED_CHAIN_ID);
export const supportedL2ChainId =
  supportedL1ChainId === ChainType.L1.GOERLI ? ChainType.L2.GOERLI : ChainType.L2.MAIN;
export const etherscanUrl = process.env.REACT_APP_ETHERSCAN_URL;
export const voyagerUrl = process.env.REACT_APP_VOYAGER_URL;
