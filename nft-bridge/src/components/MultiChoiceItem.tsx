import PropTypes from 'prop-types';
import React from 'react';
import { capitalize } from 'lodash';
import { Flex } from '@chakra-ui/layout';
export const MultiChoiceItem = ({ name, description, logoPath, isDisabled, onClick }: { name: any, description: any, logoPath: any, isDisabled: any, onClick: any }) => (
    <>
        <Flex display='flex' padding='15px 20px' cursor='pointer' alignItems='center' justifyContent='space-between'
            onClick={onClick}
        >
            <Flex display='flex' width='100%'>
                <Flex display='flex' flexDir='column' marginLeft="20px">
                    <Flex fontWeight={'500'} fontSize='18px' display='flex' alignItems='center' color='white' >{capitalize(name)}</Flex>
                    <Flex fontSize='12px' display='flex' alignItems='center' color='white' opacity='0.5'>{capitalize(description)}</Flex>
                </Flex>
            </Flex>
        </Flex>
        <div />
    </>
);

MultiChoiceItem.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    logoPath: PropTypes.string,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func
};
