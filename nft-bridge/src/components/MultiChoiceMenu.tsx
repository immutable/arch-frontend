import PropTypes from 'prop-types';
import React from 'react';
import { toClasses } from '../utils'
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
            <div>
                <div>
                    <div>{title}</div>
                    {description && <p>{description}</p>}
                    <div>{renderChoiceItems()}</div>
                </div>
                {footer && (
                    <>
                        {footer}
                    </>
                )}
            </div>
        </Menu>
    );
};

MultiChoiceMenu.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    choices: PropTypes.arrayOf(PropTypes.object),
    error: PropTypes.object,
    footer: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
