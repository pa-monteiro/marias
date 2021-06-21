import React, { useState } from 'react';
import { Platform } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

export function Search({onPress}){
    const [searchFocus, setSearchFocus] = useState(false);
    return (
        <GooglePlacesAutocomplete 
        placeholder="Para onde?"        
        onPress={onPress}
        onFail={error => console.error(error)}
        query={{
            key:'AIzaSyAT3mARL47JI7PbBDOBCiMFsc543U-7fIo',
            language: 'pt'
        }}
        textInputProps={{
            onFocus: () => setSearchFocus(true),
            onBlur: () => setSearchFocus(false),
            autoCapitalize: "none",
            autoCorrect: false
        }}
        listViewDisplayed={searchFocus}
        styles={{
            container: {
                position: 'absolute',
                top: Platform.select({
                    ios: 60, android: 40
                }),
                width: '100%'
            },
            textInputContainer: {
                flex: 1,
                backgroundColor: 'transparent',
                height: 54,
                marginHorizontal:20,
                borderTopWidth: 0,
                borderBottomWidth: 0
            },
            textInput: {
                height: 54,
                margin: 0,
                borderRadius: 0,
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 20,
                paddingRight: 20,
                marginTop: 0,
                marginLeft: 0,
                marginRight: 0,
                elevation: 5,
                shadowColor: '#000',
                shadowOpacity: 0.1,
                shadowOffset: { x: 0, y: 0},
                shadowRadius: 15,
                borderWidth: 1,
                borderColor: "#DDD",
                fontSize: 18             
            },
            listView: {
                borderColor: "#DDD",
                borderWidth: 1,
                backgroundColor:"#fff",
                marginHorizontal: 20,
                elevation: 5,
                shadowColor: '#000',
                shadowOpacity: 0.1,
                shadowOffset: { x: 0, y: 0},
                shadowRadius: 15,
                marginTop: 10
            },
            description:{
                fontSize: 16,
            },
            row: {
                padding: 20,
                height: 58
            }
        }}
        fetchDetails
        enablePoweredByContainer={false}
        listViewDisplayed="auto"
        />
    )
}