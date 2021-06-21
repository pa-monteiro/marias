import React from 'react';
import { Marker } from 'react-native-maps';
import markerImage from '../../assets/marker.png'
import {
    LocationBox,  
    LocationText
} from './styles'

export function MarkerDestination({coords}){
    return (
        <Marker coordinate={coords} anchor={{ x:0, y:0 }} image={markerImage}>
            <LocationBox>
                    <LocationText>{coords.title ? coords.title : ''}</LocationText>
            </LocationBox>
        </Marker>
    )
}