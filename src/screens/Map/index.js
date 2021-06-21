import React, { useEffect, useState }  from 'react'
import * as Location from 'expo-location'
import {
    Container,
    Back
} from './styles'
import { Alert, Image, ActivityIndicator } from 'react-native'
import MapView from 'react-native-maps';
import { Search } from '../../components/Search';
import { Directions } from '../../components/Directions';
import { Details } from '../../components/Details';
import { MarkerOrigin } from '../../components/MarkerOrigin'
import { MarkerDestination } from '../../components/MarkerDestination'
import { getPixelSize } from '../../utils/maps'
import Geocoder from 'react-native-geocoding'

import backImage from '../../assets/back.png'

Geocoder.init('AIzaSyAT3mARL47JI7PbBDOBCiMFsc543U-7fIo')

export function Map(){
    const [coords, setCoords] = useState({})
    const [destination, setDestination] = useState({
        latitude :0,
        longitude:0,
        title:'',
        focus: false,
    });   
    const [duration, setDuration]  = useState(null)
    const [address, setaddress]  = useState('')
    const [isLoading, setIsLoading] = useState(true)

    async function onLocationSelected(data, { geometry }){
        const {location: { lat: latitude, lng: longitude}} = geometry;  
           
        const title = data.structured_formatting.main_text
        setDestination({
                latitude,
                longitude,
                title,
                focus: true,
        })

    }

    function handleBack(){
        setDestination({})
    }

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              Alert.alert('Acesso não permitido')
              return;
            }
      
            let location = await Location.getCurrentPositionAsync({});

          const response = await Geocoder.from({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            })

            const ad = response.results[0].formatted_address;            
            setaddress(ad.substring(0, ad.indexOf(',')))
            setCoords({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0143,
                longitudeDelta: 0.0134
            })

            setIsLoading(false);
          })();
    },[])

    return (
        <Container>   
            {isLoading ? <ActivityIndicator /> : (
                      
            <MapView 
            style={{flex:1}}
            region={coords}
            showsUserLocation
            loadingEnabled
            // ref={el => (this.mapView = el)}
            mapPadding={{
                top: 600,
                right: 0,
                bottom: 0,
                left: 0
            }}
            >
            {
                destination.focus && (
                    <>
                <Directions 
                origin={coords} 
                destination={destination} 
                onReady={result => {
                    setDuration(Math.floor(result.duration))
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
                               
                </>
                )
            }
            </MapView>
)}   
            {
                destination.focus ? (
            <>
            <Back onPress={handleBack}>
                <Image source={backImage}/>
            </Back>
            <Details
            coords={coords}
            destination={destination}
            address={address}
            duration={duration}
            />
            </>
            ) : <Search onPress={onLocationSelected}/>
        }
            
        </Container>
    )
}