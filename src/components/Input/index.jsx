import React from 'react';
import { Container } from './styles';


export function Input({error, ...rest}){
    return (
        <Container error={error} {...rest} />
    )
}