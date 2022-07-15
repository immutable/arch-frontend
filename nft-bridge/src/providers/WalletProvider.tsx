import PropTypes from 'prop-types';
import React from 'react';
import { UseWalletProvider as UseWalletProviderWrapper } from 'use-wallet';

import { useEnvs } from '../hooks/useEnvs';

export const WalletProvider = ({ children }: { children: any }) => {
    const { pollBalanceInterval, pollBlockNumberInterval, supportedL1ChainId } = useEnvs();
    return (
        <UseWalletProviderWrapper
            autoConnect={false}
            connectors={{
                injected: {
                    chainId: [supportedL1ChainId]
                }
            }}
            pollBalanceInterval={pollBalanceInterval}
            pollBlockNumberInterval={pollBlockNumberInterval}
        >
            {children}
        </UseWalletProviderWrapper>
    );
};

WalletProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};
