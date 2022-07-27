import Image from 'next/image'
import React, { useState } from 'react'
import styles from './Process.module.scss'
import ethLogo from '../../assets/svg/logos/eth.png'
import question from '../../assets/svg/vector/Tool Tips .svg'
const Process = () => {
    let maxInput = 7
    let x = 2
    const [inputAddress, setInputAddress] = useState()
    const addInputField = () => {
        if (x < maxInput) {
            x++;

        }
    }

    const handleInputField = () => {

    }
    return (
        <div className={styles.frame7}>
            <div className={styles.frame11142}>
                <div className={styles.frame11142bis}>
                    <div className={styles.image12}>
                        <Image src={ethLogo} />
                    </div>
                    <div className={styles.erc721}>ERC721</div>
                </div>
            </div>
            <div className={styles.bloc1}>
                <div className={styles.header1}>
                    <div className={styles.text}>Select ERC721 Address</div>
                    <div className={styles.subText}>Manually enter address</div>
                    <input type='checkbox' style={{ width: "24px", height: "24px", objectFit: 'contain', backgroundColor: '#57c6e4' }}></input>
                </div>
                <input className={styles.input1} placeholder='Enter Address'></input>
                <div className={styles.endblock1}>
                    <div className={styles.subBlock1}>
                        <div className={styles.subText2}>Verify Bridge Registry to Proceed</div>
                        <Image src={question} style={{ cursor: 'pointer' }}></Image>
                    </div>
                    <button className={styles.button1}>Check Verification</button>
                </div>
            </div>
            <div className={styles.bloc2}>
                <div className={styles.header1}>
                    <div className={styles.text1}>Select Token IDS</div>
                    <Image src={question} style={{ cursor: 'pointer' }}></Image>
                    <div className={styles.bordSub}>Manually enter token IDS</div>

                    <input type='checkbox' className={styles.checkbox} style={{ width: "24px", height: "24px", flexGrow: '0', objectFit: 'contain' }}></input>
                </div>
                <input className={styles.input1} placeholder='Enter Address'></input>
                <input className={styles.input1} placeholder='Enter Address'></input>
                <button className={styles.button2} onClick={addInputField}>Add Token IDs</button>
            </div>
            <div className={styles.line4} />
            <div className={styles.bloc3}>
                <div className={styles.text2}>Enter your Starknet Address</div>
                <div className={styles.subText3}>Enter the receiving Starknet Address</div>
                <div className={styles.subblock3}>
                    <div className={styles.subText2}>Starknet Address</div>
                    <div className={styles.subText4}>Use my StarkNet Address</div>
                </div>
                <input className={styles.input1} placeholder='0x12'></input>
            </div>
            <div className={styles.bottom1}>
                <button className={styles.button3}>Continue</button>
            </div>
        </div >
    )
}

export default Process