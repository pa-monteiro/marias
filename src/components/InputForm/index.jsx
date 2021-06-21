import React from 'react';
import { Controller } from 'react-hook-form';
import { Input } from '../Input'
import {
    Container,
    Error
} from './styles';


export function InputForm({control, name,error, ...rest}){
    return (
        <Container>
            <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
                <Input
                error={error !== undefined ? true : false}
                onChangeText={onChange}
                value={value}
                {...rest}
                />
            )}
            name={name}
            />
            {error && <Error>{error}</Error>}
        </Container>
    )
}