import { QuestionOutlineIcon } from '@chakra-ui/icons'
import { Flex, Text } from '@chakra-ui/layout'
import { Button, Checkbox, FormControl, FormLabel, Image, Input, InputGroup, InputRightAddon, InputRightElement, Select } from '@chakra-ui/react'
import React from 'react'


const Process = () => {
	return (
		<Flex width='100%' borderWidth={'0.5px'} borderRadius='10px' borderColor='gray' padding={'25px'} flexDir='column'>
			<Button bg='rgb(25, 34, 53)' color='white' borderRadius='10px' borderWidth='1px' borderColor='#24D1E9' marginRight='auto'> ERC721 </Button>
			<Flex width='100%' alignItems={'center'} justifyContent='center' >
				<Text color='white' alignContent='center' justifyContent='center' fontWeight={'600'} fontSize='20px'> Select ERC721 Address</Text>
				<Text marginLeft='auto' paddingY='20px' fontSize='15px' color='gray' paddingRight='10px'> Manually enter Address</Text>
				<Checkbox />
			</Flex>
			<FormControl bg='rgb(25, 34, 53)' backgroundSize='cover'>
				<Select id='address' placeholder='Select Address' bg='rgb(25, 34, 53)' color='white' backgroundSize='cover' borderColor='gray' paddingY='10px'>
					<option style={{ padding: '50px', backgroundColor: 'rgb(25, 34, 53)', letterSpacing: '1px' }}> BSCWIN BULLS 0x222a..ac</option>
					<option style={{ padding: '10px', backgroundColor: 'rgb(25, 34, 53)' }}>BSCWIN BULLS 0x222a..ac</option>
					<option style={{ padding: '10px', backgroundColor: 'rgb(25, 34, 53)' }}>BSCWIN BULLS 0x222a..ac</option>
					<option style={{ padding: '10px', backgroundColor: 'rgb(25, 34, 53)' }}>BSCWIN BULLS 0x222a..ac</option>
				</Select>
			</FormControl>
			<Flex width='100%' paddingY='10px' flexDir='row' alignItems={'center'} justifyContent={'center'} justifyItems={'center'}>
				<Text color='white'>
					Verify bridge registry to proceed
				</Text>
				<QuestionOutlineIcon color='#24D1E9' />
				<Button bg='#24D1E9' color='white' borderRadius='25px' marginLeft="auto" > Verify now</Button>
			</Flex>
			<Flex width='100%' alignItems={'center'} justifyContent='center'>
				<Text color='white' alignContent='center' justifyContent='center' fontWeight={'600'} fontSize='20px'> Select Token IDS</Text>
				<QuestionOutlineIcon color='#24D1E9' paddingLeft='5px' w={6} h={6} />
				<Text marginLeft='auto' paddingY='20px' fontSize='15px' color='gray' paddingRight='10px'> Manually enter token ids</Text>
				<Checkbox />
			</Flex>
			<Flex alignItems={'center'} justifyContent='center' width='100%' alignContent='center' paddingY="10px" paddingBottom={"20px"}>
				<InputGroup >
					<Input color='white' width='100%' borderColor="gray">
					</Input>
					<InputRightElement width='100%' >
						<Button color='#24D1E9' variant='ghost' marginLeft={'auto'}>
							Add Token Ids
						</Button>
					</InputRightElement>
				</InputGroup>
			</Flex>
			<Flex width='100%' borderTop='1px' borderColor='gray' paddingY="10px">
				<Image src='https://www.starknet-ecosystem.com/starknet-logo.png' w={'35px'} h={"35px"} marginY='auto' />
				<Flex flexDir={"column"} padding="10px">
					<Text color={"white"} fontSize={"18px"} fontWeight="600">Enter your starknet address</Text>
					<Text color={"gray"} fontSize={"13px"} fontWeight="400">Enter the receiving Starknet address</Text>
				</Flex>
			</Flex>
			<Flex flexDir='column' paddingBottom={"10px"} >
				<Text color='gray' paddingBottom='15px'>Starknet Address:</Text>
				<Input borderColor='gray' placeholder='0x12...'></Input>
			</Flex>
			<Flex flexDir='column' >
				<Button color='#24D1E9' paddingBottom='15px' variant='link' marginLeft='auto'>Use my Starknet address</Button>
				<Button paddingX='45px' borderRadius='5px' marginLeft='auto' backgroundColor='#24D1E9' color='white' fontWeight='600'>Continue</Button>
			</Flex>
		</Flex >

	)
}

export default Process