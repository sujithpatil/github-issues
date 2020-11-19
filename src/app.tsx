import React, { useState } from 'react';
import * as s from "./app.styles";
import Button from './components/button';
import Input from './components/input';
import Issues from './issues';

function App() {

    const [ user, setUser ] = useState('');

    const [ repo, setRepo ] = useState('');

    const [ fetchData, setFetchData ] = useState( false );    

    let inputUser=user, inputRepo=repo;

    const handleOnClick = () => {
        setUser( inputUser );
        setRepo( inputRepo );
        setFetchData( true );
    }

    const handleOnChange = ( event: { target: { name: any; value: any; }; } ) => {
        
        const { name, value } = event.target;
        if( name === 'user' ) {
             inputUser = value;
        } else if ( name === 'repo' ) {
            inputRepo = value;
        }
    }

    return (
        <s.container>
            <s.header>GitHub Issues and Comments</s.header>
            <s.form_container>
                <Input
                    name="user"
                    placeholder="User"
                    onBlur={ handleOnChange }
                />
                <Input
                    name="repo"
                    placeholder="Repo"
                    onBlur= { handleOnChange }
                />
                <Button
                    label='Go Fetch'
                    onClick = { handleOnClick }
                />
            </s.form_container>
            { fetchData && <Issues 
                user={ user }
                repo = { repo }
            /> }
        </s.container>
    );
}

export default App;
