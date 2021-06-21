import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
    flex: 1;
    background-color: ${(({theme}) => theme.colors.gray)};
`;
export const Header = styled.View`
    /* background-color: ${({theme}) => theme.colors.primary}; */
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

export const ContainerFinishTravel = styled.View`
    width: 100%;
    height: 100px;
    justify-content: center;
    align-items: center;
    background-color: ${(({theme}) => theme.colors.primary)};

`
export const RequestButton = styled(RectButton)`
    background: #C7556C;
    justify-content: center;
    align-items: center;
    height: 44px;
    align-self: stretch;
    margin-top: 10px;
`
export const RequestButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
`