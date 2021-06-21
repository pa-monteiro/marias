import React, { useState } from 'react'
import {
    Container,
    Header,
    TitleWrapper,
    Title,
    Footer,
    SignInTitle,
    FooterWrapper,
    ContainerImage
} from './styles'
import { ActivityIndicator, Image, ImageBackground, StyleSheet } from 'react-native'
import appleSVG from '../../assets/apple.svg'
import googleSVG from '../../assets/google.svg'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'
import { SignInSocialButton } from '../../components/SignInSocialButton'
import { useAuth } from '../../hooks/auth'
import { Alert } from 'react-native'

export function SignIn(){
    const [isLoading, setIsLoading] = useState(false);
    
    const theme = useTheme();
    const { signInWithGoogle, signInWithApple } = useAuth();

    async function hangleSignInWithGoogle(){
        try{
            setIsLoading(true);
            return await signInWithGoogle();   
        }catch(err){
            console.log(err);
            Alert.alert('Não foi possível conectar a conta Google')
            setIsLoading(false);
        }
    }

    async function hangleSignInWithApple(){
        try{
            setIsLoading(true);
            return await signInWithApple();   
        }catch(err){
            console.log(err);
            Alert.alert('Não foi possível conectar a conta Apple')
            setIsLoading(false);
        }      
    }

    return (
        <Container>
        <ImageBackground
        source={require('../../assets/background.png')}
        style={styles.container}
        >
            <Header>
                <TitleWrapper>
                    <Image 
                    source={require('../../assets/logoMaria-branco.png')}  
                    style={{
                        width: RFValue(150),
                        height: RFValue(100),
                    }}                                    
                    />

                    <Title>
                        Uma caminhada{'\n'} muito  mais segura{'\n'}e muito simples
                    </Title>
                </TitleWrapper>
                <SignInTitle>
                    Faça seu login com {'\n'} uma das contas abaixo
                </SignInTitle>
            </Header>

            <Footer>
                    <FooterWrapper>
                <SignInSocialButton 
                svg={googleSVG}
                onPress={hangleSignInWithGoogle}
                title="Entrar com Google"
                />

                <SignInSocialButton 
                    title="Entrar com Apple"
                onPress={hangleSignInWithApple}
                    svg={appleSVG}
                />

                
                    </FooterWrapper>

                    {
                        isLoading && <ActivityIndicator color={theme.colors.shape} size="small" style={{ marginTop: 18}}/>
                    }
            </Footer>
        </ImageBackground>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        resizeMode: 'cover'
    }
})