import { Flex, HStack } from '@chakra-ui/layout'
import React from 'react'
import { Login } from './Login'
import { Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import SwitchService from '../components/SwitchService'
import Process from '../components/Process'
const Bridge = () => {
    return (
        <>
            <Flex backgroundColor='rgb(25, 34, 53)' paddingX='200px' gridGap={"80px"} width={'100%'} alignContent='center' justifyContent={'center'} margin={"auto"} direction={["column", "column", "column", "row", "row"]} >


                <Flex backgroundColor={"rgb(25, 34, 53)"} width={"100%"} borderRadius={'10px'} marginLeft={"40px"} flexDir='column'>
                    <HStack backgroundColor={"rgb(25, 34, 53)"} width={"100%"} height='120px' spacing="25px">
                        <SwitchService />
                    </HStack>
                    <Process />
                </Flex>
                <Login />
            </Flex>
        </>
    )
}

export default Bridge