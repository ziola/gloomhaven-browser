import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CharactersScreen } from './src/screens/characters-screen/characters-screen';
import { SkillsScreen } from './src/screens/skills-screen/skills-screen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Characters">
                <Stack.Screen name="Characters" component={CharactersScreen}/>
                <Stack.Screen name="Skills" component={SkillsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
