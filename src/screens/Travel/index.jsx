import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'

import {
    Container,
    Header,
    Title,
    ContainerFinishTravel,
} from './styles'
import MapView from 'react-native-maps';
import { ActivityIndicator, Image, ImageBackground, StyleSheet } from 'react-native'
import { Directions } from '../../components/Directions';
import { MarkerOrigin } from '../../components/MarkerOrigin';
import { MarkerDestination } from '../../components/MarkerDestination';
import { Button } from '../../components/Button';
import { useTheme } from 'styled-components';


export function Travel({ route }){
    const navigation = useNavigation();

    const  [isLoading, setIsLoading] = useState(false);    
    const theme = useTheme();

    const { coords, destination, address, duration } = route.params;

    useEffect(()=>{
        if (!route.params) {
            setIsLoading(true)
        }
    },[])

    function handleGoToRating(){
        navigation.navigate('Rating')
    }

    return (
        <Container>
            <ImageBackground
            source={require('../../assets/background.png')}
            style={styles.container}
            >
                <Header>
                    <Title>Viagem em Andamento</Title>
                </Header>
                { isLoading ? 
                <ActivityIndicator/>
                : (
                <MapView 
                style={{flex:1}}
                region={coords}
                showsUserLocation
                loadingEnabled
                // ref={el => (this.mapView = el)}
                >
                <Directions 
                    origin={coords} 
                    destination={destination} 
                    onReady={result => {
                        // this.mapView.fitToCoordinates(result.coordinates, {
                        //     edgePadding: {
                        //         right: getPixelSize(50),
                        //         left: getPixelSize(50),
                        //         top: getPixelSize(50),
                        //         bottom: getPixelSize(350),
                        //     }
                        // })
                    }}
                    />
                    <MarkerOrigin coords={coords} duration={duration} address={address}/>

                    <MarkerDestination coords={destination}/>
                    </MapView>    
                )}
                

                    <ContainerFinishTravel>
                        <Button
                        colorButton={theme.colors.primary}
                        colorButtonText={theme.colors.shape}
                        onPress={handleGoToRating} 
                        title="Finalizar Viagem"/>
                    </ContainerFinishTravel>
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