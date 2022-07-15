import { Box, Flex } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import React from 'react'


const Title = () => {
    return (
        <Flex backgroundColor={'rgb(25, 34, 53)'} width={'100%'} justifyContent={'center'} alignItems='center' flexDir={'column'} paddingTop='100px' paddingBottom={"50px"}>
            <Box padding={'0.15em 0 0 0'} width='2em' margin='20px' backgroundColor={'#24D1E9'} />
            <Heading fontWeight={'400'} fontSize={['25', '25', '25', '35']} color='#24D1E9' textAlign={'center'} display='inline-block'>Cross Chain Bridge</Heading >
            <Heading fontWeight={'400'} fontSize={['20', '20', '25', '25', '25', '30']} color='#FFF'> Transfer your Ethereum NFTs between L1 and L2</Heading>
        </Flex>
    )
}

export default Title