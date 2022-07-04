import PropTypes from 'prop-types';
import React from 'react';
import { toClasses } from '../utils';
import { capitalize } from 'lodash';

export const MultiChoiceItem = ({ name, description, logoPath, isDisabled, onClick }: { name: any, description: any, logoPath: any, isDisabled: any, onClick: any }) => (
    <>
        <div
            onClick={onClick}
        >
            <div>
                <div>
                    <div >{capitalize(name)}</div>
                    <div>{capitalize(description)}</div>
                </div>
            </div>
        </div>
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
