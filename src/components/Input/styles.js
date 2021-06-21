import styled, { css } from 'styled-components/native'
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
    width: 100%;
    padding: 16px 18px;

    font-family: ${(({theme}) => theme.fonts.regular)};
    font-size: ${RFValue(14)}px;
    
    color: ${(({theme}) => theme.colors.text_dark)};
    background-color: ${(({theme}) => theme.colors.shape)};
    border-radius: 5px;

    ${({error}) => error && css`
    border-color: ${(({theme}) => theme.colors.warning)};
    border-width: 1px;
    `}

    margin-bottom: 8px;
`;