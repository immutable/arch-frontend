import { starknet } from '../libs';
import { parseToFelt } from './parser';

export const formatBalance = (balance: any) => {
    return balance || 'N/A';
};

export const shortenBalance = (balance: any) => {
    return balance.length > 7 ? `${balance.substring(0, 7)}...` : balance;
};

export const shortenAddress = (account: any) => {
    return account
        ? account.length <= 8
            ? account
            : `${account.substring(0, 5)}...${account.substring(account.length - 3)}`
        : '';
};

export const calcAccountHash = (account1: any, account2: any) => {
    return starknet.hash.computeHashOnElements([
        parseToFelt(account1).toString(),
        parseToFelt(account2).toString()
    ]);
};

