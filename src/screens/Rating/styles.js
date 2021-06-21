import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    background-color: ${(({theme}) => theme.colors.background)};

    flex: 1;
`;
export const Header = styled.View`
    background-color: ${(({theme}) => theme.colors.primary)};
    width: 100%;
    height: ${RFValue(113)}px;

    align-items: center;
    justify-content: flex-end;
    padding-bottom: 19px;
`
export const Title = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-family: ${(({theme}) => theme.fonts.regular)};
    font-size: ${RFValue(18)}px;
`

export const Content = styled.View`
    width: 100%;
    align-items: center;
`
export const Photo = styled.Image`
    margin: 60px 0 20px;
    width: ${RFValue(120)}px;
    height: ${RFValue(120)}px;
    border-radius: 50;
`

export const Name = styled.Text`
    color: ${({theme}) => theme.colors.primary};
    font-family: ${(({theme}) => theme.fonts.regular)};
    font-size: ${RFValue(18)}px;
`


export const Form = styled.View`
    flex: 1;
    width: 100%;
    padding: 24px;
    justify-content: space-between;
`;

export const Fields = styled.View`

`