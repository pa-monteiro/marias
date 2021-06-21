import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
    background-color: ${props => props.colorButton 
                            ? props.colorButton : 
                            '#d3d3d3'
                            };
    border-radius:5px ;
    align-items: center;
    padding: 10px;
    margin-right: 10px;
`;

export const Title = styled.Text`
   font-family: ${(({theme}) => theme.fonts.medium)};
   font-size: ${RFValue(12)}px;
   color: ${props => props.colorButtonText 
                            ? props.colorButtonText : 
                            '#000000'
                            };
`;
