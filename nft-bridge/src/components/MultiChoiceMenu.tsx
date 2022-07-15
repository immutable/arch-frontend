import { Flex } from '@chakra-ui/layout';
import PropTypes from 'prop-types';
import React from 'react';
import { Menu } from './Menu';
import { MultiChoiceItem } from './MultiChoiceItem';

export const MultiChoiceMenu = ({ title, description, choices, footer }: { title: any, description: any, choices: any, footer: any }) => {
    const renderChoiceItems = () => {
        return choices.map((choice: any) => {
            return (
                <MultiChoiceItem
                    key={choice.id}
                    description={choice.description}
                    isDisabled={choice.isDisabled || false}
                    logoPath={choice.logoPath}
                    name={choice.name}
                    onClick={choice.onClick}
                />
            );
        });
    };

    return (
        <Menu>
            <Flex width="100%" backgroundColor='black' color='white' borderRadius='10px' borderWidth="1px">
                <Flex opacity={'0.7'} fontSize="12px" color='white' margin='auto'>
                    <Flex marginBottom={"30px"} fontWeight='600' fontSize='24px' lineHeight='30px' textAlign={'center'} color='white'>{title}</Flex>
                    {description && <p>{description}</p>}
                    <Flex marginTop='20px' border='1px solid' boxSizing='border-box' borderRadius='8px'>{renderChoiceItems()}</Flex>
                </Flex>
            </Flex>
        </Menu >
    );
};

MultiChoiceMenu.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    choices: PropTypes.arrayOf(PropTypes.object),
    error: PropTypes.object,
    footer: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
