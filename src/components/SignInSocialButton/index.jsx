import React from 'react'
import {
    ImageContainer,
    Text,
    Button
} from './styles'
import SvgUri from 'react-native-svg-uri'

export function SignInSocialButton({
    title,    
    svg,
    ...rest
}){
    return (
      <Button {...rest}>
        <ImageContainer>
            <SvgUri
            source={svg}
            width="24"
            height="24"
            />
        </ImageContainer>

        <Text>
            {title}
        </Text>        
     </Button>
    )
}