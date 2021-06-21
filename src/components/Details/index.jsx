import React from 'react';
import {
    Container,
    TypeTitle,
    TypeDescription,
    TypeImage,
    RequestButton,
    RequestButtonText,
} from './styles'
import { useNavigation } from '@react-navigation/native'

import maria_icone from '../../assets/maria_icone.png'

export function Details({coords, destination, address, duration}){
    const navigation = useNavigation();

    function handleConfirmTravel(){
        navigation.navigate('ChoiceWomen',{
            coords, destination, address, duration
        })
    }
    
    return (
        <Container>
            <TypeTitle>
                Uhuul! 
            </TypeTitle>
            <TypeDescription>
               Procurando Marias ...
            </TypeDescription>
            <TypeImage source={maria_icone}/>
            <TypeTitle>Deseja confirmar essa rota?</TypeTitle>
            <TypeDescription>{''}</TypeDescription>
            <RequestButton onPress={handleConfirmTravel}>
                <RequestButtonText>Confirmar</RequestButtonText>
            </RequestButton>
        </Container>
    )
}