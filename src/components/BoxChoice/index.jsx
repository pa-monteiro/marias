import React from 'react';
import {
    Content,
    Photo,
    TitleBox,
    Name,
    ContentButton
} from './styles'
import { Button } from '../Button';

export function BoxChoice({uri, name,colorButton, colorButtonText, onPressButtonOne}){
    return (
        <Content>
                <Photo source={{ uri }}/>
                <TitleBox>
                    <Name>{name}</Name>
                    <ContentButton>
                        
                    <Button
                    onPress={onPressButtonOne}
                    colorButton={colorButton}
                    colorButtonText={colorButtonText}
                    title="Aceitar"
                    />

                    <Button 
                    title="Recusar" />
                    </ContentButton>
                </TitleBox>
            </Content>
    )
}