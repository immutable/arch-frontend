
import Image from 'next/image'
import React from 'react'
import styles from './ConnectButton.module.scss'
import MetamaskLogo from '../../assets/svg/wallets/metamask.svg'
import BraavosLogo from '../../assets/svg/wallets/Braavos.svg'
import ArgentXLogo from '../../assets/svg/wallets/ArgentX.svg'
import logInLogo from '../../assets/svg/vector/log-in.svg'

const ConnectButton = (props: any) => {
    if (props.name === 'Ethereum') {
        return (
            <div className={styles.walletConnectButton} onClick={() => console.log('done')}>
                <Image src={MetamaskLogo} className={styles.image6}></Image>
                <span className={styles.connect}>Connect</span>
            </div>
        )
    }
    else {
        return (
            <>
                <div className={styles.walletConnectButton} onClick={() => console.log('done')}>
                    <Image src={BraavosLogo} className={styles.image6}></Image>
                    <span className={styles.connect}>Connect</span>
                    {/* <Image src={logInLogo} className={styles.login}></Image> */}
                </div>
                <div className={styles.walletConnectButton} onClick={() => console.log('done')} >
                    <Image src={ArgentXLogo} className={styles.image6}></Image>
                    <span className={styles.connect}>Connect</span>
                    {/* <Image src={logInLogo} className={styles.login}></Image> */}
                </div>
            </>
        )

    }
}

export default ConnectButton