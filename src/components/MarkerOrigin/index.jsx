import React from 'react';
import { Marker } from 'react-native-maps';
import markerImage from '../../assets/marker.png'
import {
    LocationBox,
    LocationTimeBox,
    LocationTimeText,
    LocationTimeTextSmall,
    LocationText
} from './styles'

export function MarkerOrigin({coords, duration, address}){
    return (
        <Marker coordinate={coords} anchor={{ x:0, y:0 }} image={markerImage}>
        <LocationBox>
            <LocationTimeBox>
                <LocationTimeText>{duration}</LocationTimeText>
                <LocationTimeTextSmall>MIN</LocationTimeTextSmall>
            </LocationTimeBox>
             <LocationText>{address}</LocationText>
        </LocationBox>
        </Marker>
    )
}