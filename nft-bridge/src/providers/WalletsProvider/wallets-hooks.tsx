import { useCallback, useContext, useEffect, useState } from 'react';

import { WalletStatus } from '../../enums/WalletStatus';
import { WalletErrorType } from '../../enums/WalletErrorType';
import { ChainInfo, ChainType } from '../../enums/ChainType';
import { useEnvs } from '../../hooks/useEnvs'
import { getStarknet, getStarknetWallet } from '../../libs';
import { useTransfer } from '../TransferProvider';
import { WalletsContext } from './wallets-context';

export const useWallets = () => {
  const wallets = useContext(WalletsContext);
  const { isL1 } = useTransfer();
  const [activeWallet, setActiveWallet] = useState(wallets.walletL1);

  const connectWallet = useCallback(
    (walletConfig: any) => wallets.connectWallet(walletConfig),
    [isL1, wallets]
  );

  const resetWallet = useCallback(() => wallets.resetWallet(), [isL1, wallets]);

  const swapWallets = useCallback(() => wallets.swapWallets(), [isL1, wallets]);

  useEffect(() => {
    setActiveWallet(isL1 ? wallets.walletL1 : wallets.walletL2);
  }, [isL1, wallets]);

  return {
    ...activeWallet,
    connectWallet,
    resetWallet,
    swapWallets
  };
};

export const useAccountHash = () => {
  const { accountHash } = useContext(WalletsContext);
  return accountHash;
};

export const useL1Wallet = () => {
  const wallets = useContext(WalletsContext);

  const connectWallet = useCallback(
    (walletConfig: any) => wallets.connectL1Wallet(walletConfig),
    [wallets]
  );

  return {
    connectWallet,
    ...wallets.walletL1
  };
};

export const useL2Wallet = () => {
  const wallets = useContext(WalletsContext);

  const connectWallet = useCallback(
    (walletConfig: any) => wallets.connectL2Wallet(walletConfig),
    [wallets]
  );

  return {
    connectWallet,
    ...wallets.walletL2
  };
};

export const useStarknetWallet = () => {
  const { autoConnect, supportedL2ChainId } = useEnvs();
  const [error, setError] = useState<any>(null);
  const [account, setAccount] = useState<any>('');
  const [chainId, setChainId] = useState<any>('');
  const [networkName, setNetworkName] = useState('');
  const [status, setStatus] = useState(WalletStatus.DISCONNECTED);

  const connect = async (walletConfig: any) => {
    try {
      const wallet = await getStarknetWallet();
      if (!wallet) {
        return;
      }
      setStatus(WalletStatus.CONNECTING);
      let cond: any = { showModal: true } && !autoConnect
      const enabled = await wallet
        .enable(cond)
        .then(address => !!address?.length);

      if (enabled) {
        walletConfig.name = wallet.name || walletConfig.name;
        walletConfig.logoPath = wallet.icon || walletConfig.logoPath;
        updateAccount();
        addAccountChangedListener();
      }
    } catch {
      setStatus(WalletStatus.ERROR);
    }
  };

  const addAccountChangedListener = () => {
    getStarknet().on('accountsChanged', () => {
      setStatus(WalletStatus.DISCONNECTED);
      updateAccount();
    });
  };

  const updateAccount = () => {
    const chainId: any = getCurrentChainId();
    setAccount(getStarknet().selectedAddress);
    setChainId(chainId);
    setNetworkName(ChainInfo.L2[chainId].NAME);
    handleChain(chainId);
  };

  const getCurrentChainId = () => {
    const { baseUrl } = getStarknet().provider;
    if (baseUrl.includes('alpha-mainnet.starknet.io')) {
      return ChainType.L2.MAIN;
    } else if (baseUrl.includes('alpha4.starknet.io')) {
      return ChainType.L2.GOERLI;
    } else if (baseUrl.match(/^https?:\/\/localhost.*/)) {
      return 'localhost';
    }
  };

  const handleChain = (chainId: any) => {
    if (chainId === supportedL2ChainId) {
      setStatus(WalletStatus.CONNECTED);
      setError(null);
    } else {
      setStatus(WalletStatus.ERROR);
      setError({ name: WalletErrorType.CHAIN_UNSUPPORTED_ERROR });
    }
  };

  return {
    account,
    chainId,
    networkName,
    status,
    error,
    connect,
    isConnected: getStarknet().isConnected
  };
};
