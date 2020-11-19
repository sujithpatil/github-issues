import React from 'react';

import * as s from './index.styles';

const Button = (props: { label: any; onClick: any; }) => {
    
    const { label, onClick } = props;

    return <s.button_container>
        <s.button
            onClick={ onClick }
        >
            {label}
        </s.button>
    </s.button_container>
}

export default Button;