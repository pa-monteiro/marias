import React from 'react'
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver} from '@hookform/resolvers/yup'

import { useNavigation } from '@react-navigation/native';

import { InputForm } from '../../components/InputForm'
import { Button } from '../../components/Button'

import {
    Container,
    Header,
    Title,
    Content,
    Photo,
    Name,
    Form,
    Fields,
} from './styles'

const schema = Yup.object().shape({
    rating: Yup.string().required('A avaliação é obrigatória'),
})


export function Rating(){
    const navigation = useNavigation();
    const { 
        reset,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    function handleSendRating(form){
        console.log(form)
        reset();

        navigation.navigate('Map')
    }

    return(
        <Container>
            <Header>
                <Title>Como foi a sua viagem?</Title>
            </Header>
            <Content>
                <Photo 
                source={{ uri: 'https://avatars.githubusercontent.com/u/67087362?v=4' }}
                />
                <Name>Renata Santos de Souza</Name>
            </Content>

            <Form>
                <Fields>
                    <InputForm 
                    control={control}
                    name="rating"
                    placeholder="Avaliação"
                    autoCapitalize="sentences"
                    autoCorrect={false}
                    error={errors.name && errors.name.message}
                    />
                </Fields>
        <Button title="Enviar" onPress={handleSubmit(handleSendRating)}/>            
            </Form>
        </Container>
    )
}