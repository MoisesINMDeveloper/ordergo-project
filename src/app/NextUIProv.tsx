import React from 'react';
import {NextUIProvider} from '@nextui-org/react';

const NextUIProv: React.FC<{children: React.ReactNode}>=({children}) => {
    return <NextUIProvider>{children}</NextUIProvider>;
};

export default NextUIProv;
