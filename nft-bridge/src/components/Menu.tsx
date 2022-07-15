import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';


export const Menu = ({ children }: { children: any }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => setShow(true), 0);
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return <div>{children}</div>;
};

Menu.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
