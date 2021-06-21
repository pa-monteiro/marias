import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Map } from '../screens/Map';
import { ChoiceWomen } from '../screens/ChoiceWomen';
import { Travel } from '../screens/Travel';
import { Rating } from '../screens/Rating';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes(){
    return (
        <Navigator headerMode="none">
            <Screen name="Map" component={Map}/>
            <Screen name="ChoiceWomen" component={ChoiceWomen}/>
            <Screen name="Travel" component={Travel}/>
            <Screen name="Rating" component={Rating}/>
        </Navigator>            
    );
}