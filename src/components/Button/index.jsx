import React from 'react';
import {
    Container,
    Title
} from './styles';

export function Button({title, colorButton, colorButtonText, onPress, ...rest}){
    return(
        <Container colorButton={colorButton} onPress={onPress} {...rest}>
            <Title colorButtonText={colorButtonText}>
                { title }
            </Title>
        </Container>
    )
}