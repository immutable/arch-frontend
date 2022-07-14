import React from 'react';

export const combineProviders = (providers: any) =>
    /* eslint-disable-next-line react/display-name, react/prop-types */
    providers.reduce((Combined: any, Provider: any) => ({ children }: { children: any }) => (
        <Combined>
            <Provider>{children}</Provider>
        </Combined>
    ));
