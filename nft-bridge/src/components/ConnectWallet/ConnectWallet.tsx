import Image from 'next/image'
import React from 'react'
import styles from './ConnectWallet.module.scss'
import ConnectButton from '../ConnectButton/ConnectButton'

const ConnectWallet = (props: any) => {
    return (
        <div className={styles.frame11142}>
            <div className={styles.frame11144}>
                {/* <div className={styles.frame11146}> */}
                <div className={styles.image12}>
                    <Image src={props.logoURL} />
                </div>
                {/* </div> */}
                <div className={styles.frame11110}>
                    <div className={styles.ethereum}>
                        {props.name}
                    </div>
                    <div className={styles.networkMainnet}>Network : {props.type}</div>
                </div>
                {props.children}
            </div>
            <div className={styles.frame11139}>
                <div className={styles.frame2}>
                    <div className={styles.ethAddress}>{props.name} Address : </div>
                    <div className={styles.emAddress}></div>
                </div>
                <div className={styles.eth}> ETH : </div>

            </div>
        </div>

    )
}

export default ConnectWallet