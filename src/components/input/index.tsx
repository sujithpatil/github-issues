import React from 'react';

import * as s from './index.styles';

const Input = ( props: { name: any; placeholder: any; onBlur: any; } ) => {

    const { name, placeholder, onBlur } = props;

    return <s.input_container>
        <s.input
            type='text'
            name={ name }
            placeholder={ placeholder }
            onBlur = { onBlur }
        />
    </s.input_container>
}

export default Input;