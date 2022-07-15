import React, { useEffect, useRef, useState } from 'react';
import { MultiChoiceMenu } from '../components/MultiChoiceMenu';
import { ActionType } from '../enums/ActionType';
import { ChainInfo } from '../enums/ChainType';
import { LoginErrorType } from '../enums/LoginErrorType'
import { NetworkType } from '../enums/NetworkType';
import { WalletErrorType } from '../enums/WalletErrorType';
import { WalletStatus } from '../enums/WalletStatus';
import { useEnvs } from '../hooks/useEnvs';
import { useLoginTracking } from '../hooks/useTracking';
import { useWalletHandlerProvider } from '../hooks/useWalletHandlerProvider';
import { useHideModal } from '../providers/ModalProvider';
import { useProgressModal } from '../providers/ModalProvider';
import { evaluate } from '../utils/object';
import { isChrome } from '../utils/browser';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Button, Image, Img } from '@chakra-ui/react';
import { AddIcon, Icon } from '@chakra-ui/icons';
import WalletBalance from '../components/WalletBalance';
import { useLoginWallet, useWalletsStatus } from '../providers/WalletsProvider';
const MODAL_TIMEOUT_DURATION = 2000;
const AUTO_CONNECT_TIMEOUT_DURATION = 100;

export const Login = () => {
    const [trackLoginScreen, trackDownloadClick, trackWalletClick, trackLoginError] =
        useLoginTracking();
    const { autoConnect, supportedL1ChainId } = useEnvs();
    const [selectedWalletName, setSelectedWalletName] = useState('');
    const [error, setError] = useState<any>(null);
    const [network, setNetwork] = useState(NetworkType.L1);
    const { statusL1, statusL2 } = useWalletsStatus();
    const { walletError, walletStatus, connectWallet } = useLoginWallet(network);
    const walletHandlers = useWalletHandlerProvider(network);
    const modalTimeoutId = useRef<any>(null);
    const hideModal = useHideModal();
    const showProgressModal = useProgressModal();

    useEffect((): any => {
        trackLoginScreen();
        if (!isChrome()) {
            setError({ type: LoginErrorType.UNSUPPORTED_BROWSER, message: ('Browser not supported') });
        }
    }, []);

    useEffect(() => {
        if (statusL1 !== WalletStatus.CONNECTED) {
            network !== NetworkType.L1 && setNetwork(NetworkType.L1);
        } else if (statusL2 !== WalletStatus.CONNECTED) {
            network !== NetworkType.L2 && setNetwork(NetworkType.L2);
        }
    }, [statusL1, statusL2]);

    useEffect(() => {
        handleModal();
        return () => {
            maybeHideModal();
        };
    }, [walletStatus]);

    useEffect(() => {
        let timeoutId: any;
        if (error) {
            trackLoginError(error);
        } else if (!error && autoConnect) {
            if (walletHandlers.length > 0) {
                timeoutId = setTimeout(
                    () => onWalletConnect(walletHandlers[0]),
                    AUTO_CONNECT_TIMEOUT_DURATION
                );
            }
        }
        return () => clearTimeout(timeoutId);
    }, [error, walletHandlers]);

    useEffect(() => {
        walletError && handleWalletError(walletError);
    }, [walletError]);

    const onWalletConnect = (walletHandler: any) => {
        console.log('onWalletConnect')
        const { config } = walletHandler;
        const { name } = config;
        trackWalletClick(name);
        if (!walletHandler.isInstalled()) {
            return walletHandler.install();
        }
        setSelectedWalletName(name);
        return connectWallet(config);
    };

    const onDownloadClick = () => {
        trackDownloadClick();
        if (walletHandlers.length > 0) {
            return walletHandlers[0].install();
        }
    };

    const handleModal = () => {
        switch (walletStatus) {
            case WalletStatus.CONNECTING:
                maybeShowModal();
                break;
            case WalletStatus.CONNECTED:
                setSelectedWalletName('');
                setError(null);
                maybeHideModal();
                break;
            case WalletStatus.ERROR:
            case WalletStatus.DISCONNECTED:
                maybeHideModal();
                break;
            default:
                break;
        }
    };

    const handleWalletError = (error: any) => {
        if (error.name === WalletErrorType.CHAIN_UNSUPPORTED_ERROR) {
            setError({
                type: LoginErrorType.UNSUPPORTED_CHAIN_ID,
                message: evaluate('Please select {{chainName}} in your wallet', {
                    chainName: ChainInfo.L1[supportedL1ChainId].NAME
                })
            });
        }
    };

    const maybeShowModal = () => {
        maybeHideModal();
        modalTimeoutId.current = setTimeout(() => {
            showProgressModal(selectedWalletName, evaluate('Waiting for confirmation from {{walletName}}', { walletName: selectedWalletName }));
        }, MODAL_TIMEOUT_DURATION);
    };

    const maybeHideModal = () => {
        if (typeof modalTimeoutId.current === 'number') {
            clearTimeout(modalTimeoutId.current);
            modalTimeoutId.current = null;
        }
        hideModal();
    };

    const mapLoginWalletsToChoices = () => {
        return walletHandlers.map((walletHandler: any) => {
            const {
                config: { id, description, name, logoPath }
            } = walletHandler;
            // onWalletConnect(walletHandler)
            return {
                id,
                description,
                isDisabled: !isChrome(),
                isLoading: walletStatus === WalletStatus.CONNECTING,
                logoPath,
                name,
                onClick: () => onWalletConnect(walletHandler)
            };
        });
    };

    const handleClick = () => {
        return walletHandlers.map((walletHandler: any) => {
            onWalletConnect(walletHandler)
        })
    }
    return (

        <Flex backgroundColor={"rgb(25, 34, 53)"} height='100%' width={"100%"} borderWidth='0.5px' borderColor={'gray'} flexDir='column' borderRadius='10px' padding='16px' paddingTop={"0px"} >
            <WalletBalance
                name="Ethereum"
                network="ETH"
                logoURL="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
                type="mainnet"
                address="Connect your wallet "
                balance='0.001' />
            < WalletBalance
                name="Starknet"
                network="STARKNET"
                logoURL="https://www.starknet-ecosystem.com/starknet-logo.png"
                type="testnet"
                address="Connect your wallet"
                balance='0.001' />
            <MultiChoiceMenu
                choices={mapLoginWalletsToChoices()}
                description={evaluate('While using StarkGate Alpha:', { networkName: network })}
                error={error}
                title={'Login'}
            />
            <Flex width='100%' >
                <Button marginLeft='auto' onClick={() => handleClick()} > Connect your wallet</Button>
            </Flex>
        </Flex >

    );
};
