import React from 'react'
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver} from '@hookform/resolvers/yup'

import { useNavigation } from '@react-navigation/native';

import { InputForm } from '../../components/InputForm'
import { Button } from '../../components/Button'
import { useTheme } from 'styled-components';

import { ActivityIndicator, ImageBackground, StyleSheet } from 'react-native';

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
    const theme = useTheme();
    
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
          <ImageBackground
            source={require('../../assets/background.png')}
            style={styles.container}
            >
            <Header>
                <Title>Como foi a sua viagem?</Title>
            </Header>
            <Content>
                <Photo 
                source={{ uri: 'https://avatars.githubusercontent.com/u/67087362?v=4' }}
                />
                <Name>Dunia Ghazzaoui</Name>
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
                
                <Button
                  colorButton={theme.colors.primary}
                  colorButtonText={theme.colors.shape}
                  title="Enviar" 
                  onPress={handleSubmit(handleSendRating)}/>            
            </Form>
          </ImageBackground>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        resizeMode: 'cover',
        flex: 1
    }
})