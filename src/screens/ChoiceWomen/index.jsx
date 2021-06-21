import React from 'react';
import { useNavigation } from '@react-navigation/native'
import {
    Container,
    Header,   
    Title
} from './styles'
import { BoxChoice } from '../../components/BoxChoice';
import { ActivityIndicator, ImageBackground, StyleSheet } from 'react-native';
import { useTheme } from 'styled-components';

export function ChoiceWomen({route}){
    const { coords, destination, address, duration } = route.params;

    const theme = useTheme();
  
    const navigation = useNavigation();

    function handleAcceptWoman(){
        navigation.navigate('Travel', {
            coords,
            destination,
            address,
            duration
        })
    }

    return (
        <Container>
            <ImageBackground
            source={require('../../assets/background.png')}
            style={styles.container}
            >
                <Header>
                    <Title>Há #3 Marias indo para este destino</Title>
                </Header>

                <BoxChoice 
                uri={'https://avatars.githubusercontent.com/u/67087362?v=4'}
                name="Dunia Ghazzaoui"
                colorButton={theme.colors.primary}
                colorButtonText={theme.colors.shape}
                onPressButtonOne={handleAcceptWoman}
                />

            <BoxChoice 
                uri={'https://avatars.githubusercontent.com/u/44688572?v=4'}
                name="Paloma Monteiro"
                colorButton={theme.colors.primary}
                colorButtonText={theme.colors.shape}
                onPressButtonOne={handleAcceptWoman}

                />

            <BoxChoice 
                uri={'https://avatars.githubusercontent.com/u/71272642?v=4'}
                name="Kauana Agostini "
                colorButton={theme.colors.primary}
                colorButtonText={theme.colors.shape}
                onPressButtonOne={handleAcceptWoman}
                />
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