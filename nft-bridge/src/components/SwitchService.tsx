import { Box, HStack, Text } from '@chakra-ui/layout'
import { Image, Tab, TabList, Tabs, Flex, useRadioGroup } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Switch } from '@chakra-ui/react'
import { RadioGroup, useRadio } from '@chakra-ui/radio'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const SwitchService = () => {
  const options = [[
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    'https://www.starknet-ecosystem.com/starknet-logo.png',
    'Ethereum',
    'Starknet',
    '(WalletConnect)'
  ], [
    'https://www.starknet-ecosystem.com/starknet-logo.png',
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    'Starknet',
    'Ethereum',
    '(Argent X or Bravos)']]
  let index = 0

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'react',
    onChange: console.log,
  })

  const group = getRootProps()



  function RadioCard(props: any) {
    const { getInputProps, getCheckboxProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getCheckboxProps()
    return (
      <Flex as='label' width='100%' height='100%' flexDir='column' >
        <input {...input} />
        <Flex
          {...checkbox}
          cursor='pointer'
          width='100%'
          flexDir='column'
          borderWidth='1px'
          borderColor='gray'
          borderRadius='10px'
          _focus={{
            borderColor: '#24D1E9',
          }}

        >
          <Flex width='100%' >
            <Flex width='100%' justifyContent={'center'} flexDir="column" alignItems='center' padding='10px'>
              <Image src={options[props.index][0]} w={'25px'} h={"25px"}></Image>
              <Text fontWeight={'500'} fontSize='15px' color="white" padding={'5px'}>{options[props.index][2]}</Text>
            </Flex>
            <Flex width='100%' justifyContent={'center'} flexDir="column" alignItems='center' padding='10px'>
              <ArrowForwardIcon w={'6'} h={'7'} color={'gray'} />
            </Flex>
            <Flex width='100%' justifyContent={'center'} flexDir="column" alignItems='center' padding='10px'>
              <Image src={options[props.index][1]} w={'25px'} h={"25px"}></Image>
              <Text fontWeight={'500'} fontSize='15px' color='white' padding={'5px'}>{options[props.index][3]}</Text>
            </Flex>
          </Flex>
          <Flex width='100%' fontSize={'15px'} justifyContent='center' color='gray' >
            {options[props.index][4]}
          </Flex>
        </Flex>
      </Flex >
    )
  }

  return (
    <HStack {...group} width='100%' height='100%' spacing={'50px'}>
      {options.map((value) => {
        const key = value[1]
        index = index + 1
        const radio = getRadioProps({ key })
        return (
          <RadioCard key={key} {...radio} index={index - 1}>
          </RadioCard>
        )
      })}
    </HStack>


  )
}

export default SwitchService