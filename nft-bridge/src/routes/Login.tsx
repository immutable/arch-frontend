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
import { useIsL2 } from '../providers/TransferProvider';
import { useIsL1 } from '../providers/TransferProvider';
import { useTransfer } from '../providers/TransferProvider';
import { useWallets } from '../providers/WalletsProvider';
import { evaluate } from '../utils/object';
import { isChrome } from '../utils/browser';

const MODAL_TIMEOUT_DURATION = 2000;
const AUTO_CONNECT_TIMEOUT_DURATION = 100;

export const Login = () => {
    //const {
    //     titleTxt,
    //     subtitleTxt,
    //     downloadTxt,
    //     modalTxt,
    //     unsupportedBrowserTxt,
    //     unsupportedChainIdTxt
    // } = useLoginTranslation();
    const [trackLoginScreen, trackDownloadClick, trackWalletClick, trackLoginError] =
        useLoginTracking();
    const { autoConnect, supportedL1ChainId } = useEnvs();
    const [selectedWalletName, setSelectedWalletName] = useState('');
    const [error, setError] = useState<any>(null);
    const [, swapToL1] = useIsL1();
    const [, swapToL2] = useIsL2();
    const { action } = useTransfer();
    const { status, error: walletError, connectWallet, isConnected } = useWallets();
    const modalTimeoutId = useRef<any>(null);
    const hideModal = useHideModal();
    const showProgressModal = useProgressModal();
    const walletHandlers = useWalletHandlerProvider(action);

    useEffect((): any => {
        trackLoginScreen();
        if (!isChrome()) {
            setError({ type: LoginErrorType.UNSUPPORTED_BROWSER, message: 'Your browser is not supported' });
        }
        return swapToL1;
    }, []);

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
        if (isConnected) {
            swapToL2;
        }
    }, [isConnected]);

    useEffect(() => {
        walletError && handleWalletError(walletError);
    }, [walletError]);

    useEffect(() => {
        switch (status) {
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
        return () => {
            maybeHideModal();
        };
    }, [status]);

    const onWalletConnect = (walletHandler: any) => {
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
            return {
                id,
                description,
                isDisabled: !isChrome(),
                logoPath,
                name,
                onClick: () => onWalletConnect(walletHandler)
            };
        });
    };

    return (
        <div>
            <MultiChoiceMenu
                choices={mapLoginWalletsToChoices()}
                description={evaluate('While using StarkGate Alpha:', {
                    networkName:
                        action === ActionType.TRANSFER_TO_L2 ? NetworkType.L1.name : NetworkType.L2.name
                })}
                error={error}
                footer={
                    <div>
                        {'Don’t have a wallet?'} <span onClick={onDownloadClick}>{'Download Here'}</span>
                    </div>
                }
                title={'Login'}
            />
        </div>
    );
};
