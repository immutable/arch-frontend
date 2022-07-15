import React from 'react'
import { Text, Button, Image } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/layout'
import { truncateAddress } from '../utils'
const WalletBalance = ({ logoURL, type, address, network, name, balance }: { logoURL: any, type: any, address: any, network: any, name: any, balance: any }) => {
    return (
        <Flex backgroundColor={'rgb(25, 34, 53)'} width={"100%"} borderBottom='1px' borderBottomColor='gray' flexDir={"column"} padding='7px' borderRadius={"0px"}>
            <Flex justifyContent={"space-between"} >
                <Flex>
                    <Image src={logoURL} w={'35px'} h={"35px"} marginY='auto' />
                    <Flex flexDir={"column"} padding="10px">
                        <Text color={"white"} fontSize={"20px"} fontWeight="600" letterSpacing="1px">{name}</Text>
                        <Text color={"white"} fontSize={"11px"} fontWeight="400" letterSpacing='0.8px'>Network: {type}</Text>
                    </Flex>
                </Flex>
                <Button borderRadius={'5px'} backgroundColor={"black"} color={"white"} padding='20px 35px' marginY='auto'> {truncateAddress(address)} </Button>
            </Flex>
            <Flex justifyContent={"space-between"}>
                <Text color={"gray"} fontSize={"13px"} fontWeight="400" letterSpacing={"0.5px"}>{network} Address: </Text>
                <Text color={"white"} fontSize={"15px"} fontWeight="400" letterSpacing={"0.5px"}>{address} </Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
                <Text color={"gray"} fontSize={"13px"} fontWeight="400" letterSpacing={"0.5px"}>ETH: </Text>
                <Text color={"white"} fontSize={"15px"} fontWeight="400" letterSpacing={"0.5px"}>{balance} </Text>
            </Flex>
        </Flex>
    )
}

export default WalletBalance