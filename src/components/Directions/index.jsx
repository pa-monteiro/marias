import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

export function Directions({ origin, onReady, destination }){
    console.log(origin)
    console.log(destination)
    return (
        <MapViewDirections
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey="AIzaSyAT3mARL47JI7PbBDOBCiMFsc543U-7fIo"
        strokeWidth={3}
        strokeColor="#222"
        />
    )
}