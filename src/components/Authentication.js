import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';


const Authentication = (props) => {
    return (
        <Auth0Provider
            domain={props.domain}
            clientId={props.clinetID}
            redirectUri={window.location.origin}>
            {[...props.componentsToLoad]}
        </Auth0Provider>
    )
}

export default Authentication
