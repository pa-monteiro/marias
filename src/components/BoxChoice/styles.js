import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Content = styled.View`
margin-top: 20px;
margin-left: 20px;
flex-direction: row;
border-bottom-width: 1px;
border-bottom-color: ${({theme}) => theme.colors.secondary_light};
`

export const Photo = styled.Image`
width: ${RFValue(80)}px;
height: ${RFValue(80)}px;
border-radius: 50px;
margin-bottom: 10px;
`

export const TitleBox = styled.View`
margin-left: 10px;    
`

export const Name = styled.Text`
color: ${({theme}) => theme.colors.text_dark};
font-family: ${(({theme}) => theme.fonts.regular)};
font-size: ${RFValue(18)}px;
`
export const ContentButton = styled.View`
flex-direction: row;
`