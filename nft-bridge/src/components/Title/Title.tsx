import { Box, Flex } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import React from 'react'
import styles from './Title.module.scss'

const Title = () => {
    return (

        <div className={styles.frame2}>
            <div className={styles.line1}>-</div>
            <div className={styles.crossChainBridge}>Cross Chain Bridge</div>
            <div className={styles.transferYour}> Transfer your Ethereum NFTs between L1 and L2</div>
        </div>
    )
}

export default Title