import React, { createContext, useContext, useState,useEffect } from 'react';
import * as Google from 'expo-google-app-auth';
import * as AppleAuthentication from 'expo-apple-authentication';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { api } from '../services/api'


export const AuthContext = createContext({});

function AuthProvider({children}){
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(false);

    const userStorageKey = '@marias:user';

    async function signInWithGoogle(){
        try{
            console.log('entrou aqui')
            const result = await Google.logInAsync({
                iosClientId: '580730106039-6dp52fsb70a2chg8olgo4157afsri9p0.apps.googleusercontent.com',
                androidClientId: '580730106039-1g4mo6pc8eo8ji5otbcrlsrq382sf0fg.apps.googleusercontent.com',
                scopes: ['profile','email']
            })

            if(result.type === 'success'){
                const userLogged = {
                    id: String(result.user.id),
                    email: result.user.email,
                    name: result.user.name,
                    photo: result.user.photoUrl,
                    logged: true,
                }
                setUser(userLogged);

                const response = await api.post('users', {
                    userLogged
                });

                await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged))
            }

        }catch(err){
            throw new Error(err)
        }
    }

    async function signInWithApple(){
        try{
        const credential = await AppleAuthentication.signInAsync({
            requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL,
            ]
        })      
        
        if(credential){
            const name = credential.fullName.givenName;
            const photo = `https://ui-avatars.com/api/?name=${name}&lenght=1`
            const userLogged = {
                id: String(credential.user),
                email: credential.email,
                name,
                photo
            }
            setUser(userLogged);
            await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged))
        }
        }catch(err){
            throw new Error(err);
        }
    }

    async function signOut(){
        setUser({});

        await AsyncStorage.removeItem(userStorageKey)
    }

    useEffect(() => {
        async function loadingUserStorageData(){
            const userStoraged = await AsyncStorage.getItem(userStorageKey)
            if(userStoraged){
                const userLogged = JSON.parse(userStoraged);
                setUser(userLogged)
            }
            setIsLoading(false)
        }
        loadingUserStorageData();
    }, [])

    return (
    <AuthContext.Provider value={{user, signInWithGoogle, signInWithApple, signOut, isLoading}}>
        { children }
    </AuthContext.Provider>
    )
}

function useAuth(){
    return useContext(AuthContext)
}

export {
    useAuth,
    AuthProvider
}